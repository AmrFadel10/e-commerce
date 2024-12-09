import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { useSelector } from "react-redux";
import { useEffect } from "react";

export default function Layout() {
  const { isLoading } = useSelector((state) => state.user);

  return (
    <>
      {isLoading ? (
        <div className="text-4xl">Loading...</div>
      ) : (
        <main className="min-h-screen bg-zinc-50">
          <Header />
          <section className="container mx-auto px-2">
            <Outlet />
          </section>
          <Footer />
        </main>
      )}
    </>
  );
}
