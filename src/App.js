import './App.css';
import React from 'react';
import { useState } from 'react';

import fetchResult from './utils/utils';

import Form from './components/Form/Form';
import Results from './components/Results/Results';

function App() {
  const [definition, setDefinition] = useState()

  const handleSubmit = async (event) => {
    event.preventDefault()
    const response = await fetchResult(event.target.word.value)
    setDefinition(response.data.definition)
  }

  return (
    <div>
      <h1>Dictionary</h1>

      <Form handleSubmit={handleSubmit}/>
      {/* {definition} */}
      <Results definition={definition}/>
    </div>
  );
}

export default App;
