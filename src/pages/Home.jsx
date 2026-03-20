import { Link } from "react-router-dom";
import { photos } from "../data/photos";

export default function Home() {
  const featuredPhoto = photos[0];

  return (
    <div className="space-y-16">
      <section className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
            Portrait • Event • Lifestyle
          </p>

          <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
            Capturing moments with warmth, style, and intention.
          </h1>

          <p className="max-w-xl text-lg leading-8 text-neutral-600">
            A modern photography portfolio built to showcase stories, people,
            and unforgettable moments through clean, timeless imagery.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/gallery"
              className="rounded-full bg-black px-6 py-3 text-white transition hover:opacity-90"
            >
              View Gallery
            </Link>

            <Link
              to="/contact"
              className="rounded-full border border-neutral-300 px-6 py-3 transition hover:bg-neutral-100"
            >
              Book a Session
            </Link>
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl">
          <img
            src={featuredPhoto.image}
            alt={featuredPhoto.title}
            className="h-[500px] w-full object-cover"
          />
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
              Featured Work
            </p>
            <h2 className="text-3xl font-semibold">Selected photography</h2>
          </div>

          <Link to="/gallery" className="text-sm underline underline-offset-4">
            See all work
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {photos.slice(0, 3).map((photo) => (
            <article key={photo.id} className="space-y-3">
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={photo.image}
                  alt={photo.title}
                  className="h-80 w-full object-cover transition duration-300 hover:scale-105"
                />
              </div>
              <div>
                <h3 className="text-lg font-medium">{photo.title}</h3>
                <p className="text-sm text-neutral-500">{photo.category}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}