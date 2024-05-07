export default function Fail( {fail} ) { 
    return ( 
        <div className="">
            <div className="h-screen w-screen flex justify-center items-center text-red-500 text-xl">
                <div className="">
                    <p>{fail}</p>
                    <a href="/history" className="text-white">Return to History</a>
                </div>
            </div>
        </div>
    )
}