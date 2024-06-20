import Link from "next/link"
import logo from "../../assets/logo/logo.png"
import Image from "next/image"

export const Header = () => {
    return(
        <header className="p-4 bg-green-50 shadow-2xl">
            <nav className="flex gap-4 justify-center">
                <ul 
                    className="list-none flex space-x-2 text-xl items-center text-black">
                    <li>
                        <Link href="/" className="hover:text-amber-500">
                            Home
                        </Link> |
                    </li>
                    <li>
                        <Link href="/sobre-nos" className="hover:text-amber-500">
                            Sobre nós
                        </Link>
                    </li>
                    <li>
                        <Image 
                            src={logo} alt="logo da Igreja batista nova aurora"
                            className="w-20"
                        ></Image>
                    </li>
                    <li>
                        <Link href="/recursos" className="hover:text-amber-500">
                            Confissão
                        </Link> |
                    </li>
                    <li>
                        <Link href="/contato" className="hover:text-amber-500">
                            Contato
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}