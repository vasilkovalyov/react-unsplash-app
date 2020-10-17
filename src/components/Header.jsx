import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <span>Unsplash App</span>
                <Link to='/'>Portfolios</Link>
            </div>
        </header>
    );
};

export default Header;