import './styles.css'
import { CaretLeft } from 'phosphor-react'
import { useNavigate } from 'react-router-dom'

export function Aluguel() {
    const navigate = useNavigate();
    return (
        <div class="content flex flex-col white-background justify-between">
            <div>
                <div class="green-background hello-box flex flex-col">
                    <div class="go-back-icon flex justify-start items-center" onClick={() => navigate("/menu")} >
                        <a class="flex cursor-pointer" >
                            <span class="material-symbols-outlined"><CaretLeft size={32} /></span>
                        </a>
                        <span class="ml-5 text-[#F2F2F2]">
                            Voltar
                        </span>
                    </div>
                    <div class="flex items-end grow">
                        <h3 class="hello-title">
                            Selecione seu armário
                        </h3>
                    </div>
                </div>

                <div class="menu-box flex flex-col items-around">
                    <div class="select-locker-box flex flex-col">
                        <div class="select-locker-btn">
                            <input type="radio" id="radio-locker-1" name="lockerName" />
                            <label for="radio-locker-1">Armário Bloco B5</label>
                        </div>
                        <div class="select-locker-btn">
                            <input type="radio" id="radio-locker-2" name="lockerName" />
                            <label for="radio-locker-2">Armário Bloco B6</label>
                        </div>
                        <div class="select-locker-btn">
                            <input type="radio" id="radio-locker-3" name="lockerName" />
                            <label for="radio-locker-3">Armário Bloco D2</label>
                        </div>
                    </div>


                </div>
            </div>

            <div>
                <div class="payment-continue-box d-flex flex-column">
                    <div class="payment-wallet-box">
                        <h4 class="wallet-title">Meu saldo: <span>R$ 40,00</span></h4>
                    </div>
                </div>
                <div class="continue-btn">
                    <a href="tela-qrcode.html">
                        Continuar
                    </a>
                </div>
            </div>
        </div>
    )
}