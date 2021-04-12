import React from 'react';

import "../App.css";

export default function Modal  ({displayModal,closeModal,indexvalue,removeFriend})  {
     
     const divStyle = { 
          display:displayModal ? 'block' : 'none'
     };

     function closeModalv(e) {
        closeModal()
     }

     function submitModalv() {
        removeFriend(indexvalue)
        closeModal()
     }
     return (
       <div 
         className="modal"
         onClick={ closeModal }
         style={divStyle} >
          <div >
             {/* <span 
                 className="close"
                 onClick={ closeModalv }>x
             </span> */}
             {/* <h3>Do you want to delte your friend</h3> */}
          </div>
          <h2 style={{paddingLeft:'35px'}}>Do you want to delete your friend</h2>
          <div style={{paddingTop:'80px',display:'flex',justifyContent:'space-around'}}>
          <button type="button" onClick={closeModalv} class="cancelbtn">Cancel</button>
          <button type="button" onClick={submitModalv} class="deletebtn">Delete</button>
              
          </div>
       </div>
     );
}
