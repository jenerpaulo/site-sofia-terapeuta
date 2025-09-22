export function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-semibold text-sm">AS</span>
              </div>
              <span className="font-medium text-foreground">Dra. Ana Silva</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Psicóloga Clínica dedicada ao seu bem-estar emocional através de uma abordagem humanizada e acolhedora.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium text-foreground">Links Úteis</h4>
            <div className="space-y-2">
              <a href="#sobre" className="block text-muted-foreground hover:text-foreground transition-colors text-sm">
                Sobre Mim
              </a>
              <a
                href="#servicos"
                className="block text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                Serviços
              </a>
              <a
                href="#contato"
                className="block text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                Contato
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium text-foreground">Informações</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>CRP 06/123456</p>
              <p>Vila Madalena, São Paulo - SP</p>
              <p>contato@draanasilva.com.br</p>
              <p>(11) 99999-9999</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">© 2024 Dra. Ana Silva. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
