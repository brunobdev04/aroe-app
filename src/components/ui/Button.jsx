export default function Button({ children, variant = 'primary', onClick = () => {}, to }) {
    const variants = {
        primary: "bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl shadow-lg shadow-indigo-500/30",
        outline: "bg-white/5 border border-white/30 text-white hover:bg-white/12 rounded-xl backdrop-blur-sm",

        outlineDark: "border-2 border-primary/30 text-primary hover:border-primary/60 hover:bg-primary/5 rounded-xl backdrop-blur-sm",

        // TODO mudar esses dois aqui pra o estilo do figma dps
        navOutline: "border border-white/60 text-white hover:bg-white/10 rounded-full",
        navPrimary: "bg-purple-700 hover:bg-purple-800 text-white rounded-full",
    }
    
    return (
        <button
            onClick={onClick}
            className={`flex items-center gap-2 text-sm font-semibold px-6 py-2.5 rounded-xl cursor-pointer transition-all duration-300 ${variants[variant]}`}
        >
            {children}
        </button>
    )
}