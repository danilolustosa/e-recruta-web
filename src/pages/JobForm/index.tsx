import React, { useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi'
import './styles.css';
import logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import toggleon from '../../assets/toggle-on.svg'
import toggleoff from '../../assets/toggle-off.svg'

const JobForm = () => {
    const [active, setActive] = useState(true);
    const [selectedItems, setSelectedItems] = useState<string[]>(["N"]);

    function handleActive(){
        setActive(!active);
    }

    function handleSelectItem(item: string){
        const alreadySelected = selectedItems.findIndex(i => i === item);

        if (alreadySelected >= 0){
            const nenhumItem = selectedItems.filter(i => i === "N");

            if (nenhumItem.length === 0)
            {
                const filteredItems = selectedItems.filter(i => i !== item);
                setSelectedItems(filteredItems);    
            }
        }
        else
        {
            if (item === "N") {
                setSelectedItems([item]);
            }
            else {
                if (selectedItems.length < 2){
                    const filteredItems = selectedItems.filter(i => i !== "N");
                    setSelectedItems([...filteredItems, item]);    
                }
            }            
        }
    }

    return (
        <div id="page-jobform">
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
                        <h1>Cadastro de oportunidade</h1>
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
                                    <label htmlFor="titulo">
                                        Título da oportunidade
                                        <span className="required">*</span>
                                    </label>                                    
                                    <input 
                                        type="text"
                                        name="titulo"
                                        id="titulo"                                        
                                    />
                                </div>
                                <div className="field">
                                    <label htmlFor="empresa">
                                        Empresa
                                        <span className="required">*</span>
                                    </label>                                    
                                    <input 
                                        type="text"
                                        name="empresa"
                                        id="empresa"                                        
                                    />
                                </div>
                            </div>
                            <div className="field-group">
                                <div className="field">
                                    <label htmlFor="titulo">
                                        Nível
                                    </label>
                                    <ul className="items-level">
                                        <li 
                                            onClick={() => handleSelectItem("N")} 
                                            className={selectedItems.includes("N") ? 'left-selected' : 'left'}
                                        >
                                            <span>Nenhum</span>
                                        </li>
                                        <li 
                                            onClick={() => handleSelectItem("J")} 
                                            className={selectedItems.includes("J") ? 'selected' : ''}
                                        >
                                            <span>Júnior</span>
                                        </li>
                                        <li 
                                            onClick={() => handleSelectItem("P")} 
                                            className={selectedItems.includes("P") ? 'selected' : ''}
                                        >
                                            <span>Pleno</span></li>
                                        <li 
                                            onClick={() => handleSelectItem("S")} 
                                            className={selectedItems.includes("S") ? 'right-selected' : 'right'}
                                        >
                                            <span>Sênior</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="field">
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
                                <h2>Condições</h2>
                            </legend>

                            <div className="field-group">
                                <div className="field">
                                    <label htmlFor="remuneracao">
                                        Remuneração
                                    </label>
                                    <input 
                                        type="text"
                                        name="remuneracao"
                                        id="remuneracao"                                        
                                    />
                                </div>
                                <div className="field">
                                </div>
                            </div>
                            <div className="field-group">
                                <div className="field">
                                    <label htmlFor="regime">
                                        Regime de contratação
                                        <span className="required">*</span>
                                    </label>
                                    <select
                                        name="regime"
                                        id="regime">
                                        <option value="0">Selecione um regime de contratação</option>
                                    </select>
                                </div>
                                <div className="field">
                                    <label htmlFor="posicao">
                                        Posição
                                        <span className="required">*</span>
                                    </label>
                                    <select
                                        name="posicao"
                                        id="posicao">
                                        <option value="0">Selecione uma posição</option>
                                    </select>
                                </div>
                            </div>
                        </fieldset>

                        <fieldset>
                            <legend>
                                <h2>Detalhes</h2>
                            </legend>
                            <div className="field-group">
                                <div className="field">
                                    <label htmlFor="jobDescription">
                                        Job description
                                        <span className="required">*</span>
                                    </label>
                                    <textarea>

                                    </textarea>
                                </div>
                            </div>
                        </fieldset>

                        <div className="toolbox">
                            <button type="submit">Salvar</button>
                            <Link className="button" to="/jobs">
                                <button className="btn-cancel">Cancelar</button>
                            </Link>                            
                        </div>
                    </form>
                </div>
            </main>
        </div>
    );
}

export default JobForm;