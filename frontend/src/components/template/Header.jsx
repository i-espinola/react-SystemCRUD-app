import '../../assets/scss/Header.scss';
import React from 'react';

export default props =>

    <header className = "header d-none d-sm-flex flex-column" >
        <div className="container">
            <div className="head-card p-3">
                <h1>{props.title}</h1>
                <p>{ props.subtitle }</p>
                <hr/>
            </div>
        </div>
    </header>
