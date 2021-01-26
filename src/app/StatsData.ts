// this is so god damn stupid
export interface IStatsData {
  rawData: object,
  stats: {
    basic: {
      watching: number,
      completed: number,
      dropped: number,
      on_hold: number,
      plan_to_watch: number
    }
  }
}
