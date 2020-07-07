import React, { useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi'
import './styles.css';
import logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import toggleon from '../../assets/toggle-on.svg'
import toggleoff from '../../assets/toggle-off.svg'
import './fileComponent.css';
import IconUpload from '../../assets/upload-icon.svg';
import StarOn from '../../assets/star_on.svg';
import StarOff from '../../assets/star_off.svg';


const CandidateForm = () => {
    const [active, setActive] = useState(true);
    const [stars,setStars] = useState([
        <img key={1} onClick={() => handleStar(1)} src={StarOn} />,
        <img key={2} onClick={() => handleStar(2)} src={StarOn} />,
        <img key={3} onClick={() => handleStar(3)} src={StarOn} />,
        <img key={4} onClick={() => handleStar(4)} src={StarOff} />,
        <img key={5} onClick={() => handleStar(5)} src={StarOff} />
    ]);
    const [classificacao, setClassificacao] = useState(3);

    function handleActive(){
        setActive(!active);
    }

    function handleStar(index: number){
        let retorno = [];

        for (let i = 1; i <=5; i++){
            if (i <= index)
                retorno.push(<img key={i} onClick={() => handleStar(i)} src={StarOn} />)
            else
                retorno.push(<img key={i} onClick={() => handleStar(i)} src={StarOff} />)
        }

        setStars(retorno)
        setClassificacao(index)
    }

    return (
        <div id="page-candidateform">
            <header>
                <Link to="/">
                    <img src={logo} alt="" />
                </Link>                

                <Link className="back" to="/job">
                    <FiArrowLeft />
                    Voltar
                </Link>
            </header>
            <main className="main">
                <div className="frame">
                    <div className="title">
                        <h1>Cadastro do candidato</h1>
                        <img 
                            onClick={handleActive}
                            src={active ? toggleon : toggleoff} 
                            className="toggle"
                        />
                    </div>
                    <form>
                        <fieldset>
                            <legend>
                                <h2>Dados</h2>
                            </legend>

                            <div className="field-group">
                                <div className="field">
                                    <label htmlFor="nome">
                                        Nome
                                        <span className="required">*</span>
                                    </label>                                    
                                    <input 
                                        type="text"
                                        name="nome"
                                        id="nome"                                        
                                    />
                                </div>
                                <div className="field">
                                    <label htmlFor="email">
                                        E-mail
                                        <span className="required">*</span>
                                    </label>                                    
                                    <input 
                                        type="text"
                                        name="email"
                                        id="email"                                        
                                    />
                                </div>
                            </div>
                            
                            <div className="field-group">
                                <div className="field">
                                    <label htmlFor="celular">
                                        Celular
                                        <span className="required">*</span>
                                    </label>                                    
                                    <input 
                                        type="text"
                                        name="celular"
                                        id="celular"                                        
                                    />
                                </div>
                                <div className="field">
                                    <label htmlFor="linkedin">
                                        LinkedIn
                                    </label>                                    
                                    <input 
                                        type="text"
                                        name="linkedin"
                                        id="linkedin"
                                    />
                                </div>
                            </div>
                            
                            <div className="field-group">
                                <div className="field">
                                    <label htmlFor="curriculo">
                                        Currículo
                                    </label>                                    
                                    <input type="file" name="file-1[]" id="file-1" className="inputfile inputfile-1" data-multiple-caption="{count} files selected" multiple />
					                <label htmlFor="file-1" id="file-1">
                                        <img src={IconUpload} />
                                        <span>Selecione um arquivo&hellip;</span>
                                    </label>

                                </div>
                                <div className="field">
                                    <label htmlFor="linkedin">
                                        Classificação
                                    </label>
                                    <div className="stars">
                                        {stars}
                                    </div>                                    
                                </div>
                            </div>
                            
                        </fieldset>


                        <fieldset>
                            <legend>
                                <h2>Localização</h2>
                            </legend>

                            <div className="field-group">
                                <div className="field">
                                    <label htmlFor="estado">
                                        Estado
                                        <span className="required">*</span>
                                    </label>
                                    <select
                                        name="uf"
                                        id="uf">
                                        <option value="0">Selecione um estado</option>
                                    </select>
                                </div>
                                <div className="field">
                                    <label htmlFor="cidade">
                                        Cidade
                                        <span className="required">*</span>
                                    </label>
                                    <select
                                        name="city"
                                        id="city">
                                        <option value="0">Selecione uma cidade</option>
                                    </select>
                                </div>
                                <div className="field">
                                    <label htmlFor="empresa">
                                        Região
                                    </label>                                    
                                    <input 
                                        type="text"
                                        name="regiao"
                                        id="regiao"                                        
                                    />
                                </div>
                            </div>
                        </fieldset>                        

                        <fieldset>
                            <legend>
                                <h2>Detalhes</h2>
                            </legend>
                            <div className="field-group">
                                <div className="field">
                                    <label htmlFor="observacao">
                                        Observação
                                    </label>
                                    <textarea>

                                    </textarea>
                                </div>
                            </div>
                        </fieldset>

                        <div className="toolbox">
                            <button type="submit">Salvar</button>
                            <Link className="button" to="/job">
                                <button className="btn-cancel">Cancelar</button>
                            </Link>                            
                        </div>
                    </form>
                </div>
            </main>
        </div>
    );
}

export default CandidateForm;