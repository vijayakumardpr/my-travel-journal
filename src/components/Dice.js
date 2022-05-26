import React from "react"

export default function Dice(props) {
  const styles = {
    backgroundColor: props.isHeld ? "#59E391" : "#fff",
  }
  return (
    <div style={styles} className="die" onClick={props.roll}>
      <h2>{props.value}</h2>
    </div>
  )
}
