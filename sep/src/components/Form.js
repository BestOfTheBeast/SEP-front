import React, { useState } from 'react';
import '../css/App.css';

export const Form = ({ createUser }) => {
    const [ user, setUser ] = useState({ name: '', group: '', pass: '' });


    console.log(user);
    const { name, pass, group } = user;

    const change = ({ target }) => {
        const { name, value, group} = target;

        setUser({
            ...user,
            [name]: value
        });
    }

    const submit = (event) => {
        event.preventDefault();

        if (!name || !pass || !group) {
            return null;
        }

        createUser(user);

        setUser({ name: '',  group: '', pass: '' });
    } 
    
    return (
        

        <form method="" onSubmit={submit}>
          <h1>Реєстрація</h1>

          <div className="input-wrapp">
            <label htmlFor="name">Имя</label>
            <input  id="name" 
                    type="text"
                    name="name"
                    className="form-control my-input"
                    placeholder="Name"
                    value = { name }
                    onChange = { change }/>
          </div>

          <div className="input-wrapp">
            <label htmlFor="name">Назва підгрупи</label>
            <input type="text"
                    name="group"
                    className="form-control my-input"
                    placeholder="Name"
                    value = { group }
                    onChange = { change }/>
          </div>

          <div className="input-wrapp">
            <label htmlFor="name">Пароль</label>
            <input type='password' id="name" 

                    name="pass"
                    className="form-control my-input"
                    placeholder="Email"
                    value = { pass }
                    onChange = { change }/>
          </div>

          <button
                type="submit"
                className="tx-tfm"
            >
                Зарегистрироваться
            </button>

        </form>
    );
};
