import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Menu, X } from 'lucide-react'
import Button from "../ui/Button"

const NAV_LINKS = [
    { label: 'Medicamentos', to: '/medicamentos'},
    { label: 'Como funciona', to: '/como-funciona'},
    { label: 'Sobre', to: '/sobre'},
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 120)
        window.addEventListener("scroll", handleScroll, { passive: true })
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    useEffect(() => {
        if (scrolled) setMenuOpen(false)
    }, [scrolled])

    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : ''
        return () => { document.body.style.overflow = ''}
    }, [menuOpen])

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                scrolled
                    ? "bg-primary/95 backdrop-blur-md shadow-lg shadow-black/20"
                    : "bg-transparent"
            }`}
        >

            <nav className="max-w-6xl mx-auto px-6 md:px-8 py-3 flex items-center justify-between">

                <Link to="/" className="flex items-center flex-shrink-0">
                    <img src="/logo.png" alt="Logo da Aroê" className="h-9 w-auto"/>
                </Link>

                <ul className="hidden md:flex items-center gap-8 lg:gap-10">
                    {NAV_LINKS.map((link) => (
                        <li key={link.to}>
                            <Link
                                to={link.to}
                                className="text-white/90 text-sm font-medium hover:text-white transition-colors duration-200"
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* cta desktop */}
                <div className="hidden md:flex items-center gap-3">
                    <Button variant="navOutline" to="/cadastro">
                        Cadastrar
                    </Button>

                    <Button variant="navPrimary" to="/entrar">
                        Entrar
                    </Button>
                </div>

                {/* menu hamburguer */}
                <button
                    className="md:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors duration-200"
                    onClick={() => setMenuOpen((prev) => !prev)}
                    aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
                    aria-expanded={menuOpen}
                >
                    {menuOpen ? <X size={22}/> : <Menu size={22} />}
                </button>

                <div
                    className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-primary/98 backdrop-blur-md border-t border-white/10
                    ${menuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}`}
                >
                    <div className="px-6 py-6 flex flex-col gap-1">

                        {/* link */}
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.to}
                                to={link.to}
                                onClick={() => setMenuOpen(false)}
                                className="text-white/85 text-base font-medium py-3 border-b border-white/8 hover:text-white hover:pl-1 transition-all duration-200"
                            >
                                {link.label}
                            </Link>
                        ))}

                        {/* ctas */}
                        <div className="flex flex-col gap-3 pt-5">
                            <Button variant="navOutline" to="/cadastro" className="w-full justify-center">
                                Cadastrar
                            </Button>

                            <Button variant="navPrimary" to="/entrar" className="w-full justify-center">
                                Entrar
                            </Button>
                        </div>

                    </div>
                </div>

            </nav>
        </header>
    )
}