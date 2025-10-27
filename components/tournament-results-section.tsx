import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Trophy, MapPin, Calendar } from "lucide-react"

export function TournamentResultsSection() {
  const results = [
    {
      date: "2024年12月15日",
      location: "東京都渋谷区",
      player1: {
        name: "田中 太郎",
        photo: "/images/player1.jpg",
        score: 95,
      },
      player2: {
        name: "佐藤 花子",
        photo: "/images/player2.jpg",
        score: 88,
      },
      winner: "player1",
    },
    {
      date: "2024年11月20日",
      location: "大阪府大阪市",
      player1: {
        name: "鈴木 一郎",
        photo: "/images/player3.jpg",
        score: 92,
      },
      player2: {
        name: "山田 次郎",
        photo: "/images/player4.jpg",
        score: 96,
      },
      winner: "player2",
    },
    {
      date: "2024年10月10日",
      location: "福岡県福岡市",
      player1: {
        name: "高橋 美咲",
        photo: "/images/player5.jpg",
        score: 89,
      },
      player2: {
        name: "伊藤 健太",
        photo: "/images/player6.jpg",
        score: 85,
      },
      winner: "player1",
    },
  ]

  return (
    <section id="tournament-results" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">直近の大会結果</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            全国各地で開催されたけん玉大会の最新結果をご紹介します
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-6">
          {results.map((result, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row items-center gap-6">
                {/* 日時・場所 */}
                <div className="flex-shrink-0 w-full md:w-48 space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span className="font-medium">{result.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>{result.location}</span>
                  </div>
                </div>

                {/* 対戦カード */}
                <div className="flex-1 flex items-center justify-center gap-4 md:gap-8">
                  {/* プレイヤー1 */}
                  <div className="flex flex-col items-center gap-2 flex-1">
                    <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-4 border-background shadow-md">
                      <Image
                        src={result.player1.photo || "/placeholder.svg"}
                        alt={result.player1.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="text-center">
                      <p className="font-bold text-sm md:text-base">{result.player1.name}</p>
                      <p
                        className={`text-2xl md:text-3xl font-bold ${result.winner === "player1" ? "text-primary" : "text-muted-foreground"}`}
                      >
                        {result.player1.score}
                      </p>
                    </div>
                    {result.winner === "player1" && <Trophy className="w-5 h-5 text-yellow-500 fill-yellow-500" />}
                  </div>

                  {/* VS */}
                  <div className="text-xl md:text-2xl font-bold text-muted-foreground px-2">VS</div>

                  {/* プレイヤー2 */}
                  <div className="flex flex-col items-center gap-2 flex-1">
                    <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-4 border-background shadow-md">
                      <Image
                        src={result.player2.photo || "/placeholder.svg"}
                        alt={result.player2.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="text-center">
                      <p className="font-bold text-sm md:text-base">{result.player2.name}</p>
                      <p
                        className={`text-2xl md:text-3xl font-bold ${result.winner === "player2" ? "text-primary" : "text-muted-foreground"}`}
                      >
                        {result.player2.score}
                      </p>
                    </div>
                    {result.winner === "player2" && <Trophy className="w-5 h-5 text-yellow-500 fill-yellow-500" />}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
