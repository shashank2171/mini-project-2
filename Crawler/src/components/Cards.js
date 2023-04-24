import React from "react";


export default function Cards() {
  return (
    <div className="cards"> 

      <div id='list' className="list">
      </div>
      
      <div className="infor">
          <div className="image">
            <img id='bookImg' src="" alt=""/>
          </div>
          <div className="descr">
            <div id='descId'></div>
          </div>
          <div className="links">
            <button id="do_@"className="download">Download</button>
            <button className="linkbtn">Wishlist</button>
          </div>
      </div>
    </div>
  );
};