import { Activities } from '@/components/activities'
import { Carousel } from '@/components/carousel'

export default function Home() {
  return (
    <main>
      <section className="
        flex min-h-full flex-col items-center justify-center px-24 py-48 font-roboto
        bg-[url('../assets/Background.png')] bg-no-repeat bg-cover bg-center
        ">
        <div className="flex flex-col z-10 max-w-5xl w-full gap-12">
            <h1 className="
              animate-aparecer text-5xl font-normal text-center drop-shadow-yellow font-['Dancing_Script'] 
              ">
              Igreja Batista Nova Aurora
            </h1>
            <h2 className='
              animate-aparecer text-6xl font-normal text-center drop-shadow-yellow
            '>
              "Vivendo e compartilhando o Evangelho da cruz."
            </h2>
        </div>
      </section>
      <Activities />
      <section className="p-8 bg-green-50 flex flex-col items-center gap-12">
        <h2 className="font-['Dancing_Script'] text-5xl font-normal drop-shadow-yellow xl:text-7xl">
          Equipe Pastoral
        </h2>
      </section> 
      <Carousel />
    </main>
  )
}
 