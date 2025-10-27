export interface Player {
  name: string
  photo: string
  score: number
}

export interface TournamentResult {
  date: string
  location: string
  player1: Player
  player2: Player
  winner: "player1" | "player2"
}
