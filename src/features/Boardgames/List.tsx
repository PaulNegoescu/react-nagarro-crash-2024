import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { Boardgame } from "./types";
import { ListItem } from "./ListItem";

export function List() {
  const { data: games, isPending, isError } = useQuery({
    queryKey: ['boardgames', 'all'],
    queryFn: () => fetch('http://localhost:3070/boardgames').then((res) => res.json()) as Promise<Boardgame[]>,
    staleTime: 2 * 60 * 1000,
  });
  // const [games, setGames] = useState<Record<string, string>[] | null>(null);

  // useEffect(() => {
  //   let shouldIgnore = false;

  //   async function getGames() {
  //     const data = await fetch('http://localhost:3070/boardgames')
  //       .then((res) => res.json())
  //     if(!shouldIgnore) {
  //       setGames(data);
  //     }
  //   }
  //   getGames();

  //   return () => {
  //     shouldIgnore = true;
  //   }
  // }, []);

  useEffect(() => {
    window.addEventListener('resize', console.log);
    return () => {
      window.removeEventListener('resize', console.log);
    }
  }, []);

  if(isError) {
    return <strong>Ooops! An error ocurred please try again later!</strong>;
  }

  if(isPending) {
    return <strong>Loading ...</strong>;
  }

  return (
    <>
      <h1>Boardgames</h1>
      {games.map((boardgame) => <ListItem key={boardgame.id} game={boardgame} />)}
    </>
  )
}
