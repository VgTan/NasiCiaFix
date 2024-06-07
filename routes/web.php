<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\MenuController;
use App\Http\Controllers\MidtransController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\ProfileController;
use App\Http\Middleware\Admin;
use App\Http\Middleware\isAdmin;
use App\Http\Middleware\isLoggedIn;
use App\Http\Middleware\LoggedIn;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::controller(AuthController::class)->group(function() {
    Route::get('/signup', 'signupIndex')->middleware(isLoggedIn::class);
    Route::post('/submit-signup', 'signup')->middleware(isLoggedIn::class);

    Route::get('/login', 'loginIndex')->name("login")->middleware(isLoggedIn::class);
    Route::post('/submit-login', 'login')->middleware(isLoggedIn::class);
    
    Route::get('/logout', 'logout');
});

Route::controller(MenuController::class)->group(function() {
    Route::get('/', 'index')->name('homeMenu')->middleware(Admin::class);
    Route::get('/cart', 'cart')->middleware(Admin::class);
});

Route::controller(OrderController::class)->group(function() {
    Route::post('/checkout', 'order')->middleware(LoggedIn::class);
    Route::get('/history', 'history')->name("history")->middleware(LoggedIn::class);
    Route::post('/add-cart', 'addCart')->name("history")->middleware(LoggedIn::class);
});

Route::controller(MidtransController::class)->group(function() {
    // Route::post('/payment', 'pay')->name("payment")->middleware(LoggedIn::class);
});



Route::controller(AdminController::class)->group(function() {
    Route::get('/admin', 'index');
    Route::post('/admin-login', 'loginadmin');

    Route::get('/dashboard', 'dash')->name('dashboard')->middleware(isAdmin::class);
    Route::post('/admin-handle', 'handle')->middleware(isAdmin::class);


    Route::get('/addmenu', 'addMenuIndex')->middleware(isAdmin::class);;
    Route::post('/add-menu', 'newMenu')->middleware(isAdmin::class);;

    Route::get('/menu-stock', 'menuStockIndex')->middleware(isAdmin::class);;
    Route::post('/set-stock', 'setStock')->middleware(isAdmin::class);
});


require __DIR__.'/auth.php';
