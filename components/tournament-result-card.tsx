import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Trophy, MapPin, Calendar } from "lucide-react"
import type { TournamentResult } from "@/types/tournament"

type TournamentResultCardProps = TournamentResult

export function TournamentResultCard({
  date,
  location,
  player1,
  player2,
  winner,
}: TournamentResultCardProps) {
  return (
    <Card className="p-6 hover:shadow-lg transition-shadow">
      <div className="flex flex-col md:flex-row items-center gap-6">
        {/* 日時・場所 */}
        <div className="flex-shrink-0 w-full md:w-48 space-y-2">
          <div className="flex items-center gap-2 text-sm">
            <Calendar className="w-4 h-4 text-primary" />
            <span className="font-medium">{date}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="w-4 h-4" />
            <span>{location}</span>
          </div>
        </div>

        {/* 対戦カード */}
        <div className="flex-1 flex items-center justify-center gap-4 md:gap-8">
          {/* プレイヤー1 */}
          <div className="flex flex-col items-center gap-2 flex-1">
            <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-4 border-background shadow-md">
              <Image
                src={player1.photo || "/placeholder.svg"}
                alt={player1.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="text-center">
              <p className="font-bold text-sm md:text-base">{player1.name}</p>
              <p
                className={`text-2xl md:text-3xl font-bold ${winner === "player1" ? "text-primary" : "text-muted-foreground"}`}
              >
                {player1.score}
              </p>
            </div>
            {winner === "player1" && <Trophy className="w-5 h-5 text-yellow-500 fill-yellow-500" />}
          </div>

          {/* VS */}
          <div className="text-xl md:text-2xl font-bold text-muted-foreground px-2">VS</div>

          {/* プレイヤー2 */}
          <div className="flex flex-col items-center gap-2 flex-1">
            <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-4 border-background shadow-md">
              <Image
                src={player2.photo || "/placeholder.svg"}
                alt={player2.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="text-center">
              <p className="font-bold text-sm md:text-base">{player2.name}</p>
              <p
                className={`text-2xl md:text-3xl font-bold ${winner === "player2" ? "text-primary" : "text-muted-foreground"}`}
              >
                {player2.score}
              </p>
            </div>
            {winner === "player2" && <Trophy className="w-5 h-5 text-yellow-500 fill-yellow-500" />}
          </div>
        </div>
      </div>
    </Card>
  )
}
