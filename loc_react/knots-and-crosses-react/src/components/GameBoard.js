import React from 'react'
import Cell from './Cell';
import cells from './Cells';
import style from './Style.module.css'

// note here need to be able to select the spaces. The css needs setting/connecting for this

const GameBoard = (props) => {
    const [gameBoardSpace, setGameBoardSpace] = React.useState(["-", "-", "-", "-", "-", "-", "-", "-", "-"]);
    const [score, setScore] = React.useState("");
    const [winningPatterns, setWinningPatterns] = React.useState([
        [0, 4, 8],
        [0, 1, 2],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [2, 4, 6],
        [3, 4, 5],
        [6, 7, 8]
    ]);

    const cellElements = cells.map(cell => (
        <Cell
            key={cell.id}
            on={cell.on}
            // toggle={() => toggle(cell.id)}
        >[ ]</Cell>
    ))

    return (
        <div className={style.gameGrid}>
            {cellElements}
        </div>
    )
}

export default GameBoard;
