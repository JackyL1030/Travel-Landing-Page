import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// Page
import Page from "./components/Page";

// Header
import Header from "./components/Header.tsx";
import Hero from "./components/Hero/Hero.tsx";
import Navigation from "./components/Navigation/Navigation.tsx";

// Main
import ExploreMore from "./components/ExploreMore/ExploreMore.tsx";
import FrequentTravelers from "./components/FrequentTravelers.tsx";
import Main from "./components/Main.tsx";
import News from "./components/News/News.tsx";
import Services from "./components/Services/Services.tsx";
import Steps from "./components/Steps/Steps.tsx";
import Testimonials from "./components/Testimonials/Testimonials.tsx";

// Footer
import Footer from "./components/Footer.tsx";

// mobile menu
import MobileMenu from "./components/Navigation/MobileMenu.tsx";
import MenuContextProvider from "./contexts/MobileMenuContext.tsx";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MenuContextProvider>
        <Page>
          <Header>
            <Navigation />
            <Hero />
            <MobileMenu />
          </Header>

          <Main>
            <Steps />
            <Services />
            <News />
            <ExploreMore />
            <FrequentTravelers />
            <Testimonials />
          </Main>

          <Footer />
        </Page>
      </MenuContextProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
