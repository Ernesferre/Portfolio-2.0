import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import { FaSun, FaMoon } from "react-icons/fa";
import { useColorMode } from "@chakra-ui/color-mode";
// import Header from './components/Header';
// import Sections from './components/Sections';
import Profile from "./components/Profile";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
import Presentation from "./components/Presentation";
import { Box, Container } from "@chakra-ui/react";
import EmptySection from "./components/EmptySection";
import { StoreProvider } from "./components/Context/StoreContext";
import Header from "./components/Header";
import WhatsApp from "./components/WhatsApp";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();

  const isDark = colorMode === "dark";

  return (
    <>
      <StoreProvider>
        <Box bg={isDark ? "black" : "white"}>
          <BrowserRouter>
            <Header toggleColorMode={toggleColorMode} isDark={isDark} />

            <Switch>
              <Route exact path="/">
                <Presentation isDark={isDark} />
              </Route>

              <Route exact path="/profile">
                <Profile isDark={isDark} />
              </Route>

              <Route path="/portfolio">
                <Portfolio isDark={isDark} />
              </Route>

              <Route path="/skills">
                <Skills isDark={isDark} />
              </Route>

              <Route path="/resume">
                <Resume />
              </Route>
            </Switch>

            <WhatsApp />
          </BrowserRouter>
        </Box>

        <EmptySection isDark={isDark} />
      </StoreProvider>
    </>
  );
}

export default App;
