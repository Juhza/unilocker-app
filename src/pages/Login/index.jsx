import './styles.css'
import { LockOpen } from 'phosphor-react'
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';

export function Login() {
    const { createNewUser } = useContext(UserContext)

    const navigate = useNavigate()

    function handleLogin(event) {
        event.preventDefault();

        if (event.target[0].value.length > 1) {
            createNewUser(event.target[0].value)
            localStorage.setItem("name", JSON.stringify(event.target[0].value))
            return navigate("/loading")
        }

        return alert('Insira um nome valido')

    }

    return (
        <div className="content flex flex-col justify-center align-items  green-background">
            <div className='flex flex-row items-center gap-1 justify-center mb-5'>
                <LockOpen size={44} />
                <h1 className='unilocker-title'>UNILOCKER</h1>
            </div>
            <div className="flex justify-center items-center flex-col mb-5">

                <form onSubmit={handleLogin} className="flex flex-col">
                    <input type="text" placeholder="Nome" className="name-input mb-5" />
                    <button
                        type="submit"
                        className='bg-[#1D5902] px-6 py-3 rounded-lg text-[#F2F2F2]'

                    >
                        Entrar

                    </button>
                </form>
            </div>

        </div>
    )
}