import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Calendar, BookOpen, Award } from "lucide-react"

export function ActivitiesSection() {
  const activities = [
    {
      icon: GraduationCap,
      title: "級・段位認定",
      description:
        "技能に応じた級位・段位の認定を行い、けん玉技術の向上を支援しています。初心者から上級者まで、目標を持って取り組めます。",
    },
    {
      icon: Calendar,
      title: "大会・イベント開催",
      description:
        "全国各地で大会やイベントを開催。地域大会から全国大会、世界大会まで、様々なレベルの競技会を実施しています。",
    },
    {
      icon: BookOpen,
      title: "指導者育成",
      description: "けん玉の正しい技術と指導法を学ぶ指導者養成講座を開催。次世代への技術継承に力を入れています。",
    },
    {
      icon: Award,
      title: "普及活動",
      description:
        "学校や地域でのけん玉教室、デモンストレーション、体験会などを通じて、けん玉の魅力を広く伝えています。",
    },
  ]

  return (
    <section id="activities" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">協会の活動内容</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              全日本けん玉協会は、けん玉の普及と発展のため、
              <br className="hidden md:block" />
              様々な活動を展開しています。
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {activities.map((activity, index) => (
              <Card key={index} className="border-border/50 hover:shadow-lg transition-shadow">
                <CardContent className="p-8 space-y-4">
                  <div className="w-16 h-16 rounded-lg bg-accent/20 flex items-center justify-center">
                    <activity.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{activity.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{activity.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
