import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { wordes } from "./words";


function App() {
  return (
  
     <div className="layout"> 
<Header/>
  <main>
    {wordes.content}
  </main>
<Footer/>


     </div>
  
  );
}

export default App;
