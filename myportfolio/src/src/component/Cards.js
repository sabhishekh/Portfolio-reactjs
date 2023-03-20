import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'; 
import'./Card.css';


function BasicExample(props) {
  return (
  
    <Card style={{ width: '18rem',margin:'20px' }}>
      <Card.Img variant="top" src={props.imgsrc} alt="Css" height={150} width={250}/>
      <Card.Body>
        <h1>{props.Title}</h1>
        
        <Button  variant="primary">{props.Button}</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;