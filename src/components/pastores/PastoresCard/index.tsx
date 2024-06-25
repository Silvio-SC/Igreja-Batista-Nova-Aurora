import Link from "next/link"
import { FaInstagram, FaFacebook  } from "react-icons/fa";
import Image from "next/image"

export const PastoresCard = (
            {img, name, facebook, instagram}:
            {img: any, name: string, facebook: string, instagram: string}
        ) => {
    return(
            <div className="w-3/4 lg:w-1/4 drop-shadow-lg grayscale-[30%] hover:grayscale-0 shadow-2xl shadow-inner overflow-hidden">
                <Image src={img} alt="Foto do Pastor Genilson" className="z-10"/>
                <div className="bg-gradient-to-t from-gray-700 z-20 w-full h-1/2 absolute bottom-0 left-0">
                </div>
                <div className="z-30 absolute bottom-0 left-0 p-4 text-white">
                    <h2 className="text-md md:text-xl">{name}</h2>
                    <div className="flex gap-2 mt-1">
                        <Link href={facebook} target="_blank">
                            <FaFacebook className="hover:text-indigo-950 sm:hidden" size="1.5rem"/>
                            <FaFacebook className="hover:text-indigo-950 hidden sm:block" size="1.75rem"/>
                        </Link>
                        <Link href={instagram} target="_blank">
                            <FaInstagram className="hover:text-indigo-950 sm:hidden" size="1.5rem"/>
                            <FaInstagram className="hover:text-indigo-950 hidden sm:block" size="1.75rem"/>
                        </Link>
                    </div>
                </div>
            </div>
    )
}
// <div className="w-1/4 drop-shadow-lg grayscale-[30%] hover:grayscale-0 shadow-2xl shadow-inner overflow-hidden">
//    <Image src={Gilson} alt="Foto do Pastor Genilson" className="z-10"/>
//   <div className="bg-gradient-to-t from-gray-700 z-20 w-full h-1/2 absolute bottom-0 left-0">
//    </div>
//    <div className="z-30 absolute bottom-0 left-0 p-4 text-white">
//       <h2 className="text-xl">Pr. Gílson Zamba</h2>
//        <div className="flex gap-2 mt-1">
//            <Link href="https://www.facebook.com/gilson.zamba">
//                <FaFacebook className="hover:text-indigo-950" size="1.5rem"/>
//            </Link>
//            <Link href="https://www.instagram.com/gilsonzamba/">
//                <FaInstagram className="hover:text-indigo-950" size="1.5rem"/>
//            </Link>
//        </div>
//    </div>
//</div>
//<div className="w-1/4 drop-shadow-lg grayscale-[40%] hover:grayscale-0 shadow-2xl shadow-inner overflow-hidden">
//    <Image src={Eli} alt="Foto do Pastor Genilson" className="z-10" />
//    <div className="bg-gradient-to-t from-gray-700 z-20 w-full h-1/2 absolute bottom-0 left-0">
//    </div>
//    <div className="z-30 absolute bottom-0 left-0 p-4 text-white">
//        <h2 className="text-xl">Pr. Eli Marau</h2>
//        <div className="flex gap-2 mt-1">
//            <Link href="https://www.facebook.com/eli.marau.9">
//                <FaFacebook className="hover:text-indigo-950" size="1.5rem"/>
//           </Link>
//            <Link href="https://www.instagram.com/marau.eli/">
//                <FaInstagram className="hover:text-indigo-950" size="1.5rem"/>
//            </Link>
//        </div>
//    </div>
//</div>