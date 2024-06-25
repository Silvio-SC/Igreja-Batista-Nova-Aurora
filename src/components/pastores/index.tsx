import Geu from "../../assets/pastores/Geu.jpg"
import Gilson from "../../assets/pastores/Gilson.jpg"
import Eli from "../../assets/pastores/Eli.jpg"
import { PastoresCard } from "./PastoresCard"

export const Pastores = () => {
    return(
        <section className="flex flex-col items-center gap-12 lg:gap-[5%] lg:flex-row justify-center">
            <PastoresCard 
                img={Geu}  
                name="Pr. Genilson Zamba" 
                facebook="https://www.facebook.com/genilson.souzazamba"
                instagram="https://www.instagram.com/genilsonsouzazamba/"
            />
            <PastoresCard 
                img={Gilson}  
                name="Pr. Gílson Zamba" 
                facebook="https://www.facebook.com/gilson.zamba"
                instagram="https://www.instagram.com/gilsonzamba/"
            />
            <PastoresCard 
                img={Eli}  
                name="Pr. Eli Marau" 
                facebook="https://www.facebook.com/eli.marau.9"
                instagram="https://www.instagram.com/marau.eli/"
            />
        </section>
    )
}

