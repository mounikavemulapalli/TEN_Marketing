import React from 'react';

const Partners = () => {
  return (
    <div className="flex flex-col items-center p-6 space-y-6">
      {/* handShake section */}
      <div className="flex justify-center">
        <img
          src="https://static.wixstatic.com/media/63dca8_b5ac719d9d7842cba8cec4b65a387f32~mv2.jpg/v1/fill/w_820,h_368,al_c,q_80,enc_auto/63dca8_b5ac719d9d7842cba8cec4b65a387f32~mv2.jpg"
          alt="handshake-image"
          className="w-[90%] md:w-[60%] lg:w-[50%] h-auto object-cover"
        />
      </div>

      {/* company details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center h-40"
          >
            Company {item} Details
          </div>
        ))}
      </div>
    </div>
  );
}

export default Partners;
