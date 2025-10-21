export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-foreground text-balance">全日本けん玉協会</h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-serif">Japan Kendama Association</p>
          </div>

          <div className="flex justify-center">
            <img src="/traditional-japanese-kendama-toy.jpg" alt="けん玉" className="w-64 h-auto md:w-80 drop-shadow-2xl" />
          </div>

          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed">
            日本の伝統的な技巧玩具「けん玉」の普及と発展を目指し、
            <br className="hidden md:block" />
            全国で活動を展開しています
          </p>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-foreground/30 rounded-full" />
        </div>
      </div>
    </section>
  )
}
