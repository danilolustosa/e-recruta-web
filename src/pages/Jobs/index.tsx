import React from 'react';
import { FiArrowLeft, FiEdit, FiPlusSquare } from 'react-icons/fi'
import './styles.css';
import logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';

const Jobs = () => {
    return (
        <div id="page-jobs">
            <header>
                <Link to="/">
                    <img src={logo} alt="" />
                </Link>                

                <Link to="/">
                    <FiArrowLeft />
                    Voltar
                </Link>
            </header>
            <main className="main">
                <div className="frame">
                    <div className="title">
                        <h1>Oportunidades</h1>
                        <Link to="/jobform">
                            <FiPlusSquare />
                        </Link>
                    </div>                    

                    <div className="grid">


                        <div className="row">
                            <section className="gridSection1">
                                <div className="gridTitle">
                                    <Link to="/job">
                                        <span className="jobTitle">Desenvolvedor Android com .NET</span>
                                    </Link>
                                    <ul className="items-level">
                                        <li><span>Pleno</span></li>
                                    </ul>
                                </div>
                                <Link to="/jobform">
                                    <FiEdit />
                                </Link>
                            </section>

                            <section className="gridSection2">
                                <section className="left">
                                    <div>IBM Brasil</div>
                                    <div>São Paulo, SP, Ibirapuera</div>
                                    <div className="quantity_candidates"><b>3</b> candidato(s) relacionado(s)</div>
                                    <div className="short_line"></div>
                                    <div className="time_duration">Há 2 horas</div>
                                </section>
                                <section className="right">
                                    <div className="salary">7K ~ 8K</div>
                                    <div>CLT</div>
                                    <div>Alocado</div>
                                </section>
                            </section>
                            <section className="line" />
                        </div>


                        <div className="row">
                            <section className="gridSection1">
                                <div className="gridTitle">
                                    <Link to="/job">
                                        <span className="jobTitle">Desenvolvedor Android com .NET</span>
                                    </Link>
                                    <ul className="items-level">
                                        <li><span>Pleno</span></li>
                                    </ul>
                                </div>
                                <Link to="/">
                                    <FiEdit />
                                </Link>
                            </section>

                            <section className="gridSection2">
                                <section className="left">
                                    <div>IBM Brasil</div>
                                    <div>São Paulo, SP, Ibirapuera</div>
                                    <div className="quantity_candidates"><b>3</b> candidato(s) relacionado(s)</div>
                                    <div className="short_line"></div>
                                    <div className="time_duration">Há 2 horas</div>
                                </section>
                                <section className="right">
                                    <div className="salary">7K ~ 8K</div>
                                    <div>CLT</div>
                                    <div>Alocado</div>
                                </section>
                            </section>
                            
                        </div>


                    </div>
                    
                </div>
            </main>
        </div>
    );
}

export default Jobs;