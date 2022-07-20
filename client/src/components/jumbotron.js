// src/components/jumbotron.tsx
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
export const Jumbotron = () => {
 return (
  <section className="jumbotron text-center mb-0 bg-white">
   <div className="container">
    <h1 className="jumbotron-heading">Native Market</h1>
    <p className="lead text-muted">
    Making e-commerce as natural as nature.
    </p>
    <p>
     <a href="#" className="btn btn-primary m-2">
      Main call to action
     </a>
     <a href="#" className="btn btn-secondary m-2">
      Secondary action
     </a>
    </p>
   </div>
  </section>
 );
};