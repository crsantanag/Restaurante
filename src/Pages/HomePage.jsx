import { NavBar } from '../Components/NavBar'
import { MainRoutes } from '../Router/MainRoutes'
import { Footer } from '../Components/Footer'
import ErrorBoundary from '../Components/Error'
import './HomePage.css'

export const HomePage = () => {
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

