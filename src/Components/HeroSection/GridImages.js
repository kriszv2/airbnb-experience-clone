import "./GridImages.css";

export default function GridImages() {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td className="fr">
              <div className="grid-images">
                <img src="https://picsum.photos/200/250" alt="lorem picsum" />
              </div>
              <div className="grid-images">
                <img src="https://picsum.photos/200/200" alt="lorem picsum" />
              </div>
            </td>
            <td className="sr">
              <div className="grid-images">
                <img src="https://picsum.photos/200/150" alt="lorem picsum" />
              </div>
              <div className="grid-images">
                <img src="https://picsum.photos/200/250" alt="lorem picsum" />
              </div>
            </td>
            <td className="tr">
              <div className="grid-images">
                <img src="https://picsum.photos/200/190" alt="lorem picsum" />
              </div>
              <div className="grid-images">
                <img src="https://picsum.photos/200/280" alt="lorem picsum" />
              </div>
            </td>
            <td className="for">
              <div className="grid-images">
                <img src="https://picsum.photos/200/120" alt="lorem picsum" />
              </div>
              <div className="grid-images">
                <img src="https://picsum.photos/200/200" alt="lorem picsum" />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="hero-sec">
        <h1>Online experiences</h1>
        <p>
          Join unique interactive led by one-of-a-kind hosts-all without leaving
          home.
        </p>
      </div>
    </div>
  );
}
