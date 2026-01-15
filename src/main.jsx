
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ProjectsProvider } from './context/ProjectsContext.jsx'

createRoot(document.getElementById('root')).render(

  <BrowserRouter>

    <ProjectsProvider>
      <App />

    </ProjectsProvider>

  </BrowserRouter>


)
