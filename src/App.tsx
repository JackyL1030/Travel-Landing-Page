// Page
import Header from "./components/Header";
import Hero from "./components/Hero/Hero";

// Header
import Navigation from "./components/Navigation/Navigation";
import Page from "./components/Page";

// Main
import Main from "./components/Main";
import News from "./components/News/News";
import Services from "./components/Services/Services";
import Steps from "./components/Steps/Steps";

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
      </Main>
    </Page>
  );
}

export default App;
