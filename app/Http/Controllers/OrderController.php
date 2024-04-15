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
            'od' => $od
        ]);
    }
    public function order(Request $request) {
        // dd($request->all()); 
        $user = Auth()->user();
        // dd($user);
        $validate = $request->validate([
            'total_price' => 'required',
            'name' => 'required',
            'qty' => 'required',
            'table_num' => 'required'
        ]);
        $order = new Order;
        $order->user_id = $user->id;
        $order->user_name = $user->name;
        $order->total_price = $request->total_price;
        $order->table_number = $request->table_num;
        $order->save();
        $order->order_id = "ORDER ".$order->id;
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
        $order_id = $order->order_id;
        $total_price = $order->total_price;

        \Midtrans\Config::$serverKey = config('midtrans.server_key');
        // Set to Development/Sandbox Environment (default). Set to true for Production Environment (accept real transaction).
        \Midtrans\Config::$isProduction = false;
        // Set sanitization on (default)
        \Midtrans\Config::$isSanitized = true;
        // Set 3DS transaction for credit card to true
        \Midtrans\Config::$is3ds = true;

        $params = array(
            'transaction_details' => array(
                'order_id' => $order_id,
                'gross_amount' => $order->total_price,
            ),
            'customer_details' => array(
                'first_name' => $user->name,
                'last_name' => '',
                // 'email' => $user->email,
            ),
        );

        $snapToken = \Midtrans\Snap::getSnapToken($params);
        // dd($snapToken);
        return view('checkout', compact('snapToken', 'order'));

        // dd($snapToken);
        // return redirect('/history');
    }
}