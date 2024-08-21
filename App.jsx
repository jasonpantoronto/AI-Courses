import CoursePanel from './CoursePanel/CoursePanel.jsx'
import Header from "./HeaderFooter/Header.jsx"
import Footer from "./HeaderFooter/Footer.jsx"
import NavPanel from "./NavPanel/NavPanel.jsx"

function App() {


  return(
    <>
      <div className= "Page">
        <Header></Header>
        <NavPanel></NavPanel>
        <CoursePanel></CoursePanel>
        <Footer></Footer>
      </div>
    </>
    
  );
}

export default App;