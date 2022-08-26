import {useEffect, useState} from "react"
import Game from "./Game"
import playUpFetch from "./services/fetch"
function GameList({currentUser, setCurrentUser}) {
    const [games, setGames] = useState([])

    useEffect(() => {
        playUpFetch("/games")
        .then(resp => resp.json())
        .then(setGames)
    }, []) 

    console.log(games)

  
return (
<div><Game currentUser={currentUser} setCurrentUser={setCurrentUser} setGames={setGames} games={games}/></div>
)
}

export default GameList;