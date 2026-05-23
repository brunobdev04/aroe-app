const features = [
    "Identifica os medicamentos da receita",
    "Envia para farmácias parceiras",
    "Organiza os melhores preços",
]

export default function IntelligenceSection() {
  return (
<<<<<<< Updated upstream
    <section className="min-h-screen flex bg-gray-50 overflow-hidden">

        {/* imagem da pilula */}
=======
    <section className="min-h-screen flex bg-white overflow-hidden">

>>>>>>> Stashed changes
        <div className="relative w-1/2 overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('/pill-mascot.png')` }}
            />
<<<<<<< Updated upstream
            
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-gray-50" />
        </div>

        {/* conteudo  */}
        <div className="w-1/2 flex items-center px-16 py-24">
            <div className="flex flex-col gap-10 max-w-md">
                <div>
                    <h2 className="font-dm-serif text-4xl font-bold text-[#1a1a3a] leading-snug">
                        Mais inteligência,{" "}
                        <span className="text-violet-500">menos esforço</span>
                    </h2>
                    <p className="mt-4 text-lg text-black leading-relaxed">
=======
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white" />
        </div>

        <div className="w-1/2 flex items-center px-16 py-24">
            <div className="flex flex-col gap-10 max-w-md">
                <div>
                    <h2 className="font-serif text-4xl font-bold text-primary leading-snug">
                        Mais inteligência,{" "}
                        <span className="text-primary-light">menos esforço</span>
                    </h2>
                    <p className="mt-4 text-lg text-primary/70 leading-relaxed">
>>>>>>> Stashed changes
                        Nossa tecnologia analisa sua receita e encontra as melhores
                        opções automaticamente
                    </p>
                </div>

                <div className="flex flex-col gap-3">
                    {features.map((f) => (
                        <div
                            key={f}
<<<<<<< Updated upstream
                            className="bg-violet-500 text-white font-semibold text-sm px-6 py-3.5 rounded-full"
=======
                            className="bg-primary text-white font-semibold text-sm px-6 py-3.5 rounded-full"
>>>>>>> Stashed changes
                        >
                            {f}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}