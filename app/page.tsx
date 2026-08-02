import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Partners from "@/components/Partners";
import Gallery from "@/components/Gallery";
import Process from "@/components/Process";
import BookingCta from "@/components/BookingCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Partners />
      <Services />
      <Process />
      <Gallery />
      <BookingCta />
      <Footer />
    </main>
  );
}
