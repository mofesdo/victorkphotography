import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="relative min-h-screen bg-white text-neutral-900">
      <main className="w-full">
        <Outlet />
      </main>

      <Navbar />

      <Footer />
    </div>
  );
}
