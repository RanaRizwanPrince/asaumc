import './App.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from './Components/Home';
import HospitalPreloader from "./Components/HospitalPreloader";
function App() {
  return (
    <>
      <Home />
      <HospitalPreloader />
    </>
  )
}
export default App