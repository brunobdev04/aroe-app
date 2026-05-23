const features = [
    "Identifica os medicamentos da receita",
    "Envia para farmácias parceiras",
    "Organiza os melhores preços",
]

export default function IntelligenceSection() {
  return (
    <section className="min-h-screen flex bg-white overflow-hidden">

        <div className="relative w-1/2 overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('/pill-mascot.png')` }}
            />
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
                        Nossa tecnologia analisa sua receita e encontra as melhores
                        opções automaticamente
                    </p>
                </div>

                <div className="flex flex-col gap-3">
                    {features.map((f) => (
                        <div
                            key={f}
                            className="bg-primary text-white font-semibold text-sm px-6 py-3.5 rounded-full"
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