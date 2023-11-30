import Nav from "../Components/Nav";
import Footer from "../Components/Sections/Footer";
import Hero from "../Components/Sections/Hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Nav />
      <Hero />
      <Footer/>
    </main>
  );
}
