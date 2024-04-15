<?php

namespace App\Http\Controllers;

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

    public function login(Request $request) {
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
        dd($request->all());
    }
}
