import { useParams } from "react-router-dom";
import { projectLinks } from "../data/navLinks";
import { useState } from "react";

import GBCM1 from "../assets/GBCMonoliths/1_GBCM_Tetris_Monolith_Victor_koroma.jpg";
import GBCM2 from "../assets/GBCMonoliths/2_GBCM_Pokemon_Yellow_Monolith_Victor_Koroma.jpg";
import GBM3 from "../assets/GBCMonoliths/3_GBCM_Metroid_Monolith_Victor_Koroma.jpg";
import GBM4 from "../assets/GBCMonoliths/4_GBCM_Mortal_Kombat_Monolith_Victor_Koroma copy.jpg";
import GBM5 from "../assets/GBCMonoliths/5_GBCM_Pokemon_Red_Monolith_Victor_Koroma.jpg";
import GBM6 from "../assets/GBCMonoliths/6_GBCM_Joker_Monolith_Victor_Koroma.jpg";
import GBM8 from "../assets/GBCMonoliths/8_GBCM_Zelda_Monolith_Victor_Koroma.jpg";
import GBM9 from "../assets/GBCMonoliths/9_GBCM_Installation_View.jpg";
import GBM10 from "../assets/GBCMonoliths/10_GBCM_Installation_View.jpeg";
import GBM11 from "../assets/GBCMonoliths/11_Victor_Koroma_Pokemon_Monolith.jpeg";
import GBM12 from "../assets/GBCMonoliths/12_Victor_Koroma_Metroid_Monolith.jpeg";

import GBCM1thumb from "../assets/GBCMonoliths/thumbnails/1_GBCM_Tetris_Monolith_Victor_koroma.jpg";
import GBCM2thumb from "../assets/GBCMonoliths/thumbnails/2_GBCM_Pokemon_Yellow_Monolith_Victor_Koroma.jpg";
import GBM3thumb from "../assets/GBCMonoliths/thumbnails/3_GBCM_Metroid_Monolith_Victor_Koroma.jpg";
import GBM4thumb from "../assets/GBCMonoliths/thumbnails/4_GBCM_Mortal_Kombat_Monolith_Victor_Koroma copy.jpg";
import GBM5thumb from "../assets/GBCMonoliths/thumbnails/5_GBCM_Pokemon_Red_Monolith_Victor_Koroma.jpg";
import GBM6thumb from "../assets/GBCMonoliths/thumbnails/6_GBCM_Joker_Monolith_Victor_Koroma.jpg";
import GBM8thumb from "../assets/GBCMonoliths/thumbnails/8_GBCM_Zelda_Monolith_Victor_Koroma.jpg";
import GBM9thumb from "../assets/GBCMonoliths/thumbnails/9_GBCM_Installation_View.jpg";
import GBM10thumb from "../assets/GBCMonoliths/thumbnails/10_GBCM_Installation_View.jpeg";
import GBM11thumb from "../assets/GBCMonoliths/thumbnails/11_Victor_Koroma_Pokemon_Monolith.jpeg";
import GBM12thumb from "../assets/GBCMonoliths/thumbnails/12_Victor_Koroma_Metroid_Monolith.jpeg";

const galleryImages = {
  "game-boy-color-monoliths": [
    { src: GBCM1, thumbnail: GBCM1thumb },
    { src: GBCM2, thumbnail: GBCM2thumb },
    { src: GBM3, thumbnail: GBM3thumb },
    { src: GBM4, thumbnail: GBM4thumb },
    { src: GBM5, thumbnail: GBM5thumb },
    { src: GBM6, thumbnail: GBM6thumb },
    { src: GBM8, thumbnail: GBM8thumb },
    { src: GBM9, thumbnail: GBM9thumb },
    { src: GBM10, thumbnail: GBM10thumb },
    { src: GBM11, thumbnail: GBM11thumb },
    { src: GBM12, thumbnail: GBM12thumb },
  ],
};

export default function ProjectPage() {
  const { slug } = useParams();

  const project = projectLinks.find((project) => project.slug === slug);
  const images = galleryImages[slug] || [];

  const [selectedIndex, setSelectedIndex] = useState(null);

  const selectedImage = selectedIndex !== null ? images[selectedIndex] : null;

  if (!project) {
    return (
      <main className="min-h-screen px-[50px] pb-24 pt-10">
        <h1>Project not found</h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen px-[50px] pb-24 pt-10">
      <h1 className="mb-10 text-center text-sm font-light uppercase tracking-[0.35em]">
        {project.label}
      </h1>

      <section className="mx-auto w-full max-w-6xl px-6 md:px-10">
        <div className="columns-1 gap-6 md:columns-2 lg:columns-4">
          {images.map((image, index) => (
            <img
              key={index}
              src={image.thumbnail}
              alt={`${project.label} ${index + 1}`}
              loading="lazy"
              onClick={() => setSelectedIndex(index)}
              className="mb-6 h-72 w-full cursor-pointer object-cover"
            />
          ))}
        </div>
      </section>
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
            src={selectedImage.src}
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
