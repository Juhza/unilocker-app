import { Routes, Route } from "react-router-dom";
import { Aluguel } from "./pages/Aluguel";
import { Historico } from "./pages/Historico/Historico";
import { Login } from "./pages/Login";
import { Menu } from "./pages/Menu";
import { Pagamento } from "./pages/Pagamento";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/aluguel" element={<Aluguel />} />
            <Route path="/pagamento" element={<Pagamento />} />
            <Route path="/historico" element={<Historico />} />


        </Routes>
    )
}