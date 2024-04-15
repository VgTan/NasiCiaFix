<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\MenuController;
use App\Http\Controllers\MidtransController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\ProfileController;
use App\Http\Middleware\isLoggedIn;
use App\Http\Middleware\LoggedIn;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::controller(AuthController::class)->group(function() {
    Route::get('/admin', 'LoginPage')->name('admin.login');
    Route::get('/signup', 'signupIndex')->middleware(isLoggedIn::class);
    Route::post('/submit-signup', 'signup')->middleware(isLoggedIn::class);

    Route::get('/login', 'loginIndex')->name("login")->middleware(isLoggedIn::class);
    Route::post('/submit-login', 'login')->middleware(isLoggedIn::class);
    
    Route::get('/logout', 'logout');
});

Route::controller(MenuController::class)->group(function() {
    Route::get('/', 'index')->name('homeMenu');
    Route::get('/cart', 'cart');
});

Route::controller(OrderController::class)->group(function() {
    Route::post('/checkout', 'order')->middleware(LoggedIn::class);
    Route::get('/history', 'history')->middleware(LoggedIn::class);
});

Route::controller(MidtransController::class)->group(function() {
    Route::post('/payment', 'pay')->name("payment")->middleware(LoggedIn::class);
});



Route::controller(AdminController::class)->group(function() {
    Route::get('/admin', 'index');
    Route::post('/admin-login', 'loginadmin');

    Route::get('/dashboard', 'dash')->name('dashboard');
    Route::post('/admin-handle', 'handle');

});


require __DIR__.'/auth.php';
