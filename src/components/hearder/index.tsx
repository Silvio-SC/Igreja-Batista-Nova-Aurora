'use client'

import Link from "next/link"
import logo from "../../assets/logo/logo.png"
import Image from "next/image"
import { useState } from "react"
import { XMarkIcon } from "@heroicons/react/16/solid"

export const Header = () => {


    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return(
        <header className="p-4 bg-green-50 shadow-2xl">
            <nav className="flex justify-between md:justify-center ">
                <ul 
                    className="list-none gap-2 hidden md:flex md:flex-row space-x-2 text-xl md:items-center text-black">
                    <li>
                        <Link href="/" className="hover:text-amber-500 ">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/sobre-nos" className="hover:text-amber-500">
                            Sobre nós
                        </Link>
                    </li>
                    <li>
                        <Image 
                            src={logo} alt="logo da Igreja batista nova aurora"
                            className="w-20 hidden md:block "
                        ></Image>
                    </li>
                    <li>
                        <Link href="/recursos" className="hover:text-amber-500">
                            Confissão
                        </Link>
                    </li>
                    <li>
                        <Link href="/contato" className="hover:text-amber-500">
                            Contato
                        </Link>
                    </li>
                </ul>
                <Image 
                    src={logo} alt="logo da Igreja batista nova aurora"
                    className="w-20 md:hidden "
                ></Image>
                <div className="block md:hidden">
                    <button
                        type="button"
                        className="inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="w-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                        </svg>
                    </button>
                </div>
                <dialog className="md:hidden" open={mobileMenuOpen} >
                    <div className="fixed inset-y-0 right-0 z-20 max-w-fit max-h-fit overflow-y-auto bg-green-50 shadow-xl p-6 rounded">
                        <div className="flex items-center justify-end">
                            <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                            >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>
                        <ul 
                            className="list-none gap-2 flex flex-col text-xl items-right text-black p-6">
                            <li>
                                <Link href="/" className="hover:text-amber-500" onClick={() => setMobileMenuOpen(false)}>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/sobre-nos" className="hover:text-amber-500" onClick={() => setMobileMenuOpen(false)}>
                                    Sobre nós
                                </Link>
                            </li>
                            <li>
                                <Link href="/recursos" className="hover:text-amber-500" onClick={() => setMobileMenuOpen(false)}>
                                    Confissão
                                </Link>
                            </li>
                            <li>
                                <Link href="/contato" className="hover:text-amber-500" onClick={() => setMobileMenuOpen(false)}>
                                    Contato
                                </Link>
                            </li>
                        </ul>
                    </div>
                </dialog>
            </nav>
        </header>
    )
}