<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Session;

class AuthController extends Controller
{
    public function signupIndex() {
        return Inertia::render("user/Signup");
    }
    public function signup(Request $request)
    {
        // dd($request);
        $validatedData = $request->validate([
            'name' => 'required|max:255',
            'email' => 'required|email|unique:users',
            'password' => 'required',
        ]);
        // dd($validatedData);

        $validatedData['password'] = bcrypt($request->password);
        // dd($validatedData);
        $user = User::create($validatedData);
        $accessToken = $request->password;
        return redirect()->route("login")->with( 
            ['user' => $request->email, 
            'access_token' => $accessToken
            ]);
    }

    public function loginIndex()
    {
        $user = session('user');
        $accessToken = session('access_token');
        return Inertia::render("user/Login", [
            'user' => $user, 
            'access_token' => $accessToken  
        ]);
    }
    public function login(Request $request)
    {
        if(Session::has('user')) {
            return back();
        }
        $loginData = $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);
        if($loginData) {
            // dd($request);
            $user = User::where('email', '=', $request->email)->first();
            if($user) {
                if(Hash::check($request->password, $user->password)) {
                    auth()->login($user);
                    return redirect('/')->with('Success');
                }
            }
        }
        else{
            return Inertia::render("user/Signup");
        }
        // return response(['user' => auth()->user(), 'access_token' => $accessToken]);
    }

    public function logout() {
        Auth::logout();
        return redirect("/login");
    }
    public function LoginPage() {
        $aa = 1;
        return Inertia::render('admin/Login' , [
        ]);
    }
}
