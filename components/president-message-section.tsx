import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

export function PresidentMessageSection() {
  return (
    <section id="president" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">会長からのメッセージ</h2>
          </div>

          <Card className="border-2 border-primary/20">
            <CardContent className="p-8 md:p-12 space-y-8">
              <div className="flex justify-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <img src="/professional-japanese-person-portrait.jpg" alt="会長" className="w-28 h-28 rounded-full object-cover" />
                </div>
              </div>

              <div className="space-y-6">
                <Quote className="w-12 h-12 text-primary/30" />

                <div className="space-y-4 text-foreground/90 leading-relaxed">
                  <p className="text-lg">
                    けん玉は、日本が世界に誇る伝統的な技巧玩具です。一見シンプルな構造ながら、その奥深さは計り知れません。
                  </p>

                  <p className="text-lg">
                    技を磨く過程で培われる集中力、忍耐力、そして達成感。これらは、けん玉を通じて得られる貴重な財産です。また、年齢や国籍を超えて楽しめるけん玉は、人と人とをつなぐ素晴らしいコミュニケーションツールでもあります。
                  </p>

                  <p className="text-lg">
                    全日本けん玉協会は、この素晴らしいけん玉文化を次世代に継承し、さらに発展させていくことを使命としています。皆様と共に、けん玉の新しい可能性を切り拓いていきたいと考えております。
                  </p>
                </div>

                <div className="pt-6 border-t border-border">
                  <p className="text-right text-foreground font-serif">
                    <span className="text-sm text-muted-foreground">全日本けん玉協会</span>
                    <br />
                    <span className="text-xl font-bold">会長 山田 太郎</span>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
