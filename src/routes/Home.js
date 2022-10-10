import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import ImageHero from "../assets/12.jpg";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg={ImageHero}
        title="Your Journey Your Story"
        text="Choose Your Favourite Destination"
        buttonText="Travel Plan"
        url="/"
        btnClass="show"
      />
    </>
  );
}

export default Home;
