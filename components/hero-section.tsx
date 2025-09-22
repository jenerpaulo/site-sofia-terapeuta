import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="pt-24 pb-16 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          <div className="space-y-8">
            <h1 className="font-playfair text-5xl lg:text-6xl font-light text-foreground leading-tight text-balance">
              Cuidado emocional com <span className="italic text-primary">acolhimento</span> e profissionalismo
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              Transforme sua jornada emocional através de uma terapia humanizada, onde você encontra o espaço seguro
              para crescer e se descobrir.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
                Agendar Primeira Consulta
              </Button>
              <Button variant="outline" size="lg" className="px-8 bg-transparent">
                Conhecer Minha História
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] bg-accent rounded-2xl overflow-hidden">
              <img
                src="/professional-therapist-in-modern-office-setting--w.jpg"
                alt="Dra. Ana Silva em seu consultório"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary/10 rounded-full"></div>
            <div className="absolute -top-6 -right-6 w-16 h-16 bg-accent rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
