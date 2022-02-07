export type TeamType = {
  abbreviation: string
  city: string
  conference?: string
  id: number
  name: string
};

export type TypePlayers = {
  first_name: string
  height_feet: null
  height_inches: null
  id: number
  last_name: string
  position: string
  team: PlayerTeamType
  weight_pounds: null
}

export type PlayerTeamType = {
  abbreviation: string
  city: string
  conference: string
  division: string
  full_name: string
  id: number
  name: string
}
