<?php

namespace App\Http\Controllers;

use App\Models\Menu;
use App\Models\Order;
use App\Models\OrderDetail;
use Illuminate\Http\Request;
use Midtrans;
use Inertia\Inertia;
class MidtransController extends Controller
{
    public function pay(Request $request) {
        $user = Auth()->user();
        $order_id = $request->order_id;
        // dd($request->order_id);
        $order = Order::where('order_id', $order_id)->first();

        $order_details = OrderDetail::where('order_id', $order->id)->get();
        foreach($order_details as $detail) {
            $menuDetail = Menu::where('name', $detail->menu_name)->first();
            $stock = $menuDetail->stock - $detail->qty;
            if($stock <= 0) {
                return Inertia::render('Components/Fail', [
                    'fail' => 'Not Enough Stock'
                ]);
            }
        }
        // dd($order);

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
    }

    public function callback(Request $request) {
        $serverKey = config('midtrans.server_key');
        $hashed = hash("sha512", $request->order_id.$request->status_code.$request->gross_amount.$serverKey);
        if($hashed == $request->signature_key) {
            if($request->transaction_status == 'capture') {
                $order = Order::where("order_id",$request->order_id)->first();
                // dd($order);
                $order->update(['status' => 'Paid']);
                $order->update(['progress' => 'Preparing']);

                $order_details = OrderDetail::where('order_id', $order->id)->get();
                // dd($order_details);
                foreach($order_details as $detail) {
                    $menuDetail = Menu::where('name', $detail->menu_name)->first();
                    $stock = $menuDetail->stock - $detail->qty;
                    $menuDetail->update(['stock' => $stock]);
                }
                return redirect('/history');
            }
        }
    }
}
