export default function SlideItem({
  image,
  name,
  shop,
  price,
  shipping,
}: {
  image: string;
  name: string;
  shop: string;
  price: number;
  shipping?: boolean;
}) {
  return (
    <div className="flex flex-col w-max h-max">
      <img className="w-64 h-64 rounded-sm" src={image} />
      <div className="flex flex-col gap-1">
        <a href="" className="text-xl font-bold text-primary-dark">
          {name}
        </a>
        <p className="font-light">{shop}</p>
        <p className="font-semibold">{price}€</p>
        {shipping && (
          <span className="py-1 px-2 text-xs rounded-full w-fit text-secondary-green-dark bg-secondary-green-light">
            Livraison gratuite
          </span>
        )}
      </div>
    </div>
  );
}
