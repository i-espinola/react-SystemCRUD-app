import './Main.scss';
import React from 'react';
import Header from './Header';

export default props =>
    <React.Fragment>
        <Header {...props} />
        <main className="content container">
            <div className="body-card p-3">
                {props.children}
            </div>
        </main>
    </React.Fragment>
