import React, { useState, useEffect } from "react";

function App() {

  const [datas, setDatas] = useState([]);

  const fetchProducts = () => {
    fetch(`https://dummyjson.com/products`)
      .then(res => res.json())
      .then(res => {
        // console.log((res.products));
        setDatas(res.products);
      }
      )
      .catch(error => console.error(error));
  };

  useEffect(() => {
    fetchProducts();
  }, [])


  return (
    <main>
      <section>
        <h2>Liste de nos produits </h2>
      {datas.map((data,i) => {
        return (
          <article key={i}>
            <h3>{data.title} of {data.brand}</h3>
            <figure>
              <img src={data.images[0]} alt="" />
              <figcaption>{data.price}€ , {data.discountPercentage}% OFF</figcaption>
            </figure>
            <p>{data.description}</p>
            <ul>
              <li>Stock : </li>
              <li>Rating : {data.rating}</li>
              <li>Category : {data.category}</li>
            </ul>
          </article>
          

        )
      })}
      </section>
    </main>
  );
}

export default App;
