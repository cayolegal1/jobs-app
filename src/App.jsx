import { useState } from 'react';
import {HashRouter, Routes, Route} from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react';
import Home from './containers/Home';
import Header from './components/Header';
import './App.css'
import {jobs} from './data';
import CreateJob from './components/CreateJob';

const App = () => {

  const [state, setState] = useState(jobs);

  return (

    <HashRouter>

      <ChakraProvider>
      
        <Header />

        <Routes>

          <Route path='/' element={<Home state={state}/>} />

          <Route path='/create' element={<CreateJob setState={setState} />} />

          <Route path='/*' element={<h1>Not found</h1>} />

        </Routes>

      </ChakraProvider>

    </HashRouter>

  );
}

export default App;

