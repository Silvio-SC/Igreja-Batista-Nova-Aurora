import { ActivityCard } from "./activityCard"

export const Activities = () => {
    return(
        <section className="px-8 py-36 bg-green-50 flex flex-col items-center gap-24">
            <h2 className="font-['Dancing_Script'] text-5xl font-normal drop-shadow-yellow xl:text-7xl">
                Atividades
            </h2>
            <div className="w-auto flex flex-col md:flex-row gap-4">
                <div className="bg-transparent flex flex-col itens-center">
                    <h3 className="text-center font-['Roboto'] pb-0 border-b-2 border-black text-xl font-medium text-xl font-medium drop-shadow-[1px_1px_1px_rgba(244,171,12,0.75)] xl:text-3xl xl:border-b-3">Domingo</h3>
                    <ul className="flex flex-col gap-2 p-2 w-[320px]t">
                        <ActivityCard> 07:30 - Culto de Oração</ActivityCard> 
                        <ActivityCard> 08:30 - Escola Biblica Dominical</ActivityCard> 
                        <ActivityCard> 10:00 - Culto Matutino</ActivityCard> 
                        <ActivityCard> 18:00 - Uniões de Treinamento</ActivityCard> 
                        <ActivityCard> 19:15 - Culto Noturno</ActivityCard> 
                    </ul>
                </div>
                <div className="bg-transparent">
                    <h3 className="text-center font-['Roboto'] pb-0 border-b-2 border-black text-xl font-medium drop-shadow-[1px_1px_1px_rgba(244,171,12,0.75)] xl:text-3xl xl:border-b-3">Quarta</h3>
                    <ul className="flex flex-col gap-3 p-2 "> 
                        <ActivityCard> 
                            <p>Primeira Quarta do Mês</p>
                            <p>19:30 - Culto nos Lares</p>
                        </ActivityCard> 
                        <ActivityCard> 
                            <p>Demais Quartas</p>
                            <p>19:30 - Estudo Bíblico</p>
                        </ActivityCard> 
                    </ul>
                </div>
                <div className="bg-transparent">
                    <h3 className="text-center font-['Roboto'] pb-0 border-b-2 border-black text-xl font-medium drop-shadow-[1px_1px_1px_rgba(244,171,12,0.75)] xl:text-3xl xl:border-b-3">Outros dias</h3>
                    <ul className="flex flex-col gap-3 p-2">
                        <ActivityCard> 
                            <p className="drop-shadow-[1px_1px_1px_rgba(244,171,12,0.5)]">Segunda</p>
                            <p>19:00 - Embaixadores e Mensageiras do Rei</p>
                            <p>19:30 - Ide e Pregai</p>
                        </ActivityCard> 
                        <ActivityCard> 
                            <p className="drop-shadow-[1px_1px_1px_rgba(244,171,12,0.5)]">Terça</p>
                            <p>08:30 - Jardim de Oração</p>
                            <p>19:30 - Ensaio do Coral Renascer</p>
                        </ActivityCard> 
                        <ActivityCard> 
                            <p className="drop-shadow-[1px_1px_1px_rgba(244,171,12,0.5)]">Quinta</p>
                            <p>19:00 - Clube de Xadrez</p>
                        </ActivityCard> 
                        <ActivityCard> 
                            <p className="drop-shadow-[1px_1px_1px_rgba(244,171,12,0.5)]">Sexta</p>
                            <p>18:00 - Orquestra</p>
                        </ActivityCard> 
                    </ul>
                </div>
            </div>
        </section>
    )
}