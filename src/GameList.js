import {useEffect, useState} from "react"
import Game from "./Game"
function GameList() {
    const [games, setGames] = useState([])

    useEffect(() => {
        fetch("/games")
        .then(resp => resp.json())
        .then(setGames)
    }, []) 

    console.log(games)

  
return (
<div><Game setGames={setGames} games={games}/></div>
)
}

export default GameList;