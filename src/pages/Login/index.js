import React, { useState } from 'react'
import './login.css'

import { MdEmail, MdLock } from "react-icons/md";
import { HiEye, HiEyeOff } from "react-icons/hi"

function Login() {
    const  [email, setEmail] = useState(" ")
    const [password, setPassword] = useState("")
    const [show, setShow] = useState(false)

    const handleClick = (e) => {
        e.preventDefault()
        setShow(!show);
    }

    return (
        <div className="login">
            <div className="login-logo">
                <img src="https://sudokuwar.com/img/login.png" alt="login"/>
            </div>

            <div className="login-left">
                <h1>Acessar App</h1>

                <div className="loginInputEmail">
                    <MdEmail/>
                    <input type="email" placeholder="Digite o e-mail: " value={email} onChange={e => setEmail(e.target.value)}></input>
                </div>

                <div className="loginInputPassword">
                    <MdLock/>
                    <input type={show ? "text" : "password"} placeholder="Digite sua senha"
                    value={password}
                    onChange={ e => setPassword(e.target.value)}/>
                    <div className="login-eye">
                        {show ? (
                            <HiEye 
                                size={20}
                                onClick={handleClick}
                            />
                        ) : (
                            <HiEyeOff 
                                size={20} 
                                onClick={handleClick}
                            />
                            
                        )}
                    </div>

                </div>

                <button type="submit">
                    Entrar
                </button>

                <h4>Não possui conta? </h4>

                <button type="submit">
                    Cadastre-se agora
                </button>
            </div>
        </div>
    )
}

export default Login