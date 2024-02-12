import Gallery from "./Gallery";
import SlideItem from "./SlideItem";
import SlideShow from "./SlideShow";
import TopBar from "./TopBar";

export default function App() {
  function randomItems() {
    return [0, 0, 0, 0, 0, 0, 0, 0, 0, 0].map((_, index) => (
      <SlideItem
        key={index}
        image="https://via.placeholder.com/150"
        name="Nom du produit"
        shop="Nom de la boutique"
        price={Math.floor(Math.random() * 100)}
        shipping={Math.floor(Math.random() * 100) % 2 ? true : false}
      />
    ));
  }

  return (
    <div className="App">
      <div className="container mx-auto">
        <TopBar />
        <Gallery
          header="Sélections"
          description="Nos produits coup de cœur, tout droit venus des commerçants locaux"
        />
        <SlideShow
          header="Meilleures ventes"
          description="Découvrez les produits les plus populaires"
        >
          {randomItems()}
        </SlideShow>
        <SlideShow
          header=" Nouveautés"
          description=" Découvrez les dernières pépites proposées par vos commerçants. "
        >
          {randomItems()}
        </SlideShow>
      </div>
    </div>
  );
}
