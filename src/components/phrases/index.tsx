import Image from "next/image"
import icon from "../../assets/bibliaIcon.png"

export const PhrasesSection = () => {

    return(
        <>
            <div className="flex justify-center bg-green-50">
                <Image src={icon} alt="icone da biblia" className="w-32"/>
            </div>
            <section className="grid grid-cols-5 bg-green-50">
                <div className="p-8 bg-green-50 col-start-2 col-end-5"> 
                    <div data-hs-carousel='{
                        "loadingClasses": "opacity-0",
                        "isAutoPlay": true
                    }' className="relative max-w-screen-lg ">
                        <div className="hs-carousel relative overflow-hidden w-full min-h-[350px] bg-white rounded-lg">
                            <div className="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0 font-['Dancing_Script']">
                                <div className="hs-carousel-slide bg-green-50">
                                    <div className="flex justify-center h-full">
                                        <span className="self-center text-6xl transition duration-700 drop-shadow-yellow">
                                            Sola Scriptura
                                        </span>                        
                                    </div>
                                </div>
                                <div className="hs-carousel-slide bg-green-50">
                                    <div className="flex justify-center h-full">
                                        <span className="self-center text-6xl transition duration-700 drop-shadow-yellow">
                                            Sola Gratia
                                        </span>                        
                                    </div>
                                </div>
                                <div className="hs-carousel-slide bg-green-50">
                                    <div className="flex justify-center h-full">
                                        <span className="self-center text-6xl transition duration-700 drop-shadow-yellow">
                                            Sola Fide
                                        </span>                        
                                    </div>
                                </div>
                                <div className="hs-carousel-slide bg-green-50">
                                    <div className="flex justify-center h-full">
                                        <span className="self-center text-6xl transition duration-700 drop-shadow-yellow">
                                            Sola Christus
                                        </span>                        
                                    </div>
                                </div>
                                <div className="hs-carousel-slide bg-green-50">
                                    <div className="flex justify-center h-full">
                                        <span className="self-center text-6xl transition duration-700 drop-shadow-yellow">
                                            Soli Deo Gloria
                                        </span>                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}