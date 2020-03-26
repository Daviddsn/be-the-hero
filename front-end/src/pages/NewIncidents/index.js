import React, { useState } from 'react';
import {Link, useHistory} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi'
import logoImg from '../../assets/logo.svg';
import api from '../../services/api';
import './styles.css';


export default function NewIncidents() {
    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');
    const [value,setValue] = useState('');
    const history = useHistory();
    async function handleNew(e){
        e.preventDefault();
        const ongId = localStorage.getItem('ongId');
        const data = {title,description,value};
        try{
            await api.post('/incidents/new',data,{headers: { Authorization : ongId}});
            history.push('/profile');
    
        }catch{
            alert( 'Error')
        }
    }
  return (
    <div className="incident-container">
        <div className="content">
            <section>
                <img src={logoImg} alt="Be The Hero"/>
                <h1>Cadastrar novo caso</h1>
                <p>Faça seu cadastro, em na plataforma e ajude pessoas a encontratrem os casos da sua ONG.</p>
                <Link className="link" to="/profile">
                    <FiArrowLeft size={16} color="e02041"/>
                     Voltar para home
                </Link>
            </section>
            <form onSubmit={handleNew}>
                <input 
                    placeholder="Nome do caso"
                    value={title}
                    onChange={e => {setTitle(e.target.value)}}
                />
                <textarea 
                    placeholder="Descrição"
                    value={description}
                    onChange={e => {setDescription(e.target.value)}}
                />
                <input 
                    placeholder="Valor em reais"
                    value={value}
                    onChange={e => {setValue(e.target.value)}}
                />              

                <div className ="bnt-group">
                    <button className="button" >Cancelar</button>
                    <button className="button" type="submit">Cadastrar</button>
                </div>
               
            </form>            
        </div>
    </div>
  );
}
