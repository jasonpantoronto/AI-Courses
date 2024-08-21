import CoursePanel from '@/components/CoursePanel/CoursePanel.jsx';
import Header from "@/components/HeaderFooter/Header.jsx";
import Footer from "@/components/HeaderFooter/Footer.jsx";
import NavPanel from "@/components/NavPanel/NavPanel.jsx";
import styles from "@/pages/Main.module.css";

function Main() {

  return(
    <div className= {styles.Page}>
      <Header></Header>
      <NavPanel></NavPanel>
      <CoursePanel></CoursePanel>
      <Footer></Footer>
    </div>
  );
}

export default Main;