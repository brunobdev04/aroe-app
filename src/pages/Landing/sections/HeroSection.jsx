import heroBg from '../../../assets/hero.jpg'
import Button from '../../../components/ui/Button'

export default function HeroSection() {
    return (
        <section className="relative h-screen flex items-center justify-start overflow-hidden antialiased">
            <div
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{ backgroundImage: `url(${heroBg})` }}
            />
            <div
                className="absolute inset-0 z-10"
                style={{
                    background: 'linear-gradient(105deg, rgba(10,6,28,0.88) 0%, rgba(10,6,28,0.6) 50%, rgba(10,6,28,0.2) 100%)'
                }}
            />

            <div className="relative z-20 max-w-xl px-12 pt-16">
                <div 
                    className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest px-3 py-1 rounded-full mb-6 text-white border border-white/30 bg-white/15 backdrop-blur-sm ring-1 ring-white/10 hover:ring-white/50">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                    A tecnologia que cuida de você
                </div>

                <h1 className="font-serif text-5xl font-bold leading-tight text-white mb-4">
                    Seus medicamentos<br />
                    manipulados, <span className="text-secondary">sem complicação.</span>
                </h1>

                <p className="text-sm text-white/90 leading-relaxed mb-8 max-w-sm">
                    Envie sua receita uma vez, compare orçamentos de farmácias
                    qualificadas e receba em casa com total transparência.
                </p>

                <div className="flex gap-5 flex-wrap mb-10">
                    <Button variant="outline">Sou Farmácia</Button>
                    <Button variant="primary">Enviar Receita</Button>
                </div>

                <div className="flex gap-6 flex-wrap">

                    <div className="flex items-center gap-1.5 text-xs text-white/85">
                        <div className="w-3.5 h-3.5 rounded-full flex items-center justify-center text-secondary bg-secondary/25 text-[9px]">
                            ✓
                        </div>
                        Envio único de receita

                    </div>

                    <div className="flex items-center gap-1.5 text-xs text-white/85">
                        <div className="w-3.5 h-3.5 rounded-full flex items-center justify-center text-primary-light bg-primary-light/30 text-[9px]">
                            ✓
                        </div>
                        Compare preços
                    </div>

                    <div className="flex items-center gap-1.5 text-xs text-white/85">
                        <div className="w-3.5 h-3.5 rounded-full flex items-center justify-center text-secondary bg-secondary/25 text-[9px]">
                            ✓
                        </div>
                        Farmácias verificadas
                    </div>
                </div>
            </div>
        </section>
    )
}