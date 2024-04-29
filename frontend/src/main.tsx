import ReactDOM from 'react-dom/client'
import './pages/Input/primary-input.css'
import './css/App.css'
import { BrowserRouter } from 'react-router-dom'
import MainRoutes from './routes'

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <MainRoutes/>
  </BrowserRouter>
)