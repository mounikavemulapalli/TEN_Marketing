import React from "react";
import STEPSVG from "./files/STEPSVG";
import RARROWSVG from "./files/RARROWSVG";
import LARROWSVG from "./files/LARROWSVG";
const Home = () => {
  return (
    <section>
      <div className='page-container'>
        {" "}
        {/* Wrapper for the background */}
        {/* Section with fixed background and image */}
        <div className='others'>
          {/* Section after triangle down with image */}
          <div className='after-triangle-image'>
            <img
              src='https://static.wixstatic.com/media/63dca8_cfa4f7a46ca1492dbf5f1858c569c5db~mv2.jpg'
              alt='Decorative'
              className='decorative-image'
            />

            {/* Overlay text on the image */}
            <div className='overlay'>
              <h2 className='overlay-text'>Your Needs,</h2>
              <div className='subtext-container'>
                <span className='left-arrow'>
                  <svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
                    <path d='M15 18l-6-6 6-6' stroke='black' strokeWidth='3' />
                  </svg>
                </span>
                <span className='subtext-overlay'>Our Excellence</span>
                <span className='right-arrow'>
                  <svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
                    <path d='M9 6l6 6-6 6' stroke='black' strokeWidth='3' />
                  </svg>
                </span>
              </div>

              {/* Read more button with two arrows */}
              <div className='read-more-container'>
                <button className='read-more-button'>
                  Read more
                  <span className='right-arrows'>
                    <svg
                      className='arrow'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                    >
                      <path d='M9 6l6 6-6 6' stroke='black' strokeWidth='2' />
                    </svg>
                    <svg
                      className='arrow'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                    >
                      <path d='M9 6l6 6-6 6' stroke='black' strokeWidth='2' />
                    </svg>
                  </span>
                </button>
              </div>

              {/* Dots indicators */}
              <div className='dots-container'>
                <span className='dot active'></span>
                <span className='dot'></span>
                <span className='dot'></span>
                <span className='dot'></span>
              </div>
            </div>
          </div>
          <div className='fixed-background' /> {/* Fixed Background */}
          {/* Who Are We Section */}
          <div className='who-are-we-section'>
            <h1 className='who-are-we-title'>WHO ARE WE?</h1>
            <p className='who-are-we-description'>
              Information about what the <br />
              company is about and how it came <br />
              to be.
              <br />
              The founder's reason for creating this company and his aims,
              ambitions,
              <br /> goals, and everything else.
            </p>
            <p className='who-are-we-description'>
              Information about what the
              <br /> company is about and how it came
              <br /> to be.
              <br />
              The founder's reason for creating this
              <br /> company and his aims, ambitions,
              <br /> goals, and everything else.
            </p>
          </div>
          {/* Additional Image Section with Overlay Text */}
          <div className='additional-image-container'>
            <div className='image-with-text'>
              <img
                src='https://static.wixstatic.com/media/63dca8_89e4b512057645d99aed8c0b4f8c5da0~mv2.jpg' // Replace with your image URL
                alt='Description of the image'
                className='additional-image'
              />
              <div className='text-overlay'>
                Don't waste your time in something
                <br />
                we can do better FOR YOU.
              </div>{" "}
              {/* Text overlay on the image */}
            </div>
          </div>
          <div className='stats-section'>
            <div className='stat-item'>
              <div className='icon-container'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 33.769 33.769'
                  width='50'
                  height='50'
                >
                  <path fill='none' d='M0 0h33.769v33.769H0z'></path>
                  <path
                    fill='#f3bc1d'
                    d='M28.141 8.442h-5.627V5.628a2.8 2.8 0 0 0-2.815-2.814H14.07a2.8 2.8 0 0 0-2.814 2.814v2.814H5.628a2.792 2.792 0 0 0-2.8 2.814l-.014 15.478a2.8 2.8 0 0 0 2.814 2.814h22.513a2.8 2.8 0 0 0 2.814-2.814V11.256a2.8 2.8 0 0 0-2.814-2.814zm-8.442 0H14.07V5.628h5.628z'
                  />
                </svg>
              </div>
              <p className='stat-text'>10,000+ Youth Network</p>
            </div>

            <div className='stat-item'>
              <div className='icon-container'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 33.769 33.769'
                  width='50'
                  height='50'
                >
                  <path fill='none' d='M0 0h33.769v33.769H0z'></path>
                  <path
                    fill='#f3bc1d'
                    d='M28.141 8.442h-5.627V5.628a2.8 2.8 0 0 0-2.815-2.814H14.07a2.8 2.8 0 0 0-2.814 2.814v2.814H5.628a2.792 2.792 0 0 0-2.8 2.814l-.014 15.478a2.8 2.8 0 0 0 2.814 2.814h22.513a2.8 2.8 0 0 0 2.814-2.814V11.256a2.8 2.8 0 0 0-2.814-2.814zm-8.442 0H14.07V5.628h5.628z'
                  />
                </svg>
              </div>
              <p className='stat-text'>20+ States User Traffic</p>
            </div>

            <div className='stat-item'>
              <div className='icon-container'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 33.769 33.769'
                  width='50'
                  height='50'
                >
                  <path fill='none' d='M0 0h33.769v33.769H0z'></path>
                  <path
                    fill='#f3bc1d'
                    d='M28.141 8.442h-5.627V5.628a2.8 2.8 0 0 0-2.815-2.814H14.07a2.8 2.8 0 0 0-2.814 2.814v2.814H5.628a2.792 2.792 0 0 0-2.8 2.814l-.014 15.478a2.8 2.8 0 0 0 2.814 2.814h22.513a2.8 2.8 0 0 0 2.814-2.814V11.256a2.8 2.8 0 0 0-2.814-2.814zm-8.442 0H14.07V5.628h5.628z'
                  />
                </svg>
              </div>
              <p className='stat-text'>500+ Colleges</p>
            </div>

            <div className='stat-item'>
              <div className='icon-container'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 33.769 33.769'
                  width='50'
                  height='50'
                >
                  <path fill='none' d='M0 0h33.769v33.769H0z'></path>
                  <path
                    fill='#f3bc1d'
                    d='M28.141 8.442h-5.627V5.628a2.8 2.8 0 0 0-2.815-2.814H14.07a2.8 2.8 0 0 0-2.814 2.814v2.814H5.628a2.792 2.792 0 0 0-2.8 2.814l-.014 15.478a2.8 2.8 0 0 0 2.814 2.814h22.513a2.8 2.8 0 0 0 2.814-2.814V11.256a2.8 2.8 0 0 0-2.814-2.814zm-8.442 0H14.07V5.628h5.628z'
                  />
                </svg>
              </div>
              <p className='stat-text'>100+ Clients</p>
            </div>
          </div>
        </div>
        <div className='additional-image-container1'>
          <div className='image-with-text'>
            <img
              src='https://static.wixstatic.com/media/63dca8_72953207beb9498ba94cd929eb38e9fe~mv2.jpg/v1/fill/w_1271,h_476,al_c,q_85,enc_auto/63dca8_72953207beb9498ba94cd929eb38e9fe~mv2.jpg' // Replace with your image URL
              alt='Description of the image'
              className='additional-image1'
            />
            <div className='text-overlay1'>
              Something about how you do marketing to <br />
              enhance a brand or COMPANY
            </div>{" "}
            {/* Text overlay on the image */}
          </div>
        </div>
      </div>
      <div className='split-container'>
        <div className='line left-line'></div>
        <div className='line right-line'></div>
      </div>
      {/* step */}
      <div className='work-process-container'>
        <div className='header-section'>
          <h1>THIS IS HOW WE WORK!</h1>
        </div>
      </div>

      <div className='step-section1'>
        <div className='step-container'>
          <div className='step-image'>
            <img
              src='https://static.wixstatic.com/media/63dca8_3a7224ea3c52454ab53b76750f92faf6~mv2.jpeg/v1/fill/w_555,h_282,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/63dca8_3a7224ea3c52454ab53b76750f92faf6~mv2.jpeg'
              alt='Step 1'
            />
            <div className='step-text'>Step 1</div>
          </div>

          <p className='step-description'>
            Briefly describing the steps <br /> and its purpose
          </p>
          <div className='step-SVG'>
            <STEPSVG />
          </div>
        </div>
      </div>

      <div className='step-section2'>
        <div className='step-container'>
          <div className='step-image'>
            <img
              src='https://static.wixstatic.com/media/63dca8_3a7224ea3c52454ab53b76750f92faf6~mv2.jpeg/v1/fill/w_555,h_282,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/63dca8_3a7224ea3c52454ab53b76750f92faf6~mv2.jpeg'
              alt='Step 2'
            />
            <div className='step-text'>Step 2</div>
          </div>
          <p className='step-description'>
            Briefly describing the steps <br /> and its purpose
          </p>
          <div className='step-SVG'>
            <STEPSVG />
          </div>
        </div>
      </div>

      <div className='step-section3'>
        <div className='step-container'>
          <div className='step-image'>
            <img
              src='https://static.wixstatic.com/media/63dca8_3a7224ea3c52454ab53b76750f92faf6~mv2.jpeg/v1/fill/w_555,h_282,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/63dca8_3a7224ea3c52454ab53b76750f92faf6~mv2.jpeg'
              alt='Step 3'
            />
            <div className='step-text'>Step 3</div>
          </div>
          <p className='step-description'>
            Briefly describing the steps <br /> and its purpose
          </p>
          <div className='step-SVG'>
            <STEPSVG />
          </div>
        </div>
      </div>
      <div className='step-section4'>
        <div className='step-container'>
          <div className='step-image'>
            <img
              src='https://static.wixstatic.com/media/63dca8_3a7224ea3c52454ab53b76750f92faf6~mv2.jpeg/v1/fill/w_555,h_282,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/63dca8_3a7224ea3c52454ab53b76750f92faf6~mv2.jpeg'
              alt='Step 4'
            />
            <div className='step-text'>Step 4</div>
          </div>
          <p className='step-description'>
            Briefly describing the steps <br /> and its purpose
          </p>
        </div>
      </div>
      {/*close step*/}
      <div className='testimonals-container'>
        <hr className='custom-hr' />
        <h3>Testimonials</h3>
        <div className='testimonial-content'>
          <LARROWSVG />
          <img
            src='https://static.wixstatic.com/media/63dca8_9cdf3404d82c45f09198d19fe631aa5f~mv2.jpeg/v1/crop/x_0,y_159,w_536,h_536/fill/w_276,h_269,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/63dca8_9cdf3404d82c45f09198d19fe631aa5f~mv2.jpeg'
            alt='Testimonial'
          />
          <RARROWSVG />
        </div>
        <p className='testimonals-p'>
          What clients have to say after they used your
          <br /> services.{" "}
        </p>
        <p className='testimonals-p'>
          {" "}
          How happy they are and why they want to recommend it to others.
        </p>
        <p className='testimonals-p'>
          <b>Name</b>
        </p>
        <p className='testimonals-p'>Position, Company Name</p>
        <hr className='hr1' />
      </div>
      <div className='About'>About section</div>
    </section>
  );
};

export default Home;
