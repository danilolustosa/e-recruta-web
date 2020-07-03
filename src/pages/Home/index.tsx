import React from 'react';
import { FiLogIn } from 'react-icons/fi'
import './styles.css';
import logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div id="page-home">
            <div className="content">
                <header>
                    <img className="logo" src={logo} alt="" />
                </header>
                <main>
                    <h1>R&S em TI</h1>
                    <p>Ajudando recrutadores a encontrarem os melhores candidatos</p>

                    <Link to="/jobs">
                        <span>
                            <FiLogIn />
                        </span>
                        <strong>Recrutar candidatos</strong>
                    </Link>
                </main>                
            </div>
        </div>
    );
}

export default Home;