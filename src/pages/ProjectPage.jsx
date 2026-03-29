import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { client, urlFor } from "../lib/sanity";

export default function ProjectGallery() {
  const { slug } = useParams();

  const [gallery, setGallery] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchGallery() {
      setLoading(true);

      const data = await client.fetch(
        `*[_type == "gallery" && slug.current == $slug][0]{
          title,
          slug,
          images
        }`,
        { slug },
      );

      setGallery(data);
      setSelectedIndex(null);
      setLoading(false);
    }

    fetchGallery();
  }, [slug]);

  const images = gallery?.images || [];
  const selectedImage = selectedIndex !== null ? images[selectedIndex] : null;

  if (loading) {
    return (
      <main className="min-h-screen px-[50px] pb-24 pt-10">
        <p className="text-center text-sm text-neutral-500">Loading...</p>
      </main>
    );
  }

  if (!gallery) {
    return (
      <main className="min-h-screen px-[50px] pb-24 pt-10">
        <h1 className="text-center text-sm uppercase tracking-[0.35em]">
          Gallery not found
        </h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen px-[50px] pb-24 pt-10">
      <h1 className="mb-10 text-center text-sm font-light uppercase tracking-[0.35em]">
        {gallery.title}
      </h1>

      {/* 🟡 Empty state */}
      {images.length === 0 && (
        <p className="text-center text-sm text-neutral-500">
          Images coming soon.
        </p>
      )}

      {/* 🟢 Gallery grid */}
      {images.length > 0 && (
        <section className="mx-auto w-full max-w-6xl px-6 md:px-10">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {images.map((image, index) => (
              <img
                key={image._key || index}
                src={urlFor(image).width(600).height(450).fit("crop").url()}
                alt={`${gallery.title} ${index + 1}`}
                loading="lazy"
                onClick={() => setSelectedIndex(index)}
                className="h-72 w-full cursor-pointer object-cover"
              />
            ))}
          </div>
        </section>
      )}

      {selectedImage && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80">
          <button
            onClick={() => setSelectedIndex(null)}
            className="absolute right-6 top-6 text-3xl text-white"
          >
            ×
          </button>

          <button
            onClick={() =>
              setSelectedIndex(
                (selectedIndex - 1 + images.length) % images.length,
              )
            }
            className="absolute left-6 text-4xl text-white"
          >
            -
          </button>

          <img
            src={urlFor(selectedImage).width(1800).url()}
            alt="Selected gallery image"
            className="max-h-[85vh] max-w-[85vw] object-contain"
          />

          <button
            onClick={() =>
              setSelectedIndex((selectedIndex + 1) % images.length)
            }
            className="absolute right-6 text-4xl text-white"
          >
            +
          </button>
        </div>
      )}
    </main>
  );
}
