import { Link } from "react-router-dom";
import { Boardgame } from "./types";

export function ListItem({ game }: {game: Boardgame}) {
  return (
    <p><Link to={game.id.toString()}>{game.name}</Link></p>
  )
}
