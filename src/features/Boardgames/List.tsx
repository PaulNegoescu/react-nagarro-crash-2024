import { useEffect, useState } from "react";

export function List() {
  const [games, setGames] = useState<Record<string, string>[] | null>(null);

  useEffect(() => {
    async function getGames() {
      const data = await fetch('http://localhost:3070/boardgames')
        .then((res) => res.json())
      setGames(data);
    }
    getGames();
  }, []);

  if(!games) {
    return <strong>Loading ...</strong>;
  }

  return (
    <>
      <h1>Boardgames</h1>
      {games.map((game) => <p>{game.name}</p>)}
    </>
  )
}
