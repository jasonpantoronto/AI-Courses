import styles from "@/components/CoursePanel/CoursePanel.module.css";
import CourseBlock from "@/components/CourseBlock/CourseBlock.jsx"

function CourseContainer() {
    return(
        <div className={styles.CourseContainer}>
            <CourseBlock></CourseBlock>
            <CourseBlock></CourseBlock>
        </div>
    );
}

export default CourseContainer;