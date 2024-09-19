import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 border-b border-gray-700">
            <div className="flex-1">
                <Link to='/' className="btn btn-ghost text-xl tracking-widest font-light">ECOVIAJE</Link>
            </div>
            <div className="flex-none gap-2">
                <div className="flex-1">
                    <Link to='/login' className="btn btn-ghost text-sm font-normal">Login</Link>
                    <Link to='/register' className="btn btn-ghost text-sm font-normal">Registro</Link>
                    <Link to='/create-trip' className="btn btn-ghost text-sm font-normal">Crear viaje</Link>
                </div>
                <button className="btn btn-ghost btn-circle">
                    <div className="indicator">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                        </svg>
                        <span className="badge badge-xs badge-primary indicator-item"></span>
                    </div>
                </button>

                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li>
                            <a className="justify-between">
                                Perfil
                                <span className="badge border border-white pb-1">Nuevo</span>
                            </a>
                        </li>
                        <li><a>Configuración</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Navbar