import heroImage from "../assets/hero.jpg";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <section className="h-[calc(100vh-64px)] flex justify-center items-center">
        <img
          src={heroImage}
          alt="Victor Koroma photography"
          className="max-h-full w-auto object-contain"
        />
      </section>  
    </main>
  );
}
