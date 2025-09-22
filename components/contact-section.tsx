import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function ContactSection() {
  return (
    <section id="contato" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center space-y-6 mb-16">
          <h2 className="font-playfair text-4xl font-light text-foreground">Vamos Conversar?</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Estou aqui para apoiar você em sua jornada de autoconhecimento e bem-estar
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-border bg-card">
            <CardContent className="p-8 space-y-6">
              <h3 className="font-semibold text-xl text-card-foreground mb-6">Informações de Contato</h3>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary">📧</span>
                  </div>
                  <div>
                    <p className="font-medium text-card-foreground">Email</p>
                    <p className="text-muted-foreground">contato@draanasilva.com.br</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary">📱</span>
                  </div>
                  <div>
                    <p className="font-medium text-card-foreground">WhatsApp</p>
                    <p className="text-muted-foreground">(11) 99999-9999</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary">📍</span>
                  </div>
                  <div>
                    <p className="font-medium text-card-foreground">Localização</p>
                    <p className="text-muted-foreground">Vila Madalena, São Paulo - SP</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary">🕒</span>
                  </div>
                  <div>
                    <p className="font-medium text-card-foreground">Horários</p>
                    <p className="text-muted-foreground">Seg à Sex: 8h às 18h</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border bg-card">
            <CardContent className="p-8">
              <h3 className="font-semibold text-xl text-card-foreground mb-6">Primeira Consulta</h3>

              <div className="space-y-4 mb-6">
                <p className="text-muted-foreground leading-relaxed">
                  A primeira sessão é um momento especial onde nos conhecemos melhor. Conversaremos sobre suas
                  necessidades, expectativas e como posso apoiar você em sua jornada.
                </p>

                <div className="bg-accent/50 p-4 rounded-lg">
                  <p className="text-sm text-accent-foreground">
                    <strong>Valor da consulta:</strong> R$ 180,00
                    <br />
                    <strong>Duração:</strong> 50 minutos
                    <br />
                    <strong>Modalidade:</strong> Presencial ou Online
                  </p>
                </div>
              </div>

              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                Agendar Primeira Consulta
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
