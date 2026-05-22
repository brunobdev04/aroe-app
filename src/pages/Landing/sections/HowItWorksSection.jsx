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
                <img
                    src="/mockups.png"
                    alt="App Aroê"
                    className="w-full max-w-lg drop-shadow-2xl"
                />
            </div>
        </section>
    )
}