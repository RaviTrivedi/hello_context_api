import React, { useContext } from 'react'
import { LanguageContext } from './App'

const ChildB = () => {
  const { language, setLanguage } = useContext(LanguageContext)

  return (
    <div>
      ChildB
      <h1>{language}</h1>
      <button onClick={() => setLanguage('Gu')}>Switch Language</button>
    </div>
  )
}

export default ChildB
