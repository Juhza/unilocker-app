import './styles.css'
import qrcode from '../../assets/qrcode.svg'
import { useNavigate } from 'react-router-dom'

export function Pagamento() {
    const navigate = useNavigate()
    return (
        <div className="content green-background flex items-center justify-center">
            <div className="d-flex flex-column successful-purchase-box">
                <h1>
                    Tudo pronto!
                </h1>
                <p className='font-bold'>
                    Basta ir até a localização do seu armário e escanear o QR Code abaixo.
                </p>
                <a href="#" className='underline'>
                    Ver localização no Google Maps
                </a>
                <div className="qrcode-box max-w-[900]">
                    <img src={qrcode} />
                </div>
                <a onClick={() => navigate("/menu")} className='underline'>
                    Voltar
                </a>
            </div>
        </div>
    )
}