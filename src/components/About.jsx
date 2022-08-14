const About = () => {
    return ( 
        <div className="about">
            <div className="about-section">
                <div className="text">
                    <h1>
                        We are leaders in the industry.
                    </h1>
                    <p>
                        Here at Shiloh Decorative Ideas, we do as our name implies. We take client ideas and bring them to life in the best quality.
                    </p>
                    <a href="/contact-us" className="explore about">Contact Us</a>
                </div>
                <div className="stats">
                    <p>
                        Over <br /><span>200</span> <br />successful projects
                    </p>
                </div>
            </div>
            <div className="about-paragraphs">
                <div className="about-paragraph first">
                    <h1>Who We Are</h1>
                    <p>We are a 100% black owned family business, passionate about wood work. We have been in business since 2007, we pride ourselves with the best quality work and great customer service.</p>
                </div>
                <div className="about-paragraph second">
                    <h1>Our Standards</h1>
                    <p>Our business is based on the trust of our clients and our employees. Trust in both our performance and ethical principles.</p>
                </div>
                <div className="about-paragraph third">
                    <h1>Why Choose Us</h1>
                    <p>We pay special attention to detail. We consider our customers as part of the team, we consult extensively with them when designing as well as keep them informed of the progress of the project every step of the way. </p>
                </div>
            </div>
        </div>
     );
}
 
export default About;