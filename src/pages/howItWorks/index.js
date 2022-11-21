import { Fragment, useEffect, useState } from "react";

import { Container } from "semantic-ui-react";

import { brands } from "./const/brandList";

import HowItWorksHeroImage from "svgIcons/HowItWorksHeroImage";
import howItWorksStepsImage1 from "../../assets/HowItWorks/HowItWorksStepsImage1.png";
import howItWorksStepsImage2 from "../../assets/HowItWorks/HowItWorksStepsImage2.png";
import testimonialImage from "../../assets/HowItWorks/testimonialImage.png";

import OutlineButton from "components/Buttons/OutlineButton/OutlineButton";
import PrimaryButton from "components/Buttons/PrimaryButton/PrimaryButton";
import QuotesIcon from "svgIcons/QuotesIcon";
import "./HowItWorks.scss";

const HowItWorks = () => {

	const [isMobile, setIsMobile] = useState(window.innerWidth < 460);
	
	useEffect(() => {
	  
	}, [isMobile])
	

	return (
		<Fragment>
			<div className="HowItWorks">
				<Container>
					<div className="HowItWorks--heroBanner">
						<div className="HowItWorks--heroBanner--heroContent">
							<h1 className="HowItWorks--heroBanner--heroContent--title">
								Influencer <span>Marketing</span><br /> Made Easy
							</h1>
							{/* <span className="feature-tag">Feature</span> */}
							<p className="HowItWorks--heroBanner--heroContent--pragraph">A step by step guide to brand collaboration </p>
							<div className="HowItWorks--heroBanner--heroContent--heroButtonArea">
								<OutlineButton link="https://hypescout.co/" text= "Watch Demo"/>
								<PrimaryButton link="https://hypescout.co/" text= "Book A Demo"/>
							</div>
						</div>
						<div className="HowItWorks--heroBanner--heroImage">
							<HowItWorksHeroImage width={isMobile ? "335" : "481"} height={isMobile ? "319.68" : "459"} />
						</div>
					</div>
				</Container>
			</div>

			<div className="signupSteps">
				<Container>
					<div className="signupSteps--contents">
						<div className="signupSteps--contents--image">
							<img src={howItWorksStepsImage1} alt="Step1&2" />
						</div>
						<div className="signupSteps--contents--contentArea">
							<div className="signupSteps--contents--contentArea--steps">
								<h4 className="signupSteps--contents--contentArea--steps--highlightHeader">Step 1</h4>
								<h3 className="signupSteps--contents--contentArea--steps--header">Sign Up</h3>
								<p className="signupSteps--contents--contentArea--steps--paragrapg">Sign up using your email, contact no. Fill in the necessary details like name, city, industry, category etc.</p>
							</div>
							<div className="signupSteps--contents--contentArea--steps">
								<h4 className="signupSteps--contents--contentArea--steps--highlightHeader">Step 2</h4>
								<h3 className="signupSteps--contents--contentArea--steps--header">Build Portfolio</h3>
								<p className="signupSteps--contents--contentArea--steps--paragrapg">Connect your social media profules with hypescout & build your portfolio to get listed on the “Find Influencer” page. You can share your portfolio link your social media handles to get more collaboration from brands.</p>
							</div>
						</div>
					</div>
					<div className="signupSteps--contents signupSteps--secondContent">
						<div className="signupSteps--contents--contentArea">
							<div className="signupSteps--contents--contentArea--steps">
								<h4 className="signupSteps--contents--contentArea--steps--highlightHeader">Step 3</h4>
								<h3 className="signupSteps--contents--contentArea--steps--header">Participate in campaigns</h3>
								<p className="signupSteps--contents--contentArea--steps--paragrapg">Participate in general campaigns or wait for the brands to invite you in thier invite only campaigns. Chat with the advertisers and confirm the payment timeline, method and modality with the brands before making the content. Hypescout won’t be liable for any delays or mishaps in the payment from the brands.</p>
							</div>
							<div className="signupSteps--contents--contentArea--steps">
								<h4 className="signupSteps--contents--contentArea--steps--highlightHeader">Step 4</h4>
								<h3 className="signupSteps--contents--contentArea--steps--header">Share post insight</h3>
								<p className="signupSteps--contents--contentArea--steps--paragrapg">Share the content insight with the brand after completing the campaign so that advertiser can calculate the ROI and potenially hire you again in the future.</p>
							</div>
						</div>
						<div className="signupSteps--contents--image">
							<img src={howItWorksStepsImage2} alt="Step2&3" />
						</div>
					</div>
				</Container>
			</div>

			<div className="loveByBrands">
				<Container>
					<h2 className="loveByBrands--header">Our Happy Clients</h2>
					<div className="loveByBrands--brandArea">
						{
							brands.map((brand, index) => {
								return (
									<div key={index} className="loveByBrands--brandArea--logo">
										{brand.logo}
									</div>
								);
							})
						}
					</div>
					<PrimaryButton />
				</Container>
			</div>

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
		</Fragment>
	)
}

export default HowItWorks