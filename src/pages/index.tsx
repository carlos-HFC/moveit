import axios from "axios";
import Cookies from "js-cookie";
import Head from "next/head";
import router from 'next/router';
import { FormEvent, useEffect, useState } from "react";

const user = Cookies.get("user");

export default function Login() {
  const [username, setUsername] = useState('');

  useEffect(() => {
    if (user !== 'undefined' || !user) router.push('/cicle');
  }, []);

  async function fetchLogin(event: FormEvent) {
    event.preventDefault();

    try {
      const { data } = await axios.get<User>(`https://api.github.com/users/${username}`);

      const user = {
        name: data.name,
        avatar_url: data.avatar_url
      };

      Cookies.set("user", user);
      router.push('/cicle');
    } catch (error) {

    }
  }

  return (
    <div className="login">
      <Head>
        <title>Login | Move.it</title>
      </Head>
      <div className="login-image">
        <img src="/logo-symbol.svg" alt="Símbolo do MoveIt" />
      </div>
      <div className="login-form">
        <div className="login-form__image">
          <img src="/logo-full-invert.svg" alt="Logo do MoveIt" />
        </div>
        <div className="login-form__box">
          <h1 className="form-title">
            Bem-vindo
          </h1>
          <span className="form-subtitle">
            <img src="/icons/github.svg" alt="Logo do Github" />
            <p>Faça login com seu Github para começar</p>
          </span>
          <form className="form-input" onSubmit={fetchLogin}>
            <input type="text" placeholder="Digite seu username"
              value={username} onChange={e => setUsername(e.target.value)} />
            <button type="submit">
              <img src="/icons/arrow_right.svg" alt="Entrar" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};