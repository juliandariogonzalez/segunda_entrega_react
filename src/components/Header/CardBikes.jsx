import { Card, Button } from 'react-bootstrap';
import './ListaItems.css';
import { Link } from 'react-router-dom';
import "./CardBikes.css";


const CardBikes = ({ char }) => {
    const{ thumbnail, title } = char


  return (
    <div className='Card-List'>


          <Card style={{ width: '18rem'  }}>
            <Card.Img variant="top" src={ thumbnail}  />
            <Card.Body style={{ textAlign: 'center' }} >
              <Card.Title style={{ maxHeight: '3rem', overflow: 'hidden', textOverflow: 'ellipsis' }} > {title} </Card.Title>
              <Link to="/detailitem"> <Button variant="danger">Ver Producto</Button></Link>
            </Card.Body>
          </Card>
       
    </div>
  )
}

export default CardBikes;