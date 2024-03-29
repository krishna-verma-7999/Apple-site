import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all";
import ModelView from "./ModelView";


gsap.registerPlugin(ScrollTrigger);

const Model = () => {

    useGSAP(() => {
        gsap.to('#heading', {
            scrollTrigger: {
                trigger: '#heading',
                start: 'bottom bottom'

            },
            y: 0,
            opacity: 1
        })
    }, [])

    return (
        <section className='common-padding'>
            <div className='screen-max-width'>
                <h1 id="heading" className="section-heading">
                    Take a close look.
                </h1>
                <div className="flex flex-col items-center mt-5">
                    <div className="w-full h-[75vh] md:h-[90vh] overflow-hidden relative">
                        <ModelView />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Model