"use strict"
let myhttp = require('http');
let myserver = myhttp.createServer( 
  function( correct ) {
  
  let mytext;
    if ( correct.url === "yes" ) {
      mytext = "True";
    } else {
      mytext = "False";
    }});