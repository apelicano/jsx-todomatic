import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter as Router } from "react-router-dom";
import App from './App.jsx'
import './index.css'

// eslint-disable-next-line react-refresh/only-export-components
const DATA = [
  { id: "todo-0", name: "Wash dishes", completed: false },
  { id: "todo-1", name: "Vacuum the living room", completed: true },
  { id: "todo-2", name: "Do the laundry", completed: false },
  { id: "todo-3", name: "Mop kitchen floor", completed: false },
  { id: "todo-4", name: "Dust furniture", completed: false },
  { id: "todo-5", name: "Take out the trash", completed: false },
  { id: "todo-6", name: "Water indoor plants", completed: true },
  { id: "todo-7", name: "Clean the bathroom", completed: false },
  { id: "todo-8", name: "Change bed sheets", completed: false },
  { id: "todo-9", name: "Organize the closet", completed: false },
  { id: "todo-10", name: "Wipe down kitchen counters", completed: false },
  { id: "todo-11", name: "Sweep entryway", completed: false },
];


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App tasks={DATA} />
  </React.StrictMode>,
)
