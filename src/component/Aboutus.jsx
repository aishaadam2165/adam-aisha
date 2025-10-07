export default function AboutUs() {
  return (
    <>
      <div className="sectionTitle d-flex flex-row text-light">
        <h3></h3>
        <h4>About Me</h4>
      </div>
      <div className="row about justify-content-center align-items-center text-light">
        <div className="col-lg-8 mt-4">
          <p>
            My jewelry and fashion design are more than mere accessories;they
            are narratives wovem from materials,designed to be worn close to heart.
            I believe in the power of exquisite craftmanship to tell a story, with 
            each piece serving as a unique dialogue between the wearer and the world.
           
          </p>
          <p>
              Fashion is not something that exist in dresses only.
              Fashion is in the sky, in the street,fashion has to do with ideas,
              the way we live, What is happening
            </p>
            
          
            <div className="card p-2 bg-opacity-75">
                  <div className="d-flex flex-row gap-4">
            <i className="bi bi-window"></i>
            
            <h5> Conceptualization and Sketching</h5>
          </div>
          <div className="d-flex flex-row gap-4">
            <i className="bi bi-window"></i>
            <h5> Brand Building</h5>
          </div>
          <div className="d-flex flex-row gap-4">
            <i className="bi bi-window"></i>
            <h5> Prototyping and Manufacturing</h5>
          </div>
          <div className="d-flex flex-row gap-4">
            <i className="bi bi-window"></i>
            <h5> Technical Design </h5>
          </div>
          <div className="d-flex flex-row gap-4">
            <i className="bi bi-window"></i>
            <h5> Product Oversignt</h5>
          </div>
          <div className="d-flex flex-row gap-4"></div>
            </div>
        
        </div>
        <div className="col-lg-4">
          <img src="/mlo.jpg" className="img-fluid rounded"/>
        </div>
      </div>
      
    </>
  );
}
