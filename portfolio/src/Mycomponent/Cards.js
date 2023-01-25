import Button from '../react-bootstrap/esm/Button';
import Card from '../react-bootstrap/esm/Card'; 


function BasicExample(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.imgsrc} alt="Css" height={150} width={250}/>
      <Card.Body>
        <Card.Title>{props.Title}</Card.Title>
        <Card.Text>
          {props.Text}
        </Card.Text>
        <Button  variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;