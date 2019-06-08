// import logo from '../../assets/imgs/logo.png';
import logo from '../../assets/imgs/logo.png';
import '../../assets/scss/Modal.scss';
import React from 'react';


export default props =>
    
    <div className={ props.modal ? "modal" : "d-none" }>
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
                                value={ props.user.name }
                                onChange={ e => this.updateField(e) }
                                placeholder="Ivan Espinola G." />
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Telefone</label>
                            <input type="tel" className="form-control"
                                name="phone"
                                value={ props.user.phone }
                                onChange={ e => this.updateField(e) }
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
                                value={ props.user.email }
                                onChange={ e => this.updateField(e) }
                                placeholder="ivan.espinola@live.com" />
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Login *</label>
                            <input type="text" className="form-control"
                                name="login"
                                value={ props.user.login }
                                onChange={ e => this.updateField(e) }
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
                                value={ props.user.password }
                                onChange={ e => this.updateField(e) }
                                placeholder="***" />
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Confirme a senha *</label>
                            <input type="password" className="form-control"
                                name="password-chk"
                                value={ props.user.passcheck }
                                onChange={ e => this.updateField(e) }
                                placeholder="***" />
                        </div>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-12 d-flex justify-content-end">
                        <button className="btn btn-secondary"
                            onClick={ e => this.clear(e) }>
                            Cancelar
                                </button>
                        <button className="btn btn-primary"
                            onClick={ e => this.save(e) }>
                            Salvar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>

