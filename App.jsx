import CourseBlock from "./CourseBlock/CourseBlock.jsx";

//Js is all about using "components"
//A component is a function with html and js mixed inside

function App() {//return() can only return 1 element. thus, we wrap the whole thing in a empty <>
  const mathImg = "https://media.istockphoto.com/id/1265965042/vector/math-theory-mathematics-calculus-on-class-chalkboard-algebra-and-geometry-science.jpg?s=612x612&w=0&k=20&c=T97ylW_6ht1STS_MRw4YrDg0Kt3HuoXEOQI9vQFfin8=";

  return(
    <>
      <CourseBlock course = "Machine Learning" unit = "Unit 1" image = {mathImg}></CourseBlock>
    </>
    
  );
}

export default App;