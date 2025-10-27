import { TournamentResultCard } from "@/components/tournament-result-card"
import type { TournamentResult } from "@/types/tournament"

async function getTournamentResults(): Promise<{
  data: TournamentResult[]
  error: boolean
}> {
  try {
    const response = await fetch("http://localhost:3001/api/tournament-results", {
      // データの鮮度に応じて調整してください
      next: { revalidate: 60 }, // 60秒ごとに再検証
    })

    if (!response.ok) {
      throw new Error("Failed to fetch tournament results")
    }

    const json = await response.json()
    return { data: json.results || [], error: false }
  } catch (error) {
    console.error("Error fetching tournament results:", error)
    return { data: [], error: true }
  }
}

export async function TournamentResultsSection() {
  const { data: results, error } = await getTournamentResults()

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
          {error ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">大会結果を取得できませんでした。</p>
            </div>
          ) : results.length > 0 ? (
            results.map((result, index) => (
              <TournamentResultCard
                key={index}
                date={result.date}
                location={result.location}
                player1={result.player1}
                player2={result.player2}
                winner={result.winner}
              />
            ))
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">現在、表示できる大会結果がありません。</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
