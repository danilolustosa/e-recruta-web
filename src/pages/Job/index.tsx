import React from 'react';
import { FiArrowLeft, FiPlusSquare } from 'react-icons/fi'
import './styles.css';
import logo from '../../assets/logo.svg';
import StarOn from '../../assets/star_on.svg';
import StarOff from '../../assets/star_off.svg';
import Resume from '../../assets/resume.svg';
import LinkedIn from '../../assets/linkedin.svg';
import { Link } from 'react-router-dom';

const Job = () => {
    const totalStars = 5

    function getCheckedStars(id: number){
        let retorno = []
        let checked = 3;

        switch (id) {
            case 1:
                checked = 2
            case 2:
                checked = 3
            case 3:
                checked = 1                            
        }        

        for (let i = 1; i <= totalStars; i++)
        {
            if (i <= checked)
                retorno.push(<img key={i} src={StarOn} />)
            else
                retorno.push(<img key={i} src={StarOff} />)
        }

        return retorno;
    }

    return (
        <div id="page-job">
            <header>
                <Link to="/">
                    <img src={logo} alt="" />
                </Link>                

                <Link className="back" to="/jobs">
                    <FiArrowLeft />
                    Voltar
                </Link>
            </header>
            <main className="main">
                <div className="frame">
                    <div className="title">
                        <h1>Oportunidade</h1>
                    </div>


                    <div className="container">
                        <div className="job">
                            <div className="jobContent">

                                <section className="gridSection1">
                                    <span className="jobTitle">Desenvolvedor Android com .NET</span>
                                    <section className="level_time_duration">
                                        <ul className="items-level">
                                            <li><span>Pleno</span></li>
                                        </ul>
                                        <div className="time_duration">Há 2 horas</div>
                                    </section>
                                    <section className="company_location">
                                        <div>IBM Brasil</div>
                                        <div>São Paulo, SP, Ibirapuera</div>
                                        <div className="short_line"></div>                                        
                                    </section>
                                    <section className="more_informations">                                        
                                        <div className="type">
                                            <span className="label">Regime</span>
                                            CLT
                                        </div>
                                        <div className="position">
                                            <span className="label">Posição</span>
                                            Alocado
                                        </div>                                        
                                        <div className="salary">
                                            <span className="label">Remuneração</span>
                                            7K ~ 8K
                                        </div>
                                    </section>                                    
                                </section>
                                <section className="line" />

                                <section className="jobdescription">
                                    A Servirtual tem paixão por transformar negócios com tecnologia, e há 27 anos apoia a digitalização de bancos, seguradoras, empresas de telecomunicações e outras empresas líderes em seus setores.
                                    <br /><br />
                                    Os serviços e soluções oferecidos pela BRQ, aceleram a Transformação Digital em seus clientes e estão estruturados para suportar todo o ciclo de evolução:
                                    <br /><br />
                                    - Pensar e Desenhar<br />
                                    - Aportar tecnologia<br />
                                    - Construir e Evoluir<br />
                                    <br />
                                    Unindo o Negócio do Cliente com a Tecnologia Correta e uma nova Cultura que elimina desperdícios, acelera a comunicação e otimiza a produtividade, a BRQ Digital Solutions apoia seus clientes para que seus negócios cresçam exponencialmente.
                                    <br /><br />
                                    Veja a nossa oportunidade:
                                    <br /><br />
                                    Desenvolvedor Android Pl.
                                    <br /><br />
                                    Requisitos:
                                    <br /><br />
                                    o Capacidade de desenvolvimento de aplicação orientada a objetos<br />
                                    o Banco de dados SQL Server<br />
                                    o Windows Server<br />
                                    o IIS<br />
                                    o Linguagem de programação .NET<br />
                                    o Visual Studio<br />
                                    o Prática em Desenvolvimento mobile plataforma ANDROID;<br />
                                    o Proficiência em desenvolvimento de testes<br />
                                    o Framework 4.0 ou superior<br />
                                    o REST API<br />
                                    o WCF<br />
                                    o Webservices<br />
                                    o Web Mobile<br />
                                </section>

                            </div>                            
                        </div>

                        <div className="candidate">
                            <div className="candidateContent">
                                <section className="candidateTitle">
                                    <h2>Candidatos</h2>
                                    <Link to="/jobform">
                                        <FiPlusSquare />
                                    </Link>
                                </section>

                                <section className="quantity">
                                    3 candidatos relacionados
                                </section>

                                <section className="grid">
                                    <div className="row">
                                        <section className="candidateName">
                                            José Augusto da Silva
                                        </section>
                                        <section className="candidateLocation">
                                            São Paulo, SP, Zona Norte
                                        </section>
                                        <section className="candidateTool">
                                            <div>
                                                {getCheckedStars(1)}
                                            </div>
                                            <div className="icons">
                                                <img src={Resume} />
                                                <img src={LinkedIn} />
                                            </div>
                                        </section>
                                        <section className="line" />
                                    </div>

                                    <div className="row">
                                        <section className="candidateName">
                                            José Augusto da Silva
                                        </section>
                                        <section className="candidateLocation">
                                            São Paulo, SP, Zona Norte
                                        </section>
                                        <section className="candidateTool">
                                            <div>
                                                {getCheckedStars(2)}
                                            </div>
                                            <div className="icons">
                                                <img src={Resume} />
                                                <img src={LinkedIn} />
                                            </div>
                                        </section>
                                        <section className="line" />
                                    </div>

                                    <div className="row">
                                        <section className="candidateName">
                                            José Augusto da Silva
                                        </section>
                                        <section className="candidateLocation">
                                            São Paulo, SP, Zona Norte
                                        </section>
                                        <section className="candidateTool">
                                            <div>
                                                {getCheckedStars(3)}
                                            </div>
                                            <div className="icons">
                                                <img src={Resume} />
                                                <img src={LinkedIn} />
                                            </div>
                                        </section>
                                        <section className="line" />
                                    </div>
                                </section>
                            </div>                            
                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
}

export default Job;