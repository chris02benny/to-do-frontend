import React from 'react'
import Navbar from '../src/components/Navbar'
import ListInput from './components/ListInput'
import ShowList from '../src/components/ShowList';

import { library } from '@fortawesome/fontawesome-svg-core'

// import your icons
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

function App() {
  return (
<>
<Navbar></Navbar>
<ListInput/>
<ShowList/>
</>
  )
}

export default App
library.add(fab, fas, far)
