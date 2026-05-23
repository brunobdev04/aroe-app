<<<<<<< Updated upstream
export default function HowItWorksSection() {
    return (
        <section className="min-h-screen flex bg-[#F4F2FB] overflow-hidden">

            {/* conteudo */}
            <div className="w-1/2 flex items-center px-16 py-24">
                <div className="flex flex-col gap-10 max-w-md">
                    <div>
                        <h2 className="font-dm-serif text-4xl font-bold text-[#2A1F5E] leading-snug">
                            Controle seu tratamento do,{" "}
                            <span className="text-[#4DAA5C]">início ao fim.</span>
                        </h2>
                        <p className="mt-4 text-lg text-black leading-relaxed">
                           Envie sua receita, compare preços e finalize com a melhor opção, tudo pelo celular
                        </p>
                    </div>

                </div>
            </div>

            {/* mockup imgs */}
            <div className="flex justify-center items-center">
=======
import { FileText, CircleDollarSign, Truck, Upload, Play } from 'lucide-react'
import Button from '../../../components/ui/Button'

const steps = [
    {
        icon: <FileText size={20} />,
        title: "Envie sua receita em segundos",
        desc: "Foto ou PDF de forma rápida e segura.",
    },
    {
        icon: <CircleDollarSign size={20} />,
        title: "Compare orçamentos facilmente",
        desc: "Veja preços e condições das melhores farmácias.",
    },
    {
        icon: <Truck size={20} />,
        title: "Receba em casa com segurança",
        desc: "Entrega rápida e acompanhamento do pedido.",
    },
]

export default function HowItWorksSection() {
    return (
        <section className="flex bg-primary-light/20 overflow-hidden min-h-screen">

            {/* textos*/}
            <div className="w-1/2 flex items-center px-16 min-h-screen">
                <div className="flex flex-col gap-6 max-w-xl">

                    {/*  */}
                    <div className="inline-flex items-center gap-2 self-start text-xs font-semibold tracking-widest px-4 py-1.5 rounded-full border border-secondary/40 bg-secondary/10 text-secondary">
                        <span>🌿</span>
                        PRÁTICO E COMPLETO
                    </div>

                    {/* Heading + subtitle */}
                    <div>
                        <h2 className="font-serif text-5xl font-bold text-primary leading-snug">
                            Controle seu tratamento
                            do{" "}
                            <span className="text-secondary">início ao fim.</span>
                        </h2>
                        <p className="mt-4 text-lg text-primary/70 leading-relaxed">
                            Envie sua receita, compare preços e finalize com a melhor
                            opção — tudo pelo celular.
                        </p>
                    </div>

                    {/* steps */}
                    <div className="flex flex-col gap-4">
                        {steps.map((step) => (
                            <div key={step.title} className="flex items-start gap-4">
                                {/* icon */}
                                <div className="flex-shrink-0 w-11 h-11 rounded-xl border-2 border-secondary/40 bg-secondary/10 text-secondary flex items-center justify-center">
                                    {step.icon}
                                </div>
                                <div>
                                    <p className="font-semibold text-primary text-base">{step.title}</p>
                                    <p className="text-sm text-primary/60 mt-0.5">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* buttons */}
                    <div className="flex gap-4 flex-wrap">
                        <Button variant='primary'>
                            <Upload size={16} />
                            Enviar receita
                        </Button>
                        <button className="flex items-center gap-2 border-2 border-primary/30 text-primary font-semibold text-sm px-6 py-3.5 rounded-xl hover:border-primary/60 hover:bg-primary/5 transition-colors">
                            <Play size={14} className="fill-primary" />
                            Ver como funciona
                        </button>
                    </div>

                </div>
            </div>

            {/* ── Right mockup ── */}
            <div className="w-1/2 flex justify-center items-center overflow-hidden">
>>>>>>> Stashed changes
                <img
                    src="/mockups.png"
                    alt="App Aroê"
                    className="w-full max-w-lg drop-shadow-2xl"
                />
            </div>
<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
        </section>
    )
}