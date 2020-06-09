import React from 'react'
import { Home } from './LandingPageComponent/Home'
import { About } from './LandingPageComponent/About'
import './LandingPageComponent/css/landing.css'
import { Services } from './LandingPageComponent/Services'
import { Portfolio } from './LandingPageComponent/Portfolio'
import { Blog } from './LandingPageComponent/Blog'
import { Contact } from './LandingPageComponent/Contact'



export const LandingPage = () => {
    return (
        <div id="container">
            <Home />
            <About />
            <Services />
            <Portfolio />
            <Blog />
            <Contact />
        </div>
    )
}
