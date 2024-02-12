function GalleryItem() {
  return (
    <img
      className="col-span-2 rounded-lg"
      src="https://via.placeholder.com/400x200"
      alt="placeholder"
    />
  );
}

export default function Gallery({
  header,
  description,
}: {
  header: string;
  description: string;
}) {
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold text-primary-dark">{header}</h1>
      <p className="mb-4 text-xl font-light">{description}</p>
      <div className="grid grid-cols-6 grid-rows-2 gap-4">
        <GalleryItem />
        <GalleryItem />
        <GalleryItem />
        <GalleryItem />
        <GalleryItem />
        <GalleryItem />
      </div>
    </div>
  );
}
