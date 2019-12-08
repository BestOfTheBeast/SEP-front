import React, { useState, useEffect }  from 'react';
import { Form } from './components/Form';
import logo from './img/logo.svg';
import illustr from './img/illustration.svg';
import './css/App.css';

function App() {
  const [ users, setUsers ] = useState([]);

    const createUser = async (user) => {
        const response = await fetch('http://localhost:4000', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        });

        if (!response.ok) {
            console.error('failed to create user');
        }

        const data = await response.json();
        setUsers((users) => [ data, ...users ])
    }

    useEffect(() => {
        (async () => {
            const response = await fetch('http://localhost:4000');

            if (!response.ok) {
                console.error('failed to fetch users');
            }

            const data = await response.json();
            setUsers((users) => [ ...data, ...users ])
        })()
    }, []);

  return (
    <div className="App">
     
      <div className="left-side">
        <a
          className="link"
          href="#"
          target="_blank"
          rel="noopener noreferrer">
          <img src={logo} className="logo" alt="logo" />
        </a>

        
        <Form createUser = { createUser }/>
      </div>
      <div className="right-side">
        <div className="wrapp">
        <p className="title-text">Найкращий спосіб організації навчального простору </p>
          <img src={illustr} className="illustr" alt="Illustration" />
          <div className="links">
            <ul>
              <li><a 
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer">
                  Розклад</a>
              </li>
              <li><a 
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer">
                  Завдання</a>
              </li>
              <li><a 
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer">
                  Підгрупи</a>
              </li>
              <li><a 
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer">
                  Викладачі</a>
              </li>
            </ul>

            <a className="cloud"
              href="#">
              Хмара для навчальних матеріалів
            </a>
          </div>
        </div> 
          
      </div>

    </div>
  );
}

export default App;
