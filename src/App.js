import React from "react"
import Dice from "./components/Dice"
import Confetti from "react-confetti"

export default function App() {
  const [dice, setDice] = React.useState(randomNumbers())
  const [tenzies, setTenzies] = React.useState(false)

  React.useEffect(() => {
    const allHeld = dice.every((die) => die.isHeld)
    const firstValue = dice[0].value
    const allSameValue = dice.every((die) => die.value === firstValue)
    if (allHeld && allSameValue) {
      setTenzies(true)
      console.log("You Won!")
    }
  }, [dice])

  function randomNumbers() {
    let numbers = []
    for (let i = 0; i < 10; i++) {
      numbers.push({
        id: i + 1,
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
      })
    }
    return numbers
  }

  function rotateDice() {
    if (!tenzies) {
      setDice((prevDice) => {
        return prevDice.map((die, i) => {
          return die.isHeld
            ? die
            : {
                id: i + 1,
                value: Math.ceil(Math.random() * 6),
                isHeld: false,
              }
        })
      })
    } else {
      setTenzies(false)
      setDice(randomNumbers())
    }
  }

  function holdDice(id) {
    setDice((prevDice) =>
      prevDice.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die
      })
    )
  }

  const diceElement = dice.map((die) => (
    <Dice
      key={die.id}
      value={die.value}
      isHeld={die.isHeld}
      roll={() => holdDice(die.id)}
    />
  ))
  return (
    <main>
      {tenzies && <Confetti />}
      <div>
        <h1 className="title">Tenzies</h1>
        <p className="instructions">
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </p>
      </div>
      <div className="dice-container">{diceElement}</div>
      <button onClick={rotateDice}>{tenzies ? "New Game" : "Roll"}</button>
    </main>
  )
}
