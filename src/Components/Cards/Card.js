import "./Card.css";

export default function Cards() {
  return (
    <div className="card">
      <img src="https://picsum.photos/250/400" alt="sportsman" />
      <div className="card-stats">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Star_icon_stylized.svg/2153px-Star_icon_stylized.svg.png"
          alt="star icon"
        />
        <span>5.0</span>
        <span className="grey">(6) </span>
        <span className="grey country">USA</span>
      </div>
      <p>Life lessons with Kate Zaferes</p>
      <p>
        <b>From $136 </b>/ person
      </p>
    </div>
  );
}
