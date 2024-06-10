export default function NavbarAdmin() {
    return (
    <div className="flex justify-between items-center p-10 mb-4 md:mb-8 ml-2 -mt-1">
        <a href="/menu-stock" className="font-bold text-xl md:text-2xl text-orange-500">Menu Stock</a>
        <a href="/addmenu" className="font-bold text-xl md:text-2xl text-orange-500">Edit Menu</a>
        <a href="/dashboard" className="font-bold text-xl md:text-2xl text-orange-500">Orders</a>
        {/* <a href="/addevent" className="font-bold text-xl md:text-2xl text-orange-500">Discount</a> */}
        <a href="/logout" className="font-bold text-xl md:text-2xl text-red-500">LOGOUT</a>
    </div>
    )
}