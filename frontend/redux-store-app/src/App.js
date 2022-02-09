import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";
const App = () => {
  return(
    <>
    <Router>
      <Navigation/>
      <Routes>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="*" element={<NotFound/>}/>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </Router>
    </>
  )
}
export default App;