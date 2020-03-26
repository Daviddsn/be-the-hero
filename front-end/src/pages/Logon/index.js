import React, { useState } from 'react';
import api from '../../services/api'
import {Link,useHistory} from 'react-router-dom';
import './styles.css';
import {FiLogIn} from 'react-icons/fi';

import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';


export default function Logon() {
  const history = useHistory();
  const [id,setId] = useState('');

  async function handleLogon(e){
    e.preventDefault();
    try {
      const res = await api.post('login',{id});

      localStorage.setItem('ongId',id);
      localStorage.setItem('ongName',res.data.name);

      history.push('profile');
    
    } catch (error) {
      alert('Falha no login');
    }
    
    
  }
  return (
  <div className="logon-container">
    <section className="form">
      <img src={logoImg} alt="Be The Hero" />

      <form onSubmit={handleLogon}>
        <h1>Faça seu logon</h1>
        <input 
          placeholder="Sua ID"
          value={id}
          onChange={e => setId(e.target.value)}
        />
        <button className="button" type="submit">Entrar</button>
      </form>
      
      <Link className="link" to="/register">
        <FiLogIn size={16} color="e02041"/>
         Não tenho cadastro
      </Link>
    </section>
    <img src={heroesImg} alt="heroes"/>
  </div>

  );
}
