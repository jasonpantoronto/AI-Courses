import {motion} from "framer-motion";
import styles from './CourseBlock.module.css'

function CourseBlock(props) {
    var imageStyle = {
        backgroundImage: 'url('+props.image+')',
        width: '100%',
        height: '100%',       
    }

    return(
        
        <motion.div className={styles.CourseGrid}
            whileHover = {{scale: 1.03}}
            whileTap = {{scale: 0.97}}
        >
            
            <div className = {styles.Header}>
                <div className= {styles.BallGrid}>
                    <div id = {styles.BallA}></div>
                    <div id = {styles.BallB}></div>
                    <div id = {styles.BallC}></div>
                    <div id = {styles.BallD}></div>
                </div>
            </div>

            <div className = {styles.Body}>
                <div style = {imageStyle}></div>
            </div>

            <div className = {styles.Footer}>
                <h1>{props.course}</h1>
                <p>Continue: Unit {props.unit}</p>
            </div>
        </motion.div>


    );
}

export default CourseBlock;