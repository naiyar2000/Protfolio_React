import React from 'react';
import './css/landing.css';
import image from './img/warm-coffee-drink-1684151.jpg';


export const Home = () => {
    class TypeWriter {
        constructor(txtElement, words, wait = 3000) {
          this.txtElement = txtElement;
          this.words = words;
          this.txt = '';
          this.wordIndex = 0;
          this.wait = parseInt(wait, 10);
          this.type();
          this.isDeleting = false;
        }
      
        type() {
          // Current index of word
          const current = this.wordIndex % this.words.length;
          // Get full text of current word
          const fullTxt = this.words[current];
      
          // Check if deleting
          if(this.isDeleting) {
            // Remove char
            this.txt = fullTxt.substring(0, this.txt.length - 1);
          } else {
            // Add char
            this.txt = fullTxt.substring(0, this.txt.length + 1);
          }
      
          // Insert txt into element
          this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;
      
          // Initial Type Speed
          let typeSpeed = 300;
      
          if(this.isDeleting) {
            typeSpeed /= 2;
          }
      
          // If word is complete
          if(!this.isDeleting && this.txt === fullTxt) {
            // Make pause at end
            typeSpeed = this.wait;
            // Set delete to true
            this.isDeleting = true;
          } else if(this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            // Move to next word
            this.wordIndex++;
            // Pause before start typing
            typeSpeed = 500;
          }
      
          setTimeout(() => this.type(), typeSpeed);
        }
      }
      
      
      // Init On DOM Load
      document.addEventListener('DOMContentLoaded', init);
      
      // Init App
      function init() {
        const txtElement = document.querySelector('.txt-type');
        const words = JSON.parse(txtElement.getAttribute('data-words'));
        const wait = txtElement.getAttribute('data-wait');
        // Init TypeWriter
        new TypeWriter(txtElement, words, wait);
      }


    return (
        <section id="Home">   
            <img src={image} alt="logo" height="100%" width="100%" style={{position: 'absolute',}}/> 
            <div className="Home-content" >         
                <div className="card">
                    <div className="description">
                        <h1><span className="hello">Hello, I am</span><span className="name">Naiyar</span></h1>
                        <span className="txt-type" data-wait="2000" data-words='["Developer", "Designer", "Creator"]'></span>
                        <p style={{fontSize: '1rem'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit, labore ducimus praesentium unde, quasi illum consequatur cupiditate obcaecati repellat, architecto nisi! Eligendi nostrum nihil soluta eius? Tempora dicta labore assumenda.</p>
                    </div>
                </div>
                <div className="links">
                    <i className="fab fa-github fa-2x"/>
                    <i className="fab fa-facebook-square fa-2x"/>
                    <i className="fab fa-linkedin fa-2x"/>
                </div>
            </div>           
        </section>
    )
}
