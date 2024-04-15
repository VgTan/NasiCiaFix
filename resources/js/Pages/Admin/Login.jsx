import { router } from "@inertiajs/react";
import { useState } from "react";

export default function login() {
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        router.post('/admin-login', {email, password});
    };
    return (
        <>
            <div className="flex justify-center items-center h-screen">
                <div className="">
                    <span className="flex justify-center">Login</span>
                    <form onSubmit={handleSubmit}>
                        <input required type="text" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        <br></br>
                        <input required type="password" placeholder="password" value={password} onChange={(e) => setPass(e.target.value)}/>
                        <br></br>
                        <div className="flex justify-center bg-blue-300 rounded-sm m-2">
                            <button className="" type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}