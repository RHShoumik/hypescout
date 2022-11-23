
import testimonialImage from "assets/HowItWorks/testimonialImage.png";

import QuotesIcon from "svgIcons/QuotesIcon";

import "./Testimonials.scss";

const Testimonial4 = () => {
    return (
        <div className="testimonials">
            <div className="testimonials--image">
                <img src={testimonialImage} alt="Testomonial" />
            </div>
            <div className="testimonials--contentArea">
                <div className="testimonials--contentArea--inside">
                    <QuotesIcon />
                    <p className="testimonials--contentArea--inside--pragraph">At Pathao we always follow data-driven approach for everything. HypeScout‘s technology ensures that practice
                        in every step of the campaign, from planning to maximizing
                        the ROI.
                    </p>
                    <div className="testimonials--contentArea--inside--details">
                        <p className="testimonials--contentArea--inside--details--name">Sayeda Nabila Mahabub</p>
                        <p className="testimonials--contentArea--inside--details--designation">Director of Marketing & PR, Pathao</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial4