import React from "react";
import "../02-useEffect/effects.css";
import { useCounter } from "../hook/useCounter";
import { useFetch } from "../hook/useFetch";

export const MultipleCustomHook = () => {
  const { state, increment } = useCounter(1);
  const { data, loading, error } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${state}`
  );

  const { author, quote } = !!data && data[0];

  return (
    <div>
      <h1>MultipleCustomHook</h1>
      <hr />

      {loading ? (
        <div className="alert alert-info text-center">Loading...</div>
      ) : (
        <>
        <figure className="text-end">
          <blockquote className="blockquote">
            <p className="mb-0">{quote}</p>
          </blockquote>
          <figcaption className="blockquote-footer">{author}</figcaption>
        </figure>

        <button className="btn btn-primary" onClick={increment} >Siguiente Quote</button>
        </>
      )}
    </div>
  );
};
