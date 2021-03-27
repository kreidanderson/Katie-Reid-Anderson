import React from "react";
import "./style.css";
import beau from "./beau.jpg"
import bb from "./bananabread.jpg"
import oliver from "./Oliver.jpg"
import toffee from "./toffee.jpg"

const Art = () => {
  return (
<div class="lightbox">
  <div class="row">
    <div class="col-lg-6">
      <img
        src={toffee}
        data-mdb-img="https://mdbootstrap.com/img/Photos/Slides/1.jpg"
        alt="Lightbox image 1"
        class="w-100 mb-0 mb-md-4 shadow-1-strong rounded"
      />
    </div>
    <div class="col-lg-6">
      <img
        src={beau}
        data-mdb-img="https://mdbootstrap.com/img/Photos/Vertical/1.jpg"
        alt="Lightbox image 3"
        class="w-100 shadow-1-strong rounded"
      />
            <img
        src={oliver}
        data-mdb-img="https://mdbootstrap.com/img/Photos/Square/1.jpg"
        alt="Lightbox image 2"
        class="w-100 shadow-1-strong rounded"
      />
    </div>
  </div>
</div>
  );
};

export default Art;




