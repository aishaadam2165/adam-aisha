import React from "react";

export default function LandingPage() {
  return (
    <section
      id="mainPage"
      className="mainPage min-hv-100 d-flex align-items-center"
    >
      <div class="container">
        <div class="row king">
          <div class="col-lg-6 d-flex flex-column justify-content-center text-start  order-2 order-lg-1 ">
            <h1 data-aos="fade-up">Aisha</h1>
            <h1 data-aos="fade-up">Adam</h1>
            <h2 data-aos="fade-up" data-aos-delay="400">
              I Provide design <br />
              Solutions.
            </h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae
              aspernatur sit qui esse expedita nulla sequi maxime dolores
              excepturi error fuga porro voluptas soluta tempora tenetur nobis
              ut, ex quod?
            </p>
            <div data-aos="fade-in" data-aos-delay="600" className="d-flex  flex-row gap-4">
              <div class="text-center text-lg-start mt-4">
                <a
                  href="#about"
                  class="btn btn-lg text-uppercase bg-primary rounded-0 scrollto d-inline-flex align-items-center justify-content-center align-self-center"
                >
                  View my Work
                  
                </a>
              </div>
              <div class="text-center text-lg-start mt-4">
                <a
                  href="#about"
                  class="btn btn-lg text-uppercase rounded-0 btn-outline-primary scrollto d-inline-flex align-items-center justify-content-center align-self-center"
                >
                  get in touch
                  
                </a>
              </div>
            </div>

          </div>
          <div
            class="col-lg-6 hero-img order-lg-1 order-1 "
            data-aos="zoom-out"
            data-aos-delay="200"
          >
            <h4 className=" d-lg-none img-head">ayshu</h4>
            <img src="/ays.jpg" class="img-fluid" alt="img" />
          </div>
        </div>
      </div>
    </section>
  );
}
