// Page
import Header from "./components/Header";
import Hero from "./components/Hero/Hero";

// Header
import Navigation from "./components/Navigation/Navigation";
import Page from "./components/Page";

// Main
import Main from "./components/Main";
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
      </Main>
    </Page>
  );
}

export default App;
