import React from 'react';
import logo from './img/logo.svg';
import illustr from './img/illustration.svg';
import './css/App.css';

function App() {
  return (
    <div className="App">
     {/*<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Фронт за пів дня
        </a>
      </header>*/}
      <div className="left-side">
        <a
          className="link"
          href="#"
          target="_blank"
          rel="noopener noreferrer">
          <img src={logo} className="logo" alt="logo" />
        </a>

        <form method="">
          <h1>Реєстрація</h1>

          <div className="input-wrapp">
            <label for="name">Имя</label>
            <input type='text' id="name" />
          </div>

          <div className="input-wrapp">
            <label for="name">Назва підгрупи</label>
            <input type='text' id="name" />
          </div>

          <div className="input-wrapp">
            <label for="name">Пароль</label>
            <input type='password' id="name" />
          </div>

          <button>Зарегистрироваться</button>

        </form>
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
