// Page
import Header from "./components/Header";
import Hero from "./components/Hero/Hero";

// Header
import Navigation from "./components/Navigation/Navigation";
import Page from "./components/Page";

// Main
import ExploreMore from "./components/ExploreMore/ExploreMore";
import FrequentTraveler from "./components/FrequentTraveler";
import Main from "./components/Main";
import News from "./components/News/News";
import Services from "./components/Services/Services";
import Steps from "./components/Steps/Steps";
import Testimonials from "./components/Testimonials/Testimonials";

// Footer
import Footer from "./components/Footer";

function App() {
  return (
    <Page>
      <Header>
        <Navigation />
        <Hero />
      </Header>

      <Main>
        <Steps />
        <Services />
        <News />
        <ExploreMore />
        <FrequentTraveler />
        <Testimonials />
      </Main>

      <Footer />
    </Page>
  );
}

export default App;
