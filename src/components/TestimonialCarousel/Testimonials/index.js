import Testimonial1 from "./Testimonial1";
import Testimonial2 from "./Testimonial2";
import Testimonial3 from "./Testimonial3";
import Testimonial4 from "./Testimonial4";

export const Testimonial = [<Testimonial1 />, <Testimonial2 />, <Testimonial3 />, <Testimonial4 />];
export const testimonialByIndex = index => Testimonial[index % Testimonial.length];
