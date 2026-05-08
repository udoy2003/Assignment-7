import React from 'react';

const banner = () => {
   return (
    <div className="hero bg-white py-10 container mx-auto shadow-2xs">
      
      <div className=" container mx-auto flex-col text-center">
        

        <div>
          <h1 className="text-5xl font-bold">
            Friends to keep close in your life
          </h1>

          <p className="py-6 text-gray-500">
            Your personal shelf of meaningful connections. Browse, tend,
            and nurture the <br />
            relationships that matter most.
          </p>

          <button className="btn btn-primary">
            Add a Friend
          </button>
        </div>

      <div className="mt-8 flex gap-5 flex-wrap justify-center">
         
          <button className="btn bg-white  text-gray-600 shadow-sm px-18 py-12"> <span>10</span>
          <p>Total Friends</p>
            </button>

          
          <button className="btn bg-white  text-gray-600 shadow-sm px-18 py-12"> <span>2</span>
            <p>On Track</p></button>

          
          <button className="btn bg-white  text-gray-600 shadow-sm px-18 py-12"> <span>6</span>
            <p>Need Attention</p></button>

       
          <button className="btn bg-white text-gray-600  shadow-sm px-18 py-12"> <span>14</span>
            <p>Interactions This Month</p></button>

        </div>
      </div>
    </div>
  );
};

export default banner;