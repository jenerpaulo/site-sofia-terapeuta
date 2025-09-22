import { Card, CardContent } from "@/components/ui/card"

export function ServicesSection() {
  const services = [
    {
      title: "Terapia Individual",
      description:
        "Sessões personalizadas para trabalhar questões específicas como ansiedade, depressão, autoestima e relacionamentos.",
      duration: "50 minutos",
      icon: "👤",
    },
    {
      title: "Terapia de Casal",
      description:
        "Apoio especializado para casais que desejam fortalecer a comunicação e resolver conflitos de forma saudável.",
      duration: "60 minutos",
      icon: "💑",
    },
    {
      title: "Orientação Familiar",
      description: "Suporte para famílias navegarem por mudanças, conflitos e desafios do dia a dia com mais harmonia.",
      duration: "60 minutos",
      icon: "👨‍👩‍👧‍👦",
    },
    {
      title: "Atendimento Online",
      description:
        "Sessões por videochamada com a mesma qualidade do atendimento presencial, oferecendo flexibilidade e comodidade.",
      duration: "50 minutos",
      icon: "💻",
    },
  ]

  return (
    <section id="servicos" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-6 mb-16">
          <h2 className="font-playfair text-4xl font-light text-foreground">Serviços</h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
            Oferecemos diferentes modalidades de atendimento para atender suas necessidades específicas
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-border bg-card hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">{service.icon}</div>
                  <div className="space-y-3 flex-1">
                    <h3 className="font-semibold text-xl text-card-foreground">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                    <div className="flex items-center gap-2 text-sm text-primary">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span>Duração: {service.duration}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
