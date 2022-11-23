import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import "./embla.css";
import { DotButton } from "./EmblaCarouselButtons";
import { Testimonial } from "./Testimonials";

const TestimonialCarousel = ({ slides }) => {
    const [viewportRef, embla] = useEmblaCarousel({ loop: true, skipSnaps: false },[Autoplay({
        delay: 3000, stopOnInteraction: false 
    })]);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState([]);

    const scrollTo = useCallback((index) => embla && embla.scrollTo(index), [
        embla
    ]);

    const onSelect = useCallback(() => {
        if (!embla) return;
        setSelectedIndex(embla.selectedScrollSnap());
    }, [embla, setSelectedIndex]);

    useEffect(() => {
        if (!embla) return;
        onSelect();
        setScrollSnaps(embla.scrollSnapList());
        embla.on("select", onSelect);
    }, [embla, setScrollSnaps, onSelect]);

    return (
        <>
            <div className="embla">
                <div className="embla__viewport" ref={viewportRef}>
                    <div className="embla__container" >
                        {Testimonial.map((Testimonial,index) => (
                            <div className="embla__slide" key={index}>
                                <div key={index}>
                                    {Testimonial}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="embla__dots">
                    {scrollSnaps.map((_, index) => (
                        <DotButton
                            key={index}
                            selected={index === selectedIndex}
                            onClick={() => scrollTo(index)}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default TestimonialCarousel;
