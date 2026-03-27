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

const galleryImages = {
  "game-boy-color-monoliths": [
    GBCM1,
    GBCM2,
    GBM3,
    GBM4,
    GBM5,
    GBM6,
    GBM8,
    GBM9,
    GBM10,
    GBM11,
    GBM12,
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
              src={image}
              alt={`${project.label} ${index + 1}`}
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
            src={selectedImage}
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
