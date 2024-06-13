export interface Boardgame {
  id:              number;
  bggId:           number;
  userId:          number;
  name:            string;
  thumbnail:       string;
  image:           string;
  alternateNames:  string[];
  description:     string;
  numberOfPlayers: NumberOfPlayers;
  playtime:        Playtime;
  minAge:          number;
  yearpublished:   number;
  rank:            number;
  bayesaverage:    number;
  average:         number;
  usersrated:      number;
  otherRanks:      OtherRanks;
}

export interface NumberOfPlayers {
  min:         number;
  max:         number;
  recommended: number;
  best:        number;
}

export interface OtherRanks {
  strategygames: number;
}

export interface Playtime {
  avg: number;
  min: number;
  max: number;
}
