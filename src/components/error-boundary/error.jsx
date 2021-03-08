import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Logo from '../Images/venues.svg'

export default class ErrorBoundary extends Component {

      constructor(){
            super()
            this.state = {
                  hasErrored : false
            }

      }
      // built-in function -> if error occur
      static getDerivedStateFromError(error){
            return {hasErrored: true}
      }


      // catch Error
      componentDidCatch(error, info){
            console.log("🚀 ~ file: error-boundary.jsx ~ line 21 ~ errorBoundary ~ componentDidCatch ~ error", error)

      }


      render() {
            return (
                  this.state.hasErrored
                  // !if error occur in any route => render this
                  ?(<Container>
                        <Row className="justify-content-center">
                              <img src={Logo} alt="error" height={600}/>
                        </Row>
                        <Row className="justify-content-center">
                              <h1> Sorry this page is broken. Please contact support team </h1>
                        </Row>

                  </Container>)
                  :(this.props.children)
            )
      }
}
