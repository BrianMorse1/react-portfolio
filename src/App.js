import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import ProjectsPage from './pages/Projects';



function App() {
  return (
    <ChakraProvider>
      <Navbar></Navbar>
  </ChakraProvider>
  );
}

export default App;
