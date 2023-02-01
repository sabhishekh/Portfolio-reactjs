import React from "react";
import css from './css.jpg'
export default function Card(){
    return(
        <>
<div class="card" style="width: 18rem;">
  <img src={css} class="card-img-top" alt="css"/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>


        </>
    )
}