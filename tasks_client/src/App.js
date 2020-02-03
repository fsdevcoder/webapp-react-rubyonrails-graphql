import React from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faCheckCircle, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

import Header from './components/header/Header.js'
import Tasks from './components/tasks/Tasks.js'

library.add(fas, faCheckCircle, faTrashAlt)

function App() {

  return (
    <div className="App">    	
    	<Header />    
    	<Tasks /> 	
    </div>
  );
}

export default App;
