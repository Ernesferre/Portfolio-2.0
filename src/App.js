import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import { FaSun, FaMoon } from "react-icons/fa";
import { useColorMode } from "@chakra-ui/color-mode";
// import Header from './components/Header';
// import Sections from './components/Sections';
import Profile from "./components/Sections/Profile";
import Portfolio from "./components/Sections/Portfolio";
import Skills from "./components/Sections/Skills";
import Resume from "./components/Sections/Resume";
import Presentation from "./components/Presentation";
import { Box } from "@chakra-ui/react";
import EmptySection from "./components/EmptySection";
import { StoreProvider } from "./components/Context/StoreContext";
import Header from "./components/Header";
import WhatsApp from "./components/WhatsApp";
import WorkExperience from "./components/Sections/WorkExperience";
import Education from "./components/Sections/Education";

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

              <Route path="/workexperience">
                <WorkExperience isDark={isDark} />
              </Route>

              <Route path="/education">
                <Education isDark={isDark} />
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
