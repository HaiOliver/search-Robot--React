import React from 'react'
import Spinner from 'react-bootstrap/Spinner'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import './loading.css'
export default function Loading() {
      return (
            <Container >
                        <Row className="loading">
                              <Spinner animation="grow" variant="primary" />
                              <Spinner animation="grow" variant="secondary" />
                              <Spinner animation="grow" variant="success" />
                              <Spinner animation="grow" variant="danger" />
                              <Spinner animation="grow" variant="warning" />
                              <Spinner animation="grow" variant="info" />
                              <Spinner animation="grow" variant="light" />
                              <Spinner animation="grow" variant="dark" />
                        </Row>

                        <Row className="justify-content-md-center">
                              <h3>Fetching data from API ....!!! Please wait !!</h3>
                        </Row>
            </Container>
      )
}