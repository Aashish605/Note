import { Outlet } from "react-router-dom"
// import Navbar from "./Components/Navbar"
import Navbar from "./Components/Nav";
import Footer from "./Components/Footer"
import { SidebarProvider } from "./Components/SidebarContext"



const App = () => {
  return (
    <>
      <SidebarProvider>
        <Navbar />
        <Outlet />
        <Footer />
      </SidebarProvider>
    </>
  )
}

export default App