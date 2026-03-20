import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Navbar />
      <main className="mx-auto w-full max-w-7xl px-6 py-10 md:px-10 pb-24">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
