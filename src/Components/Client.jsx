import "./Client.css"
import { companyArray } from "../utlis/clientConstant";
import { useEffect } from "react";


const Client = () => {
  useEffect(() => {
    document.body.classList.add('client-background');
    
  
    return () => document.body.classList.remove('client-background');
  }, []);


  const backgroundStyle = {
    backgroundImage: 'url("https://static.wixstatic.com/media/4c2d9489b9554ec7a9fd08808b4d8a6a.jpg/v1/fill/w_1899,h_413,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/4c2d9489b9554ec7a9fd08808b4d8a6a.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',

  };
  const clientimg = "https://static.wixstatic.com/media/c2f0b7280953414496944628fcf4506c.jpg/v1/fill/w_611,h_180,al_c,lg_1,q_80,enc_auto/c2f0b7280953414496944628fcf4506c.jpg";

  return (
    <div className="client-container d-flex flex-column justify-content-center">

  
      {/* first-sectiom */}
      <div className="first-section">
        <div className="circle">
        <div className="first-section-img">
            <img id="client-img" src={clientimg} />
            <h1>Clients</h1>
          </div>
          <div className="trust-div d-flex justify-content-center">
            <div className="Clients">
              <h1>Our Clients</h1>
            </div>
            <div className="trust ">
              <p className="trust-us-div">Who trust us</p>
            </div>
        </div>

          
          </div>


      </div>
      {/* second-section */}
     <div className="company-div" >
      {
        companyArray?.map((data, index) => {
          const isLast = index === companyArray.length - 1;
          return (
            <div  key={index}  className={`d-flex flex-column align-items-center  ${isLast ? 'last-company' : ''}`}>
          
              <div className="d-fex box align-items-center justify-content-center">
                <img id="company-img" src={data?.img} />
               </div>
               <div className="company-name">
              <><i>{data?.companyName}</i></><br/>
              </div>
              <div className="company-description">
              <>{data?.description}</>
              </div>
              <div className="Button-container">
                <button className="btn-read mt-4">Read More</button>
                </div>
            </div>
          )
        })
      }
      </div>
    </div>


  );
};

export default Client;
