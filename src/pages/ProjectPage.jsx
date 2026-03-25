import { useParams } from "react-router-dom";
import { projectLinks } from "../data/navLinks";

export default function ProjectPage() {
  const { slug } = useParams();

  const project = projectLinks.find((project) => project.slug === slug);

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
        <p className="text-center text-neutral-500">
          Gallery images for {project.label} will go here.
        </p>
      </section>
    </main>
  );
}