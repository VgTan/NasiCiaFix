<?php

namespace App\Http\Controllers;

use App\Models\Menu;
use App\Models\Order;
use App\Models\OrderDetail;
use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;

class AdminController extends Controller
{
    public function index() {
        return Inertia::render('Admin/Login');
    }

    public function loginadmin(Request $request) {
        // dd($request->all());
        $loginData = $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);
        
        if($loginData) {
            if($request->email == 'admin@gmail.com') {
                $user = User::where('email', '=', $request->email)->first();
                if(Hash::check($request->password, $user->password)) {
                    auth()->login($user);
                    return redirect()->route('dashboard');
                }
            }
        }
   
        else{
            return back();
        }
    }

    public function dash() {
        $order = Order::all();
        $od = OrderDetail::all();
        return Inertia::render('Admin/Dashboard', [
            'order' => $order,
            'od' => $od
        ]);
    }

    public function handle(Request $request) {
        // dd($request->all());
        $val = $request->validate([
            'update_prog' => 'required',
            'id' => 'required'
        ]);
        if($val) {
            // dd($request->all());
            $order = Order::where('id', '=', $request->id)->first();
            // dd($order);
            $order->update(['progress' => $request->update_prog]);
        };
    }

    public function menuStockIndex() {
        $menus = Menu::all();

        return Inertia::render('Admin/menuStock', [
            'menus' => $menus
        ]);
    }

    public function setStock(Request $request) {
        $menu = Menu::where('name', $request->name)->first();
        
        // dd($menu);
        $menu->update(['stock' => $request->stock]);
        return back();
    }

    public function addMenuIndex() {
        $menus = Menu::all();

        return Inertia::render('Admin/addMenu', [
            'menus' => $menus
        ]);
    }
}
