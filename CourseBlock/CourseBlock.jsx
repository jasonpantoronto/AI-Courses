import styles from './CourseBlock.module.css'

function CourseBlock(props) {
    var imageStyle = {
        backgroundImage: 'url('+props.image+')',
        width: '100%',
        height: '100%',       
    }

    return(
        <div className={styles.CourseGrid}>
            
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
                <p>Continue: {props.unit}</p>
            </div>

        </div>


    );
}

export default CourseBlock;