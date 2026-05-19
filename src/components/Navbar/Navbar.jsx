export default function Navbar() {
    // TODO
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md px-8 py-3">
            <nav className="max-w-6xl mx-auto flex items-center justify-between">
                <Link to="/" className="flex items-center">
                    <img src="../../assets/logo.png" alt="Logo da Aroê" className="h-10"/>
                </Link>
            </nav>
        </header>
    )
}