import { useContext, useEffect } from "react"
import { UserContext } from "../../context/UserContext"
import './styles.css'
import { Gear, LockKeyOpen, ClockCounterClockwise, CaretLeft } from 'phosphor-react'
import { useNavigate } from "react-router-dom"

export function Menu() {
    const { user } = useContext(UserContext)

    const getName = localStorage.getItem("name")
    const navigate = useNavigate()

    return (
        <div className="content flex flex-col white-background">
            <div className="green-background hello-box flex">

                <div className="flex items-end  grow">
                    <h3 className="hello-title">
                        Olá, <span>{user ? user : JSON.parse(getName)}</span>!
                    </h3>
                </div>

                <div className="settings-icon flex justify-end">

                    <span className="material-symbols-outlined">
                        <Gear size={32} weight="bold" />
                    </span>
                </div>
            </div>

            <div className="menu-box">
                <div className="wallet-box">
                    <h4 className="wallet-title">Meu saldo</h4>
                    <div className="wallet-content">
                        <p>R$ <span>40,00</span></p>
                        <a href="#" className="underline">
                            Recarregar
                        </a>
                    </div>
                </div>

                <div className="menu-items flex">

                    <div className="flex menu-item-btn" onClick={() => navigate("/aluguel")}>

                        <div className="menu-item-icon">
                            <span className="material-symbols-outlined">
                                <LockKeyOpen size={24} weight="bold" />
                            </span>
                        </div>
                        <div >
                            Alugar um armário
                        </div>
                    </div>
                    <div className="menu-item-btn" onClick={() => navigate("/historico")}>
                        <div className="menu-item-icon">
                            <span className="material-symbols-outlined">
                                <ClockCounterClockwise size={24} weight="bold" />
                            </span>
                        </div>
                        <div>
                            Histórico
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}