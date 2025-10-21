import { Card, CardContent } from "@/components/ui/card"
import { Sparkles, Users, Trophy, Heart } from "lucide-react"
import Image from "next/image"

export function CharmSection() {
  const charms = [
    {
      icon: Sparkles,
      title: "技の奥深さ",
      description: "基本技から高度な技まで、無限の可能性を秘めた技の数々。練習を重ねるごとに新しい発見があります。",
    },
    {
      icon: Users,
      title: "世代を超えた交流",
      description: "子どもから大人まで、年齢を問わず楽しめるけん玉。世代を超えた交流が生まれます。",
    },
    {
      icon: Trophy,
      title: "競技としての魅力",
      description: "全国大会や世界大会も開催され、競技としても発展。目標を持って取り組めます。",
    },
    {
      icon: Heart,
      title: "心身の成長",
      description: "集中力、忍耐力、バランス感覚を養い、達成感を味わえる。心身ともに成長できます。",
    },
  ]

  return (
    <section id="charm" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">けん玉の魅力</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              けん玉は、シンプルながら奥深い日本の伝統的な技巧玩具です。
              <br className="hidden md:block" />
              その魅力は多岐にわたります。
            </p>
          </div>

          <div className="relative w-full max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl">
            <Image
              src="/images/children-playing-kendama.jpg"
              alt="楽しくけん玉で遊ぶ子どもたち"
              width={1200}
              height={800}
              className="w-full h-auto object-cover"
              priority
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {charms.map((charm, index) => (
              <Card key={index} className="border-border/50 hover:shadow-lg transition-shadow">
                <CardContent className="p-8 space-y-4">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                    <charm.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{charm.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{charm.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
