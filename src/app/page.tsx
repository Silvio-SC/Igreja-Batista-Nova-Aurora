import { Activities } from '@/components/activities'
import { Carousel } from '@/components/carousel'
import { Pastores } from '@/components/pastores'
import { PhrasesSection } from '@/components/phrases'

export default function Home() {
  return (
    <main>
      <section className="
        flex min-h-full flex-col items-center justify-center px-6 py-40 md:px-24 md:py-48 font-roboto
        bg-[url('../assets/Background.png')] bg-no-repeat bg-cover bg-center
        ">
        <div className="flex flex-col z-10 max-w-5xl w-full gap-12">
            <h1 className="
              animate-aparecer text-3xl md:text-5xl font-normal text-center drop-shadow-yellow font-['Dancing_Script'] 
              ">
              Igreja Batista Nova Aurora
            </h1>
            <h2 className="
              animate-aparecer text-3xl sm:text-4xl md:text-6xl font-normal text-center drop-shadow-yellow font-['century_gothic']">
              "Vivendo e compartilhando o Evangelho da cruz."
            </h2>
        </div>
      </section>
      <Activities />
      {/* <PhrasesSection /> */}
      <section className="px-8 py-36 bg-green-50 flex flex-col items-center gap-24">
        <h2 className="font-['Dancing_Script'] text-5xl font-normal drop-shadow-yellow xl:text-7xl">
          Equipe Pastoral
        </h2>
        <Pastores />
      </section> 
      <h2 className="font-['Dancing_Script'] text-5xl font-normal drop-shadow-yellow xl:text-7xl">
          Nossa Comunidade
      </h2>
      <Carousel />
      <section className='flex justify-center py-36'>
        <div className='w-3/4 rounded-lg overflow-hidden'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3674.939469195651!2d-43.58516207468929!3d-22.915603379248807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9be46c907dce03%3A0xcfa5d6830478b1b4!2sIgreja%20Batista%20Nova%20Aurora!5e0!3m2!1spt-BR!2sbr!4v1706315692149!5m2!1spt-BR!2sbr" width="100%" height="450" loading="lazy"></iframe>
        </div>
      </section>
    </main>
  )
}
 