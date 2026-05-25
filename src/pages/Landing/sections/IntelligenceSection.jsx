import { useState } from 'react'
import { CheckCircle2 } from 'lucide-react'

const features = [
    {
        id: 1,
        label: "Identifica os medicamentos da receita",
        detail: "Leitura automática de receitas em foto ou PDF, reconhecendo nomes, dosagens e posologias.",
    },
    {
        id: 2,
        label: "Envia para farmácias parceiras",
        detail: "Sua receita chega simultaneamente a todas as farmácias verificadas da sua região.",
    },
    {
        id: 3,
        label: "Organiza os melhores preços",
        detail: "Comparativo claro de valores, prazo de entrega e avaliação de cada farmácia.",
    },
]

export default function IntelligenceSection() {
    const [activeFeature, setActiveFeature] = useState(null)

    return (
        <section className="min-h-screen flex flex-col lg:flex-row bg-white overflow-hidden">

            {/* pilula img */}
            <div
                className="relative w-full lg:w-1/2 min-h-64 lg:min-h-screen overflow-hidden order-first"
                role="img"
                aria-label="Mascote da Aroê representando tecnologia farmacêutica"
            >
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url('/pill-mascot.png')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-transparent via-transparent to-white" />
            </div>

            {/* conteudo */}
            <div className="w-full lg:w-1/2 flex items-center px-6 sm:px-10 lg:px-16 py-16 lg:py-24 order-last">
                <div className="flex flex-col gap-8 lg:gap-10 max-w-md w-full">

                    <div>
                        <h2 className="font-serif text-3xl lg:text-4xl font-bold text-primary leading-snug">
                            Mais inteligência,{" "}
                            <span className="text-primary-light">menos esforço</span>
                        </h2>
                        <p className="mt-4 text-base lg:text-lg text-primary/70 leading-relaxed">
                            Nossa tecnologia analisa sua receita e encontra as melhores
                            opções automaticamente.
                        </p>
                    </div>

                    <div className="flex flex-col gap-3">
                        {features.map((feature) => {
                            const isActive = activeFeature === feature.id

                            return (
                                <button
                                    key={feature.id}
                                    onClick={() => setActiveFeature(isActive ? null : feature.id)}
                                    className={`text-left rounded-2xl transition-all duration-300 overflow-hidden
                                        ${isActive
                                            ? 'bg-primary shadow-lg shadow-primary/20'
                                            : 'bg-primary/8 hover:bg-primary/15'
                                        }`}
                                >
                                    {/* label principal smp visivel */}
                                    <div className="flex items-center justify-between gap-3 px-6 py-3.5">
                                        <div className="flex items-center gap-3">
                                            <CheckCircle2
                                                size={16}
                                                className={`flex-shrink-0 transition-colors duration-300
                                                    ${isActive ? 'text-secondary' : 'text-primary/40'}`}
                                            />
                                            <span className={`font-semibold text-sm transition-colors duration-300
                                                ${isActive ? 'text-white' : 'text-primary'}`}>
                                                {feature.label}
                                            </span>
                                        </div>
                                        <span className={`text-xs flex-shrink-0 transition-colors duration-300
                                            ${isActive ? 'text-white/60' : 'text-primary/30'}`}>
                                            {isActive ? '−' : '+'}
                                        </span>
                                    </div>

                                    {/* detalhes dropdown */}
                                    <div className={`transition-all duration-300 ease-in-out
                                        ${isActive ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'}`}>
                                        <p className="px-6 pb-4 text-xs text-white/70 leading-relaxed">
                                            {feature.detail}
                                        </p>
                                    </div>
                                </button>
                            )
                        })}
                    </div>

                </div>
            </div>

        </section>
    )
}