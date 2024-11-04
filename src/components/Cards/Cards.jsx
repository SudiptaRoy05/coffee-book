import { useEffect, useState } from "react";

export default function Cards({ coffee }) {
  const { name, image, category, origin, type, id, rating, popularity } =
    coffee || {};


  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img
          src={image}
          alt={name}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{category}</p>
        <p>{origin}</p>
        <p>{type}</p>
        <p>{rating}</p>
        <p>{popularity}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
}
