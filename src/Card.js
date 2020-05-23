import React, {useState} from 'react';
import { Card, CardImg, CardBody,CardTitle,CardDescription,Counter } from './styles/cardstyles';

function CardComponent( { prop,title, description }) {
    const [count, setCount] = useState(0);
    return (
    <Card onMouseEnter={() => setCount(count+1)}>
        <CardImg src={prop}/>
        <CardBody>
            <CardTitle> {title} </CardTitle>
            <CardDescription> {description}. <Counter>{count}</Counter>번 호버했어요. </CardDescription>
        </CardBody>
    </Card>
  );
}

export default CardComponent;