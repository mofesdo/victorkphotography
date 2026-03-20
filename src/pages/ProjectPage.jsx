import { useParams } from "react-router-dom";

export default function ProjectPage() {
  const { slug } = useParams();

  return (
    <div className="space-y-4">
      <h1 className="text-3xl">Project Page</h1>
      <p className="text-neutral-600">Current slug: {slug}</p>
    </div>
  );
}