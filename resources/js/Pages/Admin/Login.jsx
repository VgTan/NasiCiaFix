export default function login() {
    const handleSubmit = (e) => {
        e.preventDefault();
        Inertia.post('/login', formData);
    };
    return (
        <>
            <div className="flex justify-center items-center h-screen">
                <div className="">
                    <span className="flex justify-center">Login</span>
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder="nama"/>
                        <br></br>
                        <input type="password" placeholder="password"/>
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