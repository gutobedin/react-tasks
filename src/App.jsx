import {useEffect, useState} from 'react'
import { Header } from './components/Header'
import { Tasks } from './components/Tasks'

import './global.css'

function App() {
  return (
    <div>
      <Tasks
       content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis minima earum ipsum optio tenetur, illo est numquam, quisquam fugiat tempore eveniet eligendi reiciendis delectus nobis excepturi fuga. Ipsa, odio itaque?"
       author="Gustavo Bedin"
      />
    </div>
  )
}

export default App
