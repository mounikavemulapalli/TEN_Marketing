import React from "react";
import STEPSVG from "./files/STEPSVG";
import RARROWSVG from "./files/RARROWSVG";
import LARROWSVG from "./files/LARROWSVG";
import { useMediaQuery } from "react-responsive";
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
              company is about and how it came to be.
              <br />
              The founder's reason for creating <br />
              this company and his aims, ambitions,
              <br /> goals, and everything else.
            </p>
            <p className='who-are-we-description'>
              Information about what the <br />
              company is about and how it came to be.
              <br />
              The founder's reason for creating <br />
              this company and his aims, ambitions,
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
                    d='M18.546 18.546a6.182 6.182 0 1 0-6.182-6.182 6.181 6.181 0 0 0 6.182 6.182zm0 3.091c-4.126.001-12.364 2.072-12.364 6.183v3.091h24.729V27.82c0-4.111-8.238-6.182-12.365-6.182z'
                  ></path>
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
                    d='M7.035 18.545v5.628l9.849 5.375 9.849-5.375v-5.628l-9.848 5.376zm9.85-14.324L1.407 12.663l15.478 8.442 12.664-6.909v9.725h2.814V12.663z'
                  ></path>
                </svg>
              </div>
              <p className='stat-text'>500+ Colleges Connected</p>
            </div>

            <div className='stat-item'>
              <div className='icon-container'>
                <svg
                  preserveAspectRatio='xMidYMid meet'
                  data-bbox='0.023 0 33.724 33.573'
                  viewBox='0.023 0 33.724 33.573'
                  height='34.572'
                  width='34.769'
                  xmlns='http://www.w3.org/2000/svg'
                  data-type='color'
                  role='presentation'
                  aria-hidden='true'
                >
                  <g>
                    <path
                      fill='#f3bc1d'
                      d='M9.494 20.908H4.222a.528.528 0 0 0-.528.528v11.608a.528.528 0 0 0 .528.528h5.272a.528.528 0 0 0 .528-.528V21.436a.528.528 0 0 0-.528-.528z'
                      data-color='1'
                    ></path>
                    <g>
                      <path
                        fill='#f3bc1d'
                        d='M5.277 33.044V21.436a.528.528 0 0 1 .528-.528H4.222a.528.528 0 0 0-.528.528v11.608a.528.528 0 0 0 .528.528h1.583a.528.528 0 0 1-.528-.528z'
                        data-color='1'
                      ></path>
                      <path
                        fill='#f3bc1d'
                        d='M19.519 18.27h-5.276a.528.528 0 0 0-.528.528v14.246a.528.528 0 0 0 .528.528h5.276a.528.528 0 0 0 .528-.528V18.798a.528.528 0 0 0-.528-.528z'
                        data-color='1'
                      ></path>
                    </g>
                    <g>
                      <path
                        fill='#f3bc1d'
                        d='M15.302 33.044V18.798a.528.528 0 0 1 .528-.528h-1.583a.528.528 0 0 0-.528.528v14.246a.528.528 0 0 0 .528.528h1.583a.528.528 0 0 1-.528-.528z'
                        data-color='1'
                      ></path>
                      <path
                        fill='#f3bc1d'
                        d='M29.544 12.466h-5.276a.528.528 0 0 0-.528.528v20.051a.528.528 0 0 0 .528.528h5.276a.528.528 0 0 0 .528-.528V12.994a.528.528 0 0 0-.528-.528z'
                        data-color='1'
                      ></path>
                    </g>
                    <path
                      fill='#f3bc1d'
                      d='M25.327 33.044v-20.05a.528.528 0 0 1 .528-.528h-1.583a.528.528 0 0 0-.528.528v20.051a.528.528 0 0 0 .528.528h1.583a.528.528 0 0 1-.528-.529z'
                      data-color='1'
                    ></path>
                    <path
                      fill='#f3bc1d'
                      d='M33.242 33.571H.528a.528.528 0 0 1 0-1.055h32.714a.528.528 0 0 1 0 1.055z'
                      data-color='1'
                    ></path>
                    <path
                      fill='#f3bc1d'
                      d='M31.83.264a1.055 1.055 0 0 0-.829-.256L26.78.536a1.055 1.055 0 0 0 .262 2.094l1.587-.2a37.72 37.72 0 0 1-16.708 11.786 36.046 36.046 0 0 1-9.843 2.142 1.055 1.055 0 0 0 .032 2.11h.033a37.363 37.363 0 0 0 10.412-2.238 40.975 40.975 0 0 0 9.52-4.85 38.613 38.613 0 0 0 8-7.384v1.28a1.056 1.056 0 1 0 2.111 0V1.055a1.055 1.055 0 0 0-.356-.791z'
                      data-color='1'
                    ></path>
                  </g>
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
          <div></div>
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
          What clients have to say after they used your services.{" "}
        </p>
        <p className='testimonals-p'>
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
