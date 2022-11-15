import "./App.css";
import Cards from "./Components/Cards/Card";
import GridImages from "./Components/HeroSection/GridImages";
import Navbar from "./Components/Navbar/Navbar";
import myArray from "./data";
function App() {
  const myArrayMap = myArray.map((items) => {
    return (
      <Cards
        key={items.id}
        img={items.coverImg}
        rating={items.stats.rating}
        ratingAmounts={items.stats.reviewCount}
        location={items.location}
        description={items.description}
        price={items.price}
        openSpots={items.openSpots}
      />
    );
  });

  return (
    <>
      <Navbar />
      <GridImages />
      <div className="container">{myArrayMap}</div>
    </>
  );
}

export default App;
