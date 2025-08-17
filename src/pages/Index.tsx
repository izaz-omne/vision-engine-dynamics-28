import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import Industries from "@/components/Industries";
import Work from "@/components/Work";
import Community from "@/components/Community";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Products />
        <Industries />
        <Work />
        <Community />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
