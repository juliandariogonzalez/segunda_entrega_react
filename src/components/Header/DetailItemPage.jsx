import axios from 'axios';
import { useState, useEffect } from 'react';
import CardBikes from './CardBikes';
import Spinner from 'react-bootstrap/Spinner';


import {  useParams } from 'react-router-dom';

const DetailItemPage = () => {
  let {id} =useParams();
  const [ char, setChar] = useState([])
  console.log(char);
  useEffect ( () => {
    axios (`https://api.mercadolibre.com/sites/MLA/search?q=bic/${id}`).then((res)=> setChar(res.data));
  }, [id]  );

  return (
    <div>
      <h1>Detalle del Producto</h1>
      {char.id ? ( <CardBikes id={char.id} title={char.title} thumbnail={char.thumbnail} />
      ) : (     
        <div style={{ display: 'flex', justifyContent:"center"}}>

          <Spinner animation="border" variant="danger" />
          <p >Cargando...</p>
        </div> 
   
      )}
      <div>

          <p>
            Hola ernesto, Tuve problemas para que la card se pinte con el ID del producto, no se si es porque me pide la validacion de mercadolibre o que. Si en la correccion me podes hacer una devolucion de como solucionarlo estoy mas que agradecido! Gracias, perdon la demora
          </p>
      </div>
    </div>
  )
}

export default DetailItemPage;