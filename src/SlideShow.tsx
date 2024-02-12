export default function SlideShow({
  header,
  description,
  children,
}: {
  header: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <div className="container my-16">
      <h1 className="text-3xl font-bold text-primary-dark">{header}</h1>
      <p className="mb-4 text-xl font-light">{description}</p>
      <div className="container inline-grid overflow-x-auto grid-rows-1 grid-flow-col gap-4">
        {children}
      </div>
    </div>
  );
}
