import Image from "next/image"
import logo from "../../assets/logo/logo.png"

export const Footer = () => {
    return(
        <footer className="p-8 bg-green-50 text-black shadow-2xl ">
            <div className="flex gap-8 items-center justify-center ">
                <div>
                    <Image src={logo} alt="Logo da igreja" className="w-20"></Image>
                </div>
                <ul>
                    <li>Endereção: R. Roberto Morena, 292 - Campo Grande, Rio de Janeiro - RJ</li>
                    <li>Email: igrejabatistanovaaurora@gmail.com</li>
                    <li>Telefone: (21) 3402-1107</li>
                </ul>
            </div>
        </footer>
    )
}