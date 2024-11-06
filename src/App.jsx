import Home from "./pages/frontend/home"
import Login from "./pages/frontend/login"
import Register from "./pages/frontend/register"
import NotFound from "./pages/frontend/notFound"
import { Route, Router,Routes } from "react-router-dom"

function App() {
  
  return (
    <>
        <Routes>
            <Route path="/" element = {<Home/>}></Route>
            <Route path="/Login" element = {<Login/>}/>
            <Route path="/Register" element = {<Register/>}/>
            <Route path="*" element = {<NotFound/>}/>
        </Routes>

    </>
  )
}

export default App
