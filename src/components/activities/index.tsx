import Image from "next/image"
import logo from "../../assets/logo/logo.png"

export const Activities = () => {
    return(
        <section className="p-8 bg-gray-100 flex flex-col items-center gap-12">
            <h2 className="font-['Dancing_Script'] text-5xl font-normal drop-shadow-yellow">
                Atividades
            </h2>
            <div className="w-auto">
                <div className="bg-gray-50 border-black">
                    <h3 className="text-center font-['Roboto'] p- pb-0 border-b border-black">Domingo</h3>
                    <ul className="flex flex-col gap-3 p-4">
                        <li className="border-b border-black">Manhã</li>
                        <li>
                            <p>Culto de Oração</p>
                            <p>07:30</p>
                        </li>
                        <li>08:30 - Escola Biblica Dominical</li>
                        <li>10:00 - Culto Matutino</li>
                    </ul>
                </div>
            </div>

        </section>
    )
}