import { photos } from "../data/photos";

export default function Gallery() {
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
          Portfolio
        </p>
        <h1 className="text-4xl font-semibold md:text-5xl">Gallery</h1>
        <p className="max-w-2xl text-neutral-600">
          A collection of portrait, lifestyle, and event photography presented
          in a clean and modern grid.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {photos.map((photo) => (
          <article key={photo.id} className="group space-y-3">
            <div className="overflow-hidden rounded-2xl">
              <img
                src={photo.image}
                alt={photo.title}
                className="h-80 w-full object-cover transition duration-300 group-hover:scale-105"
              />
            </div>
            <div>
              <h2 className="text-lg font-medium">{photo.title}</h2>
              <p className="text-sm text-neutral-500">{photo.category}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}