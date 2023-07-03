import {useState} from 'react'
import GameBoard from "./GameBoard";

const GamePlay = (props) => {
    const [startGame, setStartGame] = useState(false);

    const showGamehandler = () => {
       setStartGame(prevState => !prevState)
      }
      return (
        <div>
            <button className="state--title" type="button" onClick={showGamehandler}>Start Game</button>
            <h2>{startGame ? "Game in play" : "Game not in play "}</h2>
            <GameBoard/>
        </div>
    )

}

export default GamePlay;
