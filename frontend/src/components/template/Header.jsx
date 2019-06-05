import './Header.scss';
import React from 'react';

export default props =>

    <header className="header d-none d-sm-flex flex-column">
        <div className="container pt-4">
            <div className="head-card">
                <h1 className="mt-3 text-white">{props.title}</h1>
                <p className="lead">{props.subtitle}</p>
            </div>
        </div>
    </header>
