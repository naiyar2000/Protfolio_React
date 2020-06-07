import React from 'react';
import './css/landing.css';
import image from './img/warm-coffee-drink-1684151.jpg';


export const Home = () => {
    return (
        <section id="Home">   
            <img src={image} alt="logo" height="100%" width="100%" style={{position: 'absolute',}}/> 
            <div className="Home-content" >         
                <div className="card">
                    <div className="description">
                        <h1>Hello, I am <span>Naiyar Imam</span></h1>
                        <p style={{fontSize: '1rem'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis at possimus fugit ratione, est ea dolores aut eligendi. Culpa tempore sunt laudantium ipsa voluptas quas fuga rerum sequi consequatur eos.</p>
                    </div>
                </div>
                <div className="links">
                    <i className="fab fa-github fa-2x"/>
                    <i class="fab fa-facebook-square fa-2x"/>
                    <i class="fab fa-linkedin fa-2x"/>
                </div>
            </div>           
        </section>
    )
}
