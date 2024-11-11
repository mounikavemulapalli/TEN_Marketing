// JoinUs.jsx
import React from 'react';
import './joinUs.css';

function JoinUs() { 
  return (
    <div className="JoinUs">
      <section className="feedback">
        <h2>Give Us Your Feedback</h2>
        <form>
          <div className="input-group">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
          </div>
          <div className="input-group">
            <input type="email" placeholder="Email" />
            <input type="tel" placeholder="Phone" />
          </div>
          <textarea placeholder="Write your feedback here"></textarea>
          <button type="submit">Submit</button>
        </form>
      </section>

   
    </div>
  );
}

export default JoinUs;
