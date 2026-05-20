import { Link } from "react-router-dom"
import Button from "../Button/Button"

export default function Navbar() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md px-8 py-3">
            <nav className="max-w-6xl mx-auto flex items-center justify-between">
                <Link to="/" className="flex items-center">
                    <img src="/logo.png" alt="Logo da Aroê" className="h-10"/>
                </Link>

                <div className="flex items-center gap-10">
                    <Link to="/medicamentos" className="text-white text-sm font-medium hover:opacity-80 trasition">
                        Medicamentos
                    </Link>
                    <Link to="/como-funciona" className="text-white text-sm font-medium hover:opacity-80 trasition">
                        Como funciona
                    </Link>
                    <Link to="/sobre" className="text-white text-sm font-medium hover:opacity-80 trasition">
                        Sobre
                    </Link>
                </div>

                <div className="flex items-center gap-3">
                    <Button variant="navOutline">Cadastrar</Button>
                    <Button variant="navPrimary">Entrar</Button>
                </div>
            </nav>
        </header>
    )
}