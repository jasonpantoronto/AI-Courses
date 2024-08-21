import styles from "@/components/CoursePanel/CoursePanel.module.css";
import CourseBlock from "@/components/CourseBlock/CourseBlock.jsx"

function CourseContainer() {
    return(
        <div className={styles.CourseContainer}>
            <CourseBlock course = "math"></CourseBlock>
            <CourseBlock course = "math"></CourseBlock>
            <CourseBlock course = "math"></CourseBlock>
            <CourseBlock course = "math"></CourseBlock>
            <CourseBlock course = "math"></CourseBlock>
            <CourseBlock course = "math"></CourseBlock>
            <CourseBlock course = "math"></CourseBlock>
        </div>
    );
}

export default CourseContainer;