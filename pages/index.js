import AboutMe from "../components/AboutMe";
import Banner from "../components/Banner";
import ContactSection from "../components/ContactSection";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <>
      {/* <Banner /> */}
      <Hero />
      <section>
        <AboutMe />
      </section>

      <section style={{ background: "maroon", height: "400px", width: "100%" }}>
        From the blog
      </section>
      <section>
        <ContactSection />
      </section>
    </>
  );
};

export default Home;
