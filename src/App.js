import React from 'react';
import {ChakraProvider} from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import Highlight from "./components/Highlight";
import Main from './components/Main';
import FootNav from "./components/FootNav";
import {AlertProvider} from "./context/alertContext";
import Alert from "./components/Alert";

function App() {
    return (
        <ChakraProvider>
          <AlertProvider>
            <NavBar/>
            <HeroSection/>
            <Highlight/>
            <Main/>
            <FootNav />
            <Alert />
        </AlertProvider>
      </ChakraProvider>
    );
  }
export default App;
