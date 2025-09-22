export function AboutSection() {
  return (
    <section id="sobre" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center space-y-6 mb-16">
          <h2 className="font-playfair text-4xl font-light text-foreground">Sobre Mim</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Dedicada ao cuidado emocional há mais de 10 anos
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-foreground leading-relaxed">
              Sou psicóloga clínica formada pela Universidade de São Paulo, com especialização em Terapia
              Cognitivo-Comportamental e Psicologia Humanística. Minha abordagem integra técnicas comprovadas com um
              olhar acolhedor e personalizado.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Acredito que cada pessoa possui recursos internos únicos para superar desafios e alcançar bem-estar. Meu
              papel é criar um ambiente seguro onde você possa explorar, compreender e transformar padrões que não
              servem mais à sua vida.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-foreground">CRP 06/123456</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-foreground">Especialização em TCC - PUC-SP</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-foreground">Formação em Psicologia Humanística</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-accent/50 rounded-2xl overflow-hidden">
              <img src="/professional-female-therapist-portrait--warm-smile.jpg" alt="Dra. Ana Silva" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
