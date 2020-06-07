import React from 'react';
import './css/landing.css'
import ParticleComponent from '../ParticleComponent';

export const About = () => {
    return (
        <section id="About">
            <div className="about_container">
                <div className="about_info">
                    <div className="line-text">
                        <div className="separator1"></div>
                        <h5>About Me</h5>
                    </div>
                    <div className="into">
                        <h3>I'm a Full Stack web developer working from home</h3>
                        <div className="separator2"></div>
                    </div>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae, magnam error nisi pariatur labore ratione quam id voluptatum unde doloremque doloribus corporis, dolor nihil ullam, dignissimos harum mollitia dolorum quidem!</p>
                </div>
                <div className="about_bio">
                    <h2>Bio :-</h2>
                    <ul>
                        <li><b>Full Name</b> : Naiyar Imam</li>
                        <li><b>Age</b> : 20 Years</li>
                        <li><b>Nationality</b> : Indian</li>
                        <li><b>Languages</b> : English, Hindi</li>
                        <li><b>Freelance</b> : Available</li>
                    </ul>
                    <button className="Download_cv">Download CV</button>
                </div>
                <ParticleComponent />
            </div>
        </section>
    )
}
