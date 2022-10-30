import { CaretLeft } from 'phosphor-react'
import { useNavigate } from 'react-router-dom'

export function Historico() {
    const navigate = useNavigate()
    return (
        <div class="content flex flex-col white-background">
            <div>
                <div class="green-background hello-box flex flex-col">
                    <div class="go-back-icon flex justify-start items-center" onClick={() => navigate("/menu")} >
                        <a class="flex">
                            <span class="material-symbols-outlined">
                                <CaretLeft size={32} />
                            </span>
                        </a>
                        <span class="ml-5 text-[#F2F2F2]">
                            Voltar
                        </span>
                    </div>
                    <div class="flex items-end grow">
                        <h3 class="hello-title">
                            Histórico
                        </h3>
                    </div>
                </div>

                <div class="history-box">
                    <div class="history-item">
                        <div class="history-item-name">
                            Armário Bloco B5: <span>N4</span>
                        </div>
                        <div class="history-item-date">
                            26/10/2022
                        </div>
                    </div>

                    <div class="history-item">
                        <div class="history-item-name">
                            Armário Bloco B5: <span>N3</span>
                        </div>
                        <div class="history-item-date">
                            25/10/2022
                        </div>
                    </div>

                    <div class="history-item">
                        <div class="history-item-name">
                            Armário Bloco D2: <span>N10</span>
                        </div>
                        <div class="history-item-date">
                            20/10/2022
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}