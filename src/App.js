import React, {useState} from 'react';
import ThemeContext from './context/ThemeContext'
import Header from './components/Header'
import Hero from './components/HeroSection'


const App = () => {

  const theme = useState('light')

  return(
    <ThemeContext.Provider value={theme}>
      <div>
        <Header />
        <Hero />
      </div>
    </ThemeContext.Provider>
  )
 
}

export default App;