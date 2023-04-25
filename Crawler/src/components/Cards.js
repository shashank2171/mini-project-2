import React from "react";
import { Loading } from "./Loading";


export default function Cards() {
  return (
    <div className="cards"> 
      <Loading/>
      <div id='list' className="list">
      </div>
      
      <div id='infor' className="infor">
          <div className="image">
            <img id='bookImg' referrerPolicy="no-referrer" src="" alt=""/>
          </div>
          <div id='descr' className="descr">
            <div id='descId'></div>
          </div>
          <div id="lin" className="links">
            {/* <button id="do_n"className="download">Download</button>
            <button id="wish" className="wishlist">Wishlist</button> */}
          </div>
      </div>
    </div>
  );
};