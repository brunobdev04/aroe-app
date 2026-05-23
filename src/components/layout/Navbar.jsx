import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Button from "../ui/Button"

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false) 

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 120)
        }

        window.addEventListener("scroll", handleScroll, { passive: true })
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 px-8 py-3 transition-all duration-700 ${
                scrolled
                    ? "bg-primary/95 backdrop-blur-md shadow-lg shadow-black/20"
                    : "bg-transparent"
            }`}
        >
            <nav className="max-w-6xl mx-auto flex items-center justify-between">
                <Link to="/" className="flex items-center">
                    <img src="/logo.png" alt="Logo da Aroê" className="h-10"/>
                </Link>

                <div className="flex items-center gap-10">
                    <Link to="/medicamentos" className="text-white text-sm font-medium hover:opacity-80 transition">
                        Medicamentos
                    </Link>
                    <Link to="/como-funciona" className="text-white text-sm font-medium hover:opacity-80 transition">
                        Como funciona
                    </Link>
                    <Link to="/sobre" className="text-white text-sm font-medium hover:opacity-80 transition">
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