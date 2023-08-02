import { NavBar } from './Components/NavBar'
import { MainRoutes } from './Router/MainRoutes'
import { Footer } from './Pages/Footer'
import ErrorBoundary from './Pages/Error'
import './App.css'

export const App = () => {
  return (
    <>
      <ErrorBoundary>
        <NavBar />
        <MainRoutes />
        <Footer />
      </ErrorBoundary>
    </>
  )
}

