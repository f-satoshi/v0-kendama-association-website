export function HistorySection() {
  const timeline = [
    {
      year: "江戸時代",
      title: "けん玉の起源",
      description: "フランスから伝わった「ビルボケ」が日本に伝来し、独自の発展を遂げました。",
    },
    {
      year: "大正時代",
      title: "現代けん玉の誕生",
      description: "広島県の江草濱次氏により、現在の形に近い「日月ボール」が考案されました。",
    },
    {
      year: "1975年",
      title: "全日本けん玉協会設立",
      description: "けん玉の普及と発展を目的として、全日本けん玉協会が設立されました。",
    },
    {
      year: "現代",
      title: "世界への広がり",
      description: "けん玉は世界中に広まり、国際的な競技としても認知されるようになりました。",
    },
  ]

  return (
    <section id="history" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">けん玉の歴史</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              長い歴史を持つけん玉は、時代とともに進化を遂げてきました。
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex items-start gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 -ml-2 rounded-full bg-primary border-4 border-background" />

                  <div className="flex-1 pl-20 md:pl-0">
                    <div
                      className={`bg-card border border-border rounded-lg p-6 shadow-sm ${
                        index % 2 === 0 ? "md:mr-12" : "md:ml-12"
                      }`}
                    >
                      <div className="space-y-2">
                        <div className="text-sm font-bold text-primary">{item.year}</div>
                        <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
