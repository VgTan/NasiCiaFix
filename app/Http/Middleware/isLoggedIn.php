<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class isLoggedIn
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        if(Auth()->user() && Auth()->user()->usertype == 'user') {
            return redirect('/history');
        }
        else if(Auth()->user() && Auth()->user()->usertype == 'admin') {
            return redirect('/dashboard');
        }
        return $next($request);
    }
}
