import logo from '../../assets/imgs/logo.png';
import Main from '../template/Main';
import React from 'react';
import axios from 'axios';

const headerProps = {
    title: 'CRUD',
    subtitle: 'Administração de usuários'
};

const baseUrl = 'http://localhost:3001/users';
const modalState = {
    modal: false
};
const initialState = {
    user: {
        name: '',
        phone: '',
        email: '',
        login: '',
        password: '',
        passcheck: ''
    },
    list: []
};

export class UserCrud extends React.Component {
    
    state = {
        ...initialState,
        ...modalState
    }

    componentWillMount = () =>
    {
        axios(baseUrl).then(resp =>
        {
            this.setState({ list: resp.data });
        });
    }

    modalToggle = () =>
    {
        if (this.state.modal === true) {
            this.setState({ modal: false });
        } else { 
            this.setState({ modal: true });
        }
    }

    clear = () => 
    {
        this.setState({ user: initialState.user });
        this.modalToggle();
    }

    save = () =>
    {
        const user = this.state.user;
        const method = user.id ? 'put' : 'post';
        const url = user.id ? `${baseUrl}/${user.id}` : baseUrl;
        axios[method](url, user)
            .then(resp =>
            {
                const list = this.getUpdatedList(resp.data);
                this.setState({ user: initialState.user, list });
            });
        this.modalToggle();
    }

    getUpdatedList = (user, add = true) =>
    {
        const list = this.state.list.filter(u => u.id !== user.id);
        if (add) list.unshift(user);
        return list;
    }

    remove = (user) =>
    {
        axios.delete(`${baseUrl}/${user.id}`).then(resp =>
        {
            const list = this.getUpdatedList(user, false)
            this.setState({ list })
        })
    }

    load = (user) =>
    {
        this.setState({ user, modal: true });
    }

    updateField = (event) => 
    {
        const user = { ...this.state.user }
        user[event.target.name] = event.target.value
        this.setState({ user })
    }

    renderModal ()
    {        
        return (
            <>
            <button
                onClick={ this.modalToggle }
                className="btn add"
            >
            <i className="fa fa-plus"></i>
            </button>
            <div className={ this.state.modal ? "modal" : "d-none"}>
                <div className="modal-main p-4">
                    <div className="modal-head">
                        <img src={ logo } alt="logo" />
                        <span>Campos marcados com * são obrigatórios</span>
                    </div>
                    <div className="modal-body form">
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <div className="form-group">
                                    <label>Nome *</label>
                                    <input type="text" className="form-control"
                                        name="name"
                                        value={this.state.user.name}
                                        onChange={e => this.updateField(e)}
                                        placeholder="Ivan Espinola G." />
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="form-group">
                                    <label>Telefone</label>
                                    <input type="tel" className="form-control"
                                        name="phone"
                                        value={this.state.user.phone}
                                        onChange={e => this.updateField(e)}
                                        placeholder="48 99979 6480" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <div className="form-group">
                                    <label>E-mail *</label>
                                    <input type="text" className="form-control"
                                        name="email"
                                        value={this.state.user.email}
                                        onChange={e => this.updateField(e)}
                                        placeholder="ivan.espinola@live.com" />
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="form-group">
                                    <label>Login *</label>
                                    <input type="text" className="form-control"
                                        name="login"
                                        value={this.state.user.login}
                                        onChange={e => this.updateField(e)}
                                        placeholder="i-espinola" />
                                </div>
                            </div>
                        </div>
                        <div className="row">    
                            <div className="col-12 col-md-6">
                                <div className="form-group">
                                    <label>Senha *</label>
                                    <input type="password" className="form-control"
                                        name="password"
                                        value={ this.state.user.password}
                                        onChange={e => this.updateField(e)}
                                        placeholder="***" />
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="form-group">
                                    <label>Confirme a senha *</label>
                                    <input type="password" className="form-control"
                                        name="password-chk"
                                        value={ this.state.user.passcheck}
                                        onChange={e => this.updateField(e)}
                                        placeholder="***" />
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <div className="row">  
                            <div className="col-12 d-flex justify-content-end">
                                <button className="btn btn-secondary"
                                    onClick={e => this.clear(e)}>
                                    Cancelar
                                </button>
                                <button className="btn btn-primary"
                                    onClick={e => this.save(e)}>
                                    Salvar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </>
        )
    }

    renderTable () {
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Telefone</th>
                        <th>E-mail</th>
                        <th>Login</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
        )
    }

    renderRows () {
        return this.state.list.map(user => {
            return (
                <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.phone}</td>
                    <td>{user.email}</td>
                    <td>{user.login}</td>
                    <td>
                        <button className="btn btn-warning"
                            onClick={() => this.load(user)}>
                            <i className="fa fa-pencil"></i>
                        </button>
                        <button className="btn btn-danger"
                            onClick={() => this.remove(user)}>
                            <i className="fa fa-trash"></i>
                        </button>
                    </td>
                </tr>
            )
        })
    }
    
    render ()
    {
        return (
            <Main { ...headerProps } >
                { this.renderModal() }
                { this.renderTable() }
            </Main>
        )
    }
}
