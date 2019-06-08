import '../../assets/scss/Nav.scss';
import React from 'react';
import { Link } from 'react-router-dom';


const initialState = {
    home: false,
    users: false
}

export default class UserCrud extends React.Component
{
    state = {
        ...initialState
    }
    
    toggleNav = (event) =>
    {
        if (event.target.className !== "active")
        { 
            this.setState({
                home: !this.state.home,
                users: !this.state.users
            });
        }
    };
    
    componentWillMount ()
    { 
        window.location.pathname === "/" ?  
                this.setState({
                home: !this.state.home,
            })
            : 
            this.setState({
                users: !this.state.users
            });
    }

    render ()
    {
        return (
            <aside className="menu-area">
                <nav className="menu container">
                    <ul className="">
                        <li><Link onClick={ this.toggleNav } className={ this.state.home ? "active" : undefined } to="/"> Home </Link></li>
                        <li><Link onClick={ this.toggleNav } className={ this.state.users ? "active" : undefined } to="/users"> Usuários </Link></li>
                    </ul>
                </nav>
            </aside> 
        );
    }
}
