import React from 'react';
import './css/landing.css'
import ParticleComponent from '../ParticleComponent';

export const About = () => {
    return (
        <section id="About">
            <div className="about_container">
                <div className="about_info">
                    <div className="intro">
                        <h3>I'm a Full Stack web developer working from home</h3>
                    </div>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae, magnam error nisi pariatur labore ratione quam id voluptatum unde doloremque doloribus corporis, dolor nihil ullam, dignissimos harum mollitia dolorum quidem!</p>
                    <div style={{zIndex: 10}}><button className="Download_cv" onClick={() => console.log('hello')}><span className="cv">DOWNLOAD CV</span></button></div>
                </div>
                <div className="about_skills">
                    <span>My Skills</span>
                    <div className="skills">
                    <div className="webdesign">
                        <div>
                            <h3>Web Design</h3>
                            <h3>80%</h3>
                        </div>
                    </div>
                    <div className="react">
                        <div>
                            <h3>React.js</h3>
                            <h3>60%</h3>
                        </div>
                    </div>
                    <div className="mongodb">
                        <div>
                            <h3>MongoDB</h3>
                            <h3>90%</h3>
                        </div>
                    </div>
                    <div className="flutter">
                        <div>
                            <h3>Flutter</h3>
                            <h3>70%</h3>
                        </div>
                    </div>
                    <div className="firebase">
                        <div>
                            <h3>Firebase</h3>
                            <h3>75%</h3>
                        </div>
                    </div>
                    </div>             
                </div>
                {/* <ParticleComponent /> */}
            </div>
        </section>
    )
}
