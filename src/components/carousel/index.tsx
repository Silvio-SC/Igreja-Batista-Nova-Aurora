import Image from "next/image"
import f1 from "../../assets/carousel/carousel1.jpg"
import f5 from "../../assets/carousel/carousel2.jpg"
import f4 from "../../assets/carousel/carousel3.jpg"
import f2 from "../../assets/carousel/carousel4.jpg"
import f3 from "../../assets/carousel/carousel5.jpg"

export const Carousel = () => {

    return(
        <section className="grid grid-cols-5 bg-green-50 py-36">
            <div className="p-8 bg-green-50 col-start-1 col-end-6 md:col-start-2 md:col-end-5"> 
                <div data-hs-carousel='{
                    "loadingClasses": "opacity-0",
                    "isAutoPlay": true
                }' className="relative max-w-screen-lg">
                    <div className="hs-carousel relative overflow-hidden w-full min-h-[450px] bg-white rounded-lg">
                        <div className="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0">
                            <div className="hs-carousel-slide">
                                <div className="flex justify-center">
                                <span className="self-center flex justify-center transition duration-700 overflow-hidden ">
                                    <Image src={f1} alt='fotos da comunidade' className="h-[550px] sm:min-h-[520px] max-w-max"/>
                                </span>
                                </div>
                            </div>
                            <div className="hs-carousel-slide">
                                <div className="flex justify-center">
                                    <span className="flex justify-center self-center transition duration-700 overflow-hidden">
                                        <Image src={f2} alt='fotos da comunidade' className="h-[450px] sm:h-[520px] max-w-max position"/>
                                    </span>
                                </div>
                            </div>
                            <div className="hs-carousel-slide">
                                <div className="flex justify-center">
                                    <span className="flex justify-center self-center transition duration-700 overflow-hidden">
                                        <Image src={f3} alt='fotos da comunidade' className="h-[450px] sm:h-[520px] max-w-max"/>
                                    </span>                        
                                </div>
                            </div>
                            <div className="hs-carousel-slide">
                                <div className="flex justify-center">
                                    <span className="flex justify-center self-center transition duration-700 overflow-hidden">
                                        <Image src={f4} alt='fotos da comunidade' className="h-[450px] sm:h-[520px] max-w-max"/>
                                    </span>                        
                                </div>
                            </div>
                            <div className="hs-carousel-slide">
                                <div className="flex justify-center">
                                    <span className="flex justify-center self-center transition duration-700 overflow-hidden">
                                        <Image src={f5} alt='fotos da comunidade' className="h-[450px] sm:h-[560px] max-w-max"/>
                                    </span>                       
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="hs-carousel-pagination flex justify-center absolute bottom-3 start-0 end-0 space-x-2">
                        <span className="hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 w-3 h-3 border border-gray-700 rounded-full cursor-pointer"></span>
                        <span className="hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 w-3 h-3 border border-gray-700 rounded-full cursor-pointer"></span>
                        <span className="hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 w-3 h-3 border border-gray-700 rounded-full cursor-pointer"></span>
                        <span className="hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 w-3 h-3 border border-gray-700 rounded-full cursor-pointer"></span>
                        <span className="hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 w-3 h-3 border border-gray-700 rounded-full cursor-pointer"></span>
                    </div>
                </div>
            </div>
        </section>
    )
}