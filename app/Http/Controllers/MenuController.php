<?php

namespace App\Http\Controllers;

use App\Models\Menu;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MenuController extends Controller
{
    public function index() {
        $AllMenu = Menu::all();
        // dd($AllMenu);
        return Inertia::render('Home', [
            'menus'=> $AllMenu
        ]);
    }
    public function like_handle(Request $request) {
        $menu = Menu::find($request->id);
        // dd($menu);
        $menu->update(['like_count' => ($menu->like_count + 1)]);
        return back();
    }
    public function cart() {
        $AllMenu = Menu::all();
        // dd($AllMenu);
        return Inertia::render('user/Cart', [
            'AllMenu'=> $AllMenu
        ]);
    }

}
