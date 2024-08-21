import styles from "./CoursePanel.module.css"
import CourseContainer from "./CourseContainer";

function CoursePanel() {
    return(
        <div className= {styles.CoursePanel}>
            <CourseContainer></CourseContainer>


        </div>
    );
}

export default CoursePanel;