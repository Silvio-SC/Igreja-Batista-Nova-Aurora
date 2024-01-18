import Image from "next/image"
import logo from "../../assets/logo/logo.png"

export const Activities = () => {
    return(
        <section className="p-8 bg-green-50 flex flex-col items-center gap-12">
            <h2 className="font-['Dancing_Script'] text-5xl font-normal drop-shadow-yellow xl:text-7xl">
                Atividades
            </h2>
            <div className="w-auto flex gap-4">
                <div className="bg-transparent">
                    <h3 className="text-center font-['Roboto'] pb-0 border-b-2 border-black text-xl font-medium text-xl font-medium drop-shadow-[1px_1px_1px_rgba(244,171,12,0.75)] xl:text-3xl xl:border-b-3">Domingo</h3>
                    <ul className="flex flex-col gap-2 p-2 text-white">
                        <li className="bg-emerald-500 rounded py-1 px-3 hover:text-gray-100 hover:bg-emerald-600 duration-300 xl:text-xl">07:30 - Culto de Oração</li>
                        <li className="bg-emerald-500 rounded py-1 px-3 hover:text-gray-100 hover:bg-emerald-600 duration-300 xl:text-xl">08:30 - Escola Biblica Dominical</li>
                        <li className="bg-emerald-500 rounded py-1 px-3 hover:text-gray-100 hover:bg-emerald-600 duration-300 xl:text-xl">10:00 - Culto Matutino</li>
                        <li className="bg-emerald-500 rounded py-1 px-3 hover:text-gray-100 hover:bg-emerald-600 duration-300 xl:text-xl">18:00 - União de Treinamento</li>
                        <li className="bg-emerald-500 rounded py-1 px-3 hover:text-gray-100 hover:bg-emerald-600 duration-300 xl:text-xl">19:15 - Culto Noturno</li>
                    </ul>
                </div>
                <div className="bg-transparent">
                    <h3 className="text-center font-['Roboto'] pb-0 border-b-2 border-black text-xl font-medium drop-shadow-[1px_1px_1px_rgba(244,171,12,0.75)] xl:text-3xl xl:border-b-3">Quarta</h3>
                    <ul className="flex flex-col gap-3 p-2 text-white">
                        <li className="bg-emerald-500 rounded py-1 px-3 hover:text-gray-100 hover:bg-emerald-600 duration-300 xl:text-xl">18:30 - Culto de Oração</li>
                        <li className="bg-emerald-500 rounded py-1 px-3 hover:text-gray-100 hover:bg-emerald-600 duration-300 xl:text-xl">19:30 - Estudo Bíblico</li>
                    </ul>
                </div>
                <div className="bg-transparent">
                    <h3 className="text-center font-['Roboto'] pb-0 border-b-2 border-black text-xl font-medium drop-shadow-[1px_1px_1px_rgba(244,171,12,0.75)] xl:text-3xl xl:border-b-3">Outros Dias</h3>
                    <ul className="flex flex-col gap-3 p-2 text-white">
                        <li className="bg-emerald-500 rounded py-1 px-3 hover:text-gray-100 hover:bg-emerald-600 duration-300 xl:text-xl">
                            <p>Segunda</p>
                            <p>19:00 - Embaixadores e Mensageiras do Rei</p>
                            <p>19:30 - Ide e Pregai</p>
                        </li>
                        <li className="bg-emerald-500 rounded py-1 px-3 hover:text-gray-100 hover:bg-emerald-600 duration-300 xl:text-xl">
                            <p>Sexta</p>
                            <p>18:00 - Orquestra</p>
                        </li>
                        <li className="bg-emerald-500 rounded py-1 px-3 hover:text-gray-100 hover:bg-emerald-600 duration-300 xl:text-xl">
                            <p>Sabado</p>
                            <p>14:00 - Aulas de Música</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}