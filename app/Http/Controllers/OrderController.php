<?php

namespace App\Http\Controllers;

use App\Models\Menu;
use App\Models\Order;
use App\Models\OrderDetail;
use Illuminate\Http\Request;
use Inertia\Inertia;

class OrderController extends Controller
{
    public function history() {
        $user = Auth()->user();
        $order = Order::where('user_id', $user->id)->get();
        $od = OrderDetail::all();
        // dd($od);
        return Inertia::render('user/History', [
            'user' => $user,
            'order' => $order,
            'od' => $od,
        ]);
    }
    public function order(Request $request) {
        // dd($request->all()); 
        $user = Auth()->user();
        // dd($user);
        $validate = $request->validate([
            'total_price_tax' => 'required',
            'name' => 'required',
            'qty' => 'required',
            'proof' => 'required'
            // 'table_num' => 'required'
        ]);
        $order = new Order;
        $order->user_id = $user->id;
        $order->user_name = $user->name;
        $order->total_price = $request->total_price_tax;
        if ($request->hasFile('proof')) {
            $file = $request->file('proof');
            if (!file_exists('images/bukti/')) {
                mkdir('images/bukri/', 0777, true);
            }
            $fileName = bcrypt($file->getClientOriginalName()) . '.' .$file->getClientOriginalExtension();
            $file->move('images/bukti/', $fileName);

            $order->image = 'images/bukti/' . $fileName;
        } else {
            return back();
        }
        $order->save();
        $order->order_id = "ORDER #".$order->id;
        $order->order_number = substr(str_shuffle('ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'), 0, 5) . str_pad((string)$order->id, 2, '0', STR_PAD_LEFT);
        $order->save();
        for ($i = 0; $i < count($request->name); $i++) {
            $name = $request->name[$i];
            $quantity = $request->qty[$i];
            $menu = Menu::where('name', $name)->first();
            
            $od = new OrderDetail;
            $od->order_id = $order->id;
            $od->user_name = $user->name;
            $od->menu_name = $name;
            $od->qty = $quantity;
            $od->price = $menu->price * $quantity;

            $od->save();
            // OrderDetail::create(['user_name' => $user, 'menu_name' => $name, 'qty' => $quantity, 'price' => $menu->price*$quantity]);
        }
        // Set your Merchant Server Key
        
        
        return redirect('/history');
        // \Midtrans\Config::$serverKey = config('midtrans.server_key');
        // // Set to Development/Sandbox Environment (default). Set to true for Production Environment (accept real transaction).
        // \Midtrans\Config::$isProduction = false;
        // // Set sanitization on (default)
        // \Midtrans\Config::$isSanitized = true;
        // // Set 3DS transaction for credit card to true
        // \Midtrans\Config::$is3ds = true;

        // $params = array(
        //     'transaction_details' => array(
        //         'order_id' => $order_id,
        //         'gross_amount' => $order->total_price,
        //     ),
        //     'customer_details' => array(
        //         'first_name' => $user->name,
        //         'last_name' => '',
        //         // 'email' => $user->email,
        //     ),
        // );
        

        // $snapToken = \Midtrans\Snap::getSnapToken($params);
        // // dd($snapToken);
        // return view('checkout', compact('snapToken', 'order'));

        // dd($snapToken);
        // return redirect('/history');
    }
}