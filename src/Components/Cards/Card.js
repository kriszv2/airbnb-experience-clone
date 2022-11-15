import "./Card.css";

export default function Cards(props) {
  return (
    <div className="card">
      {props.openSpots === 0 && <div className="card--badge">SOLD OUT</div>}
      <img src={props.img} alt="sportsman" />
      <div className="card-stats">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Star_icon_stylized.svg/2153px-Star_icon_stylized.svg.png"
          alt="star icon"
        />
        <span>{props.rating}</span>
        <span className="grey"> &nbsp;({props.ratingAmounts})</span>
        <span className="grey country">{props.location}</span>
      </div>
      <p>{props.description}</p>
      <p>From ${props.price} / person</p>
    </div>
  );
}
