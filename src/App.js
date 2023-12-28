import React, { useState } from 'react'
import Header from './Components/header'
import Box from './Components/box'
import Modal from'./Components/modal'
import StartingPlayer from './Components/startingPlayer'
import PlayerTurn from './Components/playerTurn'
import SecondPlayer from './Components/secondPlayer'
import Footer from './Components/footer'
import './App.css'


const App = () => {

  let boxArray = []
  for (let i=0; i < 9; i++){
    boxArray.push(null)
  }

  const [board, setBoard] = useState(boxArray)
  const [selectedEmoji, setSelectedEmoji] = useState(null)
  const [winner, setWinner] = useState(null);
  const [showModal, setShowModal] = useState(false); 
  const [startingPlayer, setStartingPlayer] = useState(true)
  const [firstSelectedEmoji, setFirstSelectedEmoji] = useState(null)
  const [emojiArray, setEmojiArray] = useState(['❌','⭕️', '😱', '💎', '✅','👽','🤷🏽‍♂️'])
  const [secondPlayer, setSecondPlayer] = useState(true)
  const [secondSelectedEmoji, setSecondSelectedEmoji] = useState(null)
  const [playerTurn, setPlayerTurn] = useState(null)
  
  const handleBoxClick = (index) => {
    if (selectedEmoji && board[index] === null ){ 
      const newBoard = [...board];
      newBoard[index] = selectedEmoji;
      setBoard(newBoard);

      if (selectedEmoji === firstSelectedEmoji){
        setPlayerTurn(secondSelectedEmoji)
        setSelectedEmoji(secondSelectedEmoji)
      }else{
        setPlayerTurn(firstSelectedEmoji)
        setSelectedEmoji(firstSelectedEmoji)
      }
      
      const winner = calculateWinner(newBoard);
      if (winner) {
        setWinner(winner);
        setShowModal(true);
      } else if (isBoardFull(newBoard)) {
        setShowModal(true);
      }
    }
  };

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  const isBoardFull = (squares) => {
    return squares.every(square => square !== null)
  }

  // const startNewGame = () => {
  //   setBoard(boxArray);
  //   setSelectedEmoji(null)
  //   setWinner(null)
  //   setShowModal(false)
  //   setPlayerTurn(null)
  //   setStartingPlayer(true)
  //   setSecondPlayer(true)
  //   setFirstSelectedEmoji(null)
  //   setSecondSelectedEmoji(null)
  //   setEmojiArray(['❌','⭕️', '😱', '💎', '✅','👽','🤷🏽‍♂️'])
  // }

  const resetGame = () => {
    setBoard(boxArray);
    setSelectedEmoji(null);
    setWinner(null);
    setShowModal(false);
    setPlayerTurn(null)
    setStartingPlayer(true)
    setSecondPlayer(true)
    setFirstSelectedEmoji(null)
    setSecondSelectedEmoji(null)
    setEmojiArray(['❌','⭕️', '😱', '💎', '✅','👽','🤷🏽‍♂️'])
    
  };

  
  const startGame =(emoji) => {
    setStartingPlayer(false)
    setPlayerTurn(emoji)
    setFirstSelectedEmoji(emoji)
    
    let newEmojiArray = null
    if (emojiArray.includes(emoji)){
      newEmojiArray = emojiArray.filter(item => item !== emoji)
    }
    setEmojiArray(newEmojiArray)
    setSelectedEmoji(emoji)
  }

  const beginGame = (emoji) => {
    setSecondPlayer(false)
    setSecondSelectedEmoji(emoji)
  }
 
  return (
    
    <> 
    {secondPlayer && (< SecondPlayer onClick={beginGame} array={emojiArray} />)}
    {startingPlayer && (<StartingPlayer onClick={startGame} array={emojiArray}/>)}
    {showModal && (< Modal winner={winner} onNewGame={resetGame} />)}
    
    <Header />
  
    <div className='board'>
    
      {board.map((value, index) => {
        return (
          <Box 
            key={index} 
            value={value}
            onClick={() => handleBoxClick(index)}
          />
        )
      })}
    </div>

    <br/>

    <div className="current-player">  
      <PlayerTurn emoji={playerTurn}/>
    </div>

    <br/>

    <br/>

    <div className="reset">
      <button className="reset-button" onClick={resetGame}> Click to reset game </button>
    </div>

    <br/>
    <Footer />
    </>
  )

}
export default App

