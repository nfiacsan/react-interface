import Button from "./Button";
import CategoryButton from "./CategoryButton";
import Login from "./Login";
import SearchBar from "./SearchBar";

export default function TopBar() {
  return (
    <div className="">
      <div className="flex gap-2 justify-between p-4">
        <SearchBar />
        <div className="flex flex-row">
          <Button
            mainText="Mon Compte"
            secondaryText="Connexion / Inscription"
            popup={<Login />}
          />
          <Button mainText="Panier" secondaryText="0€" />
        </div>
      </div>
      <div className="flex gap-2 justify-between p-4 px-24">
        <CategoryButton text="Saint-Valentin" />
        <CategoryButton text="Alimentation" />
        <CategoryButton text="Vin et spiritueux" />
        <CategoryButton text="Fleurs et plantes" />
        <CategoryButton text="Loisirs, sport et culture" />
        <CategoryButton text="Maison et bricolage" />
        <CategoryButton text="Mode" />
        <CategoryButton text="Beauté et santé" />
        <CategoryButton text="Services" />
      </div>
    </div>
  );
}
