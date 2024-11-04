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

      <div className="Logo">
        <path stroke-width=".5" stroke-miterlimit="10" stroke="#000000" d="M39.055 9.291l2.339 2.479a4.82 4.82 0 0 1 6.668-.623 4.21 4.21 0 0 1 .8 5.072 4.409 4.409 0 0 1-5.9 1.4 44.559 44.559 0 0 1-6.552-6.189 25.045 25.045 0 0 0-4.19-3.963 6.216 6.216 0 0 0-2.028-.853 7.532 7.532 0 0 0-6.413 1.2 7.881 7.881 0 0 0-3.081 8.324 7.865 7.865 0 0 0 6.012 5.584 7.65 7.65 0 0 0 7.015-2.055 6.387 6.387 0 0 0 .427-.543l-2.454-2.566a4.671 4.671 0 0 1-3.819 1.852 4.3 4.3 0 0 1-3.931-4.019 4.27 4.27 0 0 1 2.993-4.218 4.5 4.5 0 0 1 4.557 1.341c1.177 1.221 1.939 1.788 5.248 5.216 1.329 1.381 1.273 1.313 1.568 1.6a12.418 12.418 0 0 0 3.796 2.845A8.124 8.124 0 0 0 48.15 21a7.929 7.929 0 0 0 3.935-3.763 8.08 8.08 0 0 0-.175-7.037 7.869 7.869 0 0 0-8.3-3.759 8.025 8.025 0 0 0-4.561 2.849z"></path>
      </div>
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
