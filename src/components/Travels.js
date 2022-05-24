import React from "react"

export default function Travels(props) {
  // console.log(props)
  return (
    <main>
      <div className="cards">
        <div className="travel-image">
          <img src={props.imageUrl} alt="image" />
        </div>
        <div className="travel-details">
          <p className="country">
            <img src="./images/location.png" alt="map" />
            {props.location}
            <a href={props.googleMapsUrl}>View on Google Maps</a>
          </p>
          <h2 className="place-name">{props.title}</h2>
          <p className="dates">
            {props.startDate} - {props.endDate}
          </p>
          <p className="description">{props.description}</p>
        </div>
      </div>
    </main>
  )
}
