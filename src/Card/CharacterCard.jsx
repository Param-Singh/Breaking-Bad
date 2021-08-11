import React from 'react'
import { Card,ListGroupItem,ListGroup } from 'react-bootstrap'
import '../Css/ResultsPage.css'
export default function CharacterCard({name,birthday,img,occupation,status}) {
    
    return (
        <Card className='card' style={{ width: '18rem' }}>
            <Card.Img className="card-img-top characterImage" src={img} />
            <Card.Body className='card-body'>
            <Card.Title style={{textAlign:'center',color:'white',paddingBottom:'0px',marginBottom:'2px'}}>{name}</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush list-group">
                <ListGroupItem className='listItem' style={{backgroundColor:'background-color: rgb(45, 21, 48)'}}>{occupation.map((each,index)=> each+ " ")}</ListGroupItem>
                <ListGroupItem className='listItem'>{birthday}</ListGroupItem>
                <ListGroupItem className='listItem'>{status}</ListGroupItem>
            </ListGroup>
            
        </Card>
    )
}
