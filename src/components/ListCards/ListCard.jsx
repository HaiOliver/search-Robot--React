import React from 'react';
import Card from '../Card/card-Component'
import Container from 'react-bootstrap/Container'
import './ListCard.css'
const CardList = ({dataAfterFilter}) => {

    const cardComponent = dataAfterFilter.map((card, i)=> {

        return  <Card
                    key = {i}
                    src={card.pic}
                    company={card.company}
                    email={card.email}
                    id={card.id}
                    name={card.lastName + " " + card.firstName}
                    skill={card.skill}
                    average={card.grades}
                  />
    })

    return (
        <Container>
            {cardComponent}
        </Container>
    );
}

export default CardList;