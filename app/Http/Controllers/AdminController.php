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
        $user = User::all();
        $menu = Menu::all();
        return Inertia::render('Admin/Dashboard', [
            'order' => $order,
            'od' => $od,
            'user' => $user,
            'menu' => $menu
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

    public function newMenu(Request $request) {
        // dd($request);
        $val = $request->validate([
            'name' => 'required|string',
            'price' => 'required|integer|min:0',
            'stock' => 'required|min:0',
            'desc' => 'required',
        ]);
        if($val) {
            $newMenu = new Menu;
            $newMenu->name = $request->name;
            if($request->cat == null) {
                $newMenu->category = $request->newCat;
            }
            else
            {
                $newMenu->category = $request->cat;
            }
            $newMenu->price = $request->price;
            $newMenu->stock = $request->stock;
            $newMenu->description = $request->desc;
            if ($request->hasFile('img')) {
                $file = $request->file('img');
                if (!file_exists('images/menus/')) {
                    mkdir('images/menus/', 0777, true);
                }
                $fileName = $file->getClientOriginalName() . '.' .$file->getClientOriginalExtension();
                $file->move('images/menus/', $fileName);
    
                $newMenu->image = 'images/menus/' . $fileName;
            } else {
                $newMenu->image = 'images/logo.png';
            }
            $newMenu->save();
            return back();
        }       
    }

    public function addDisc(Request $request) {
        $val = $request->validate([
            'disc' => 'required|max:100|min:0',
            'selectedMenus' => 'required'
        ]);
        if($val)
        {
            // dd($request->disc);
            for ($i = 0; $i < count($request->selectedMenus); $i++) {
                $id = $request->selectedMenus[$i];
                $menu = Menu::find($id);
                $menu->update(['discounted_price' => $request->disc]);
                // dd($menu->discounted_price);
            }
        }
        return back();

    }
}
