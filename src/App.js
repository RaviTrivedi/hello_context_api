import './App.css'
import { createContext, useState } from 'react'
import ChildA from './ChildA'

export const LanguageContext = createContext({
  language: 'En',
  setLanguage: () => {},
})

function App() {
  const [language, setLanguage] = useState('En')

  const value = { language, setLanguage }

  return (
    <>
      <LanguageContext.Provider value={value}>
        <div className="App">
          <ChildA />
        </div>
      </LanguageContext.Provider>
    </>
  )
}

export default App
