import { useState } from 'react'
import { CheckCircle2, Users, Store, Leaf, Zap, Heart, Lock, Star } from 'lucide-react'
import Button from '../../../components/ui/Button'

const plans = {
    Usuários: [
        {
            id: 'broto',
            name: 'Broto',
            desc: 'Ideal para começar a cuidar da sua saúde com mais praticidade.',
            price: 0,
            icon: <Leaf size={22} className="text-secondary" />,
            features: ['Enviar receitas', 'Receber orçamentos', 'Comparar preços'],
            cta: 'Começar gratuitamente',
            ctaVariant: 'outlineDark',
            highlight: false,
        },
        {
            id: 'raiz',
            name: 'Raiz',
            desc: 'Mais agilidade e benefícios para acompanhar seu tratamento.',
            price: 9.90,
            icon: <Leaf size={22} className="text-secondary" />,
            features: ['Tudo do plano Broto', 'Receber orçamentos mais rápido', 'Destaque nas farmácias', 'Histórico completo', 'Custom Data Retention'],
            cta: 'Escolher este plano',
            ctaVariant: 'primary',
            highlight: true,
        },
        {
            id: 'aroeira',
            name: 'Aroeira',
            desc: 'Experiência completa com prioridade e suporte personalizado.',
            price: 19.90,
            icon: <Leaf size={22} className="text-primary-light" />,
            features: ['Tudo do plano Raiz', 'Prioridade máxima', 'Suporte prioritário', 'Recomendações inteligentes'],
            cta: 'Escolher este plano',
            ctaVariant: 'outlineDark',
            highlight: false,
        },
    ],
    Farmácias: [
        {
            id: 'broto',
            name: 'Broto',
            desc: 'Ideal para começar a cuidar da sua saúde com mais praticidade.',
            price: 0,
            icon: <Leaf size={22} className="text-secondary" />,
            features: ['Enviar receitas', 'Receber orçamentos', 'Comparar preços'],
            cta: 'Começar gratuitamente',
            ctaVariant: 'outlineDark',
            highlight: false,
        },
        {
            id: 'raiz',
            name: 'Raiz',
            desc: 'Mais agilidade e benefícios para acompanhar seu tratamento.',
            price: 9.90,
            icon: <Leaf size={22} className="text-secondary" />,
            features: ['Tudo do plano Broto', 'Receber orçamentos mais rápido', 'Destaque nas farmácias', 'Histórico completo', 'Custom Data Retention'],
            cta: 'Escolher este plano',
            ctaVariant: 'primary',
            highlight: true,
        },
        {
            id: 'aroeira',
            name: 'Aroeira',
            desc: 'Experiência completa com prioridade e suporte personalizado.',
            price: 19.90,
            icon: <Leaf size={22} className="text-primary-light" />,
            features: ['Tudo do plano Raiz', 'Prioridade máxima', 'Suporte prioritário', 'Recomendações inteligentes'],
            cta: 'Escolher este plano',
            ctaVariant: 'outlineDark',
            highlight: false,
        },
    ],
}

const perks = [
    { icon: <CheckCircle2 size={18} className="text-secondary" />, label: 'Mais praticidade no seu dia a dia' },
    { icon: <Zap size={18} className="text-secondary" />,          label: 'Economize tempo e dinheiro'       },
    { icon: <Heart size={18} className="text-secondary" />,        label: 'Acompanhamento simplificado'      },
    { icon: <Lock size={18} className="text-secondary" />,         label: 'Segurança e privacidade em primeiro lugar' },
]

const TABS = ['Usuários', 'Farmácias']

export default function PricingSection() {
    const [activeTab, setActiveTab] = useState('Usuários')

    return (
        <section
            className="min-h-screen flex flex-col justify-center px-6 sm:px-10 py-16 overflow-hidden"
            style={{ background: 'linear-gradient(160deg, #f0ecfb 0%, #e8f4ea 100%)' }}
        >
            <div className="max-w-5xl mx-auto w-full flex flex-col gap-6">

                {/* header */}
                <div className="flex flex-col items-center gap-3 text-center">

                    {/* badge */}
                    <div className="inline-flex items-center gap-2.5 text-sm font-semibold px-4 py-1.5 rounded-full bg-white/70 border border-secondary/30 text-secondary">
                        <Leaf size={13} />
                        Sem compromisso • Cancele quando quiser
                    </div>

                    <h2 className="font-serif text-3xl lg:text-4xl font-bold text-primary leading-snug max-w-lg">
                        Escolha como deseja simplificar{' '}
                        <span className="text-secondary">seu cuidado</span>
                    </h2>

                    <p className="text-sm text-primary/60 max-w-md">
                        Planos pensados para facilitar seu tratamento com praticidade e segurança.
                    </p>

                    {/* tabs */}
                    <div className="flex bg-white/60 rounded-full p-1 gap-1 shadow-sm mt-2">
                        {TABS.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                                    activeTab === tab
                                        ? 'bg-primary text-white shadow-sm'
                                        : 'text-primary/50 hover:text-primary'
                                }`}
                            >
                                {tab === 'Usuários' ? <Users size={14} /> : <Store size={14} />}
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>

                {/* cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                    {plans[activeTab].map((plan) => (
                        <div
                            key={plan.id}
                            className={`relative flex flex-col gap-4 rounded-3xl p-6 transition-all duration-300 ${
                                plan.highlight
                                    ? 'bg-white border-2 border-secondary shadow-xl shadow-secondary/10 scale-105'
                                    : 'bg-white/70 border border-white shadow-sm'
                            }`}
                        >
                            {/* badge "mais escolhido" só no highlight */}
                            {plan.highlight && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-1.5 rounded-full bg-secondary text-white shadow-md whitespace-nowrap">
                                    <Star size={11} className="fill-white" />
                                    Mais escolhido
                                </div>
                            )}

                            {/* plan header */}
                            <div className="flex flex-col gap-2">
                                <div className={`w-10 h-10 rounded-2xl flex items-center justify-center ${
                                    plan.highlight ? 'bg-secondary/15' : 'bg-primary/6'
                                }`}>
                                    {plan.icon}
                                </div>
                                <div>
                                    <p className={`font-bold text-lg ${plan.highlight ? 'text-secondary' : 'text-primary'}`}>
                                        {plan.name}
                                    </p>
                                    <p className="text-xs text-primary/55 leading-relaxed mt-0.5">{plan.desc}</p>
                                </div>
                            </div>

                            <hr className="border-gray-100" />

                            {/* preço */}
                            <div className="flex items-baseline gap-1">
                                <span className="text-sm text-primary/50 font-medium">R$</span>
                                <span className="font-serif text-3xl font-bold text-primary">
                                    {plan.price === 0 ? '0' : plan.price.toFixed(2).replace('.', ',')}
                                </span>
                                <span className="text-xs text-primary/50">/mês</span>
                            </div>

                            {/* features */}
                            <ul className="flex flex-col gap-2.5">
                                {plan.features.map((f) => (
                                    <li key={f} className="flex items-center gap-2.5 text-sm text-primary/70">
                                        <CheckCircle2 size={15} className="text-secondary flex-shrink-0" />
                                        {f}
                                    </li>
                                ))}
                            </ul>

                            {/* cta */}
                            <Button
                                variant={plan.ctaVariant}
                                className={`w-full justify-center mt-auto ${plan.highlight ? '!bg-secondary !text-white hover:!bg-secondary/90 !border-0' : ''}`}
                            >
                                {plan.cta}
                            </Button>
                        </div>
                    ))}
                </div>

                {/* segurança */}
                <p className="flex items-center gap-1.5 text-xs text-primary/40 justify-center">
                    <Lock size={12} />
                    Seus dados estão protegidos com segurança.
                </p>

                {/* perks */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {perks.map((perk) => (
                        <div key={perk.label} className="flex items-start gap-3">
                            <div className="w-8 h-8 rounded-xl bg-white/70 flex items-center justify-center flex-shrink-0 shadow-sm">
                                {perk.icon}
                            </div>
                            <p className="text-xs text-primary/60 leading-snug">{perk.label}</p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}