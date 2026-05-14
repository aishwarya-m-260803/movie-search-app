import Link from "next/link";

export default function Header(){
    return(
        <header className="bg-blue-100 text-gray-900 px-8 py-4 flex justify-between items-center shadow-sm">

            <h1 className="text-2xl font-semibold">Movie App</h1>
            
            <nav className="space-x-8 text-sm font-medium">
                <Link href = "/" className="hover:text-blue-600 transition-colors duration-300">
                    Home
                </Link>

                <Link href = "/movies" className="hover:text-blue-600 transition-colors duration-300">
                    Movies
                </Link>

                <Link href = "/about" className="hover:text-blue-600 transition-colors duration-300">
                    About
                </Link>

                <Link href = "/contact" className="hover:text-blue-600 transition-colors duration-300">
                    Contact
                </Link>
            </nav>
        </header>
    );
}