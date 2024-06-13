import { useQuery } from "@tanstack/react-query"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Boardgame } from "./types";

export function Details() {
  // const [game, setGame] = useState<Boardgame | null>(null);
  const { id } = useParams();
  const {data: game, isPending } = useQuery({
    queryKey: ['boardgames', id],
    queryFn: () => fetch(`http://localhost:3070/boardgames/${id}`).then(res => res.json())
  });

  // useEffect(() => {
  //   async function getGame(id: string) {
  //     const data = await fetch(`http://localhost:3070/boardgames/${id}`).then(res => res.json())
  //     setGame(data);
  //   } 
  //   if(id) {
  //     getGame(id);
  //   }
  // }, [id]);

  if(isPending) {
    return <strong>Loading ...</strong>
  }

  return (
    <>
      <h1>{game.name}</h1>
      <img width="100%" src={game.image} alt={`Poster for "${game.name}"`}  />
      <p>
        Recommended number of players: {game.numberOfPlayers.recommended}
      </p>
    </>
  );
}
