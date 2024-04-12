<?php

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

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });
Route::get('/login', function () {
    return view('user.login');
});

Route::controller(MenuController::class)->group(function() {
    Route::get('/', 'index')->name('homeMenu');
    Route::get('/cart', 'cart');

});

Route::controller(OrderController::class)->group(function() {
    Route::post('/checkout', 'order')->middleware(LoggedIn::class);
    Route::get('/status', 'index')->middleware(LoggedIn::class);
});

Route::controller(MidtransController::class)->group(function() {
    Route::post('/payment', 'pay')->middleware(LoggedIn::class);
});

Route::controller(AuthController::class)->group(function() {
    Route::get('/admin', 'LoginPage')->name('admin.login');
    Route::get('/signup', 'signupIndex')->middleware(isLoggedIn::class);
    Route::post('/submit-signup', 'signup')->middleware(isLoggedIn::class);

    Route::get('/login', 'loginIndex')->name("login")->middleware(isLoggedIn::class);
    Route::post('/submit-login', 'login')->middleware(isLoggedIn::class);
    
    Route::get('/logout', 'logout');

});



// Route::get('/admin', function() {
//     return Inertia::render('admin/Login');
// });

return Inertia::render('admin/Login');
Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
