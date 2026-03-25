import { useParams } from "react-router-dom";
import { projectLinks } from "../data/navLinks";

import GBCM1 from "../assets/GBCMonoliths/1_GBCM_Tetris_Monolith_Victor_koroma.jpg";
import GBCM2 from "../assets/GBCMonoliths/2_GBCM_Pokemon_Yellow_Monolith_Victor_Koroma.jpg";
import GBM3 from "../assets/GBCMonoliths/3_GBCM_Metroid_Monolith_Victor_Koroma.jpg";

const galleryImages = {
  "game-boy-color-monoliths": [GBCM1, GBCM2, GBM3],
};

export default function ProjectPage() {
  const { slug } = useParams();

  const project = projectLinks.find((project) => project.slug === slug);
  const images = galleryImages[slug] || [];

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

      <section className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${project.label} ${index + 1}`}
            className="w-full h-auto object-contain"
          />
        ))}
      </section>
    </main>
  );
}
