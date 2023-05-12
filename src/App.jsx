import React, { useState, useEffect } from "react";
import User from "./Components/User";

//Le but de notre composant App est de rendre le composant que React a monté

function App() {

  const [datas, setDatas] = useState([]);//Pour récupérer nos données d'une API, on va donc utiliser deux Hooks : useState et useEffect --> 
  // afficher nos données à l'état initial au montage du composant, ici datas est un tableau vide
  //à sa mise à jour, setDatas met à jour la state initial pour charger les données qu'on souhaite rendre
  // Pour cela, on utilise fetch API qui convertit nos données brutes en données json
  //et après, on les met sous forme de tableau d'objets en appelant la clé products 
  //On met à jour ses données avec useState
  //On gère également la gestion d'erreur s'il y a un problème de  chargement des données 

  // Ancienne méthode
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

  //Nouvelle méthode

  // On utilise useEffect avec une callback asynchrone car useEffect s'exécute après le rendu du composant
  // useEffect(() => { Pour récupérer la réponse , on utilise le couple async/await qui est équivalent à 2x then
  //     async function fetchDatas() {
  //       const res = await (await fetch("https://dummyjson.com/products")).json(); On utilise une await sur le fetch et une fois await sur la conversion des données brutes en json
  //On récupéère cette réponse dans une constante qui a comme clé products
  //       setDatas(res.products); on met à jour la réponse en lui appliquant le hook useState
  //   }

  //   fetchDatas(); Après avoir chargé nos données, on peut l'exécuter une seule fois après le montage de notre composant App
  // }, []);


  //Idem
  useEffect(() => {
    fetchProducts();
  }, [])

  //Rendu du composant App : de main à aside, afficher en 1er
  //On applique une protection sur le code car on a une fonction asynchrone 
  // qui va attendre qques ms avant d'exécuter le Hook
  //si le tableau datas a une longueur <= 0 la page est en chargement
  //sinon on affiche la liste de nos produits en retournant nos éléments HTML 
  //pour cela, on utilise les attributes de l'objet retourné par useEffect
  //les valeurs entre crochets dans React
  return (
    <>
      <main>
        <section>
          <h2>Liste de nos produits </h2>
          <aside>
            <User />
          </aside>
          <div className="products">
            {datas.length <= 0 ? (
              <p>LOADING...</p>
            ) :

              (datas.map((data, i) => {
                return (
                  <article key={i}>
                    <h3>{data.title} of {data.brand}</h3>
                    <figure>
                      <img src={data.images[0]} alt="" />
                      <figcaption>{data.price}€ , {data.discountPercentage}% OFF</figcaption>
                    </figure>
                    <p>{data.description}</p>
                    <ul>
                      <li>Stock : {data.stock}</li>
                      <li>Rating : {data.rating}</li>
                      <li>Category : {data.category}</li>
                    </ul>
                  </article>


                )
              }))}
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
