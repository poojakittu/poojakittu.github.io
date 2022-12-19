import React from "react";

//function for form reset
function handleSubmit(e){
  setTimeout(() => {
    e.target.reset();
  }, 3000);
}

const Contact2 = () => {
  return (
   
        
        <div style={{width:"100px", marginLeft:"100px"}}>
        
          <form
            onSubmit={handleSubmit}
            name="contact"
            method="POST"
            action="https://getform.io/f/a5bbeab4-3505-457e-bcda-603c8bc15711"
            className=" flex flex-col w-full md:w-1/2"
          >
            
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="5"
              required
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

           <button type="button" class="btn btn-secondary" width="50px" style={{marginLeft:"70px"}}>Send </button>
          </form>
        </div>
      
  );
};

export default Contact2;