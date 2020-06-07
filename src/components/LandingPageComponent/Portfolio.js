import React from 'react';
import { Link} from 'react-router-dom';


export const Portfolio = (props) => {
    return (
        <section id="Portfolio">
            <div className="portfolio_container">
                    <div><Link to="/">Home</Link></div>
                    <div><Link to="/ExpenseTracker">Home</Link></div>
                    <div><Link to="/">Home</Link></div>
                    <div><Link to="/">Home</Link></div>
            </div>
        </section>
    )
}
