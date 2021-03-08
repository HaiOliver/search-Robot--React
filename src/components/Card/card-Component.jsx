import React,{useState, useContext} from 'react'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Divider from '@material-ui/core/Divider';
import Collapse from 'react-bootstrap/Collapse';
import TagsInput from '../TagInput/Tag-input'
import DataContext from '../DataContext//contextData';
import { AiOutlinePlus } from 'react-icons/ai';
import { AiOutlineMinus } from 'react-icons/ai';
import './card.css'

export default function Card({src,name, email,company, skill, average,id}) {


      const [open, setOpen] = useState(false);
      const convertArrayInteger =  average.map(each => parseInt(each))
      const calculateAverage = ((array) => array.reduce((a, b) => a + b) / array.length)(convertArrayInteger);
      const renderTestScore = average.map((each,index) =>
                        <li key={index}>Test{index+1}:<span className="space">{each}%</span> </li>
                  )
      // ! load DATA CONTEXT
      const addToDataContext = useContext(DataContext)
      // ? handle Tag input
      const selectedTags = tags => {
            //! add Tags into array Tags
            addToDataContext.forEach(each =>
                  {

                        return each.id === id ? (each.tag = (tags)) : each.tag}
                  )

      };
      const [toggleButton, setToggleButton] = useState(true);

      return (
            <Container  maxWidth="md">
                  <Row >
                        <Col xs={3} className="justify-content-md-center">
                        <Image src={src} roundedCircle height={170} />

                        </Col>
                        <Col xs={7}>
                              <Container >
                                    <Row className="name">{name}</Row>
                                    <Row>Email: {email}</Row>
                                    <Row>Company: {company}</Row>
                                    <Row>Skill: {skill}</Row>
                                    <Row>Average: {calculateAverage.toFixed(2)} %</Row>
                                    <Row>
                                          <Collapse in={open}>
                                                <ul>
                                                      {renderTestScore}
                                                </ul>
                                          </Collapse>
                                    </Row>
                                    <Row>
                                          <TagsInput selectedTags={selectedTags}/>
                                    </Row>
                              </Container>
                        </Col>
                        <Col xs={2} className="button-area">
                                    <button
                                          onClick={() => {
                                                toggleButton ? setToggleButton(false) : setToggleButton(true)
                                                setOpen(!open)
                                                }}
                                          aria-controls="example-collapse-text"
                                          aria-expanded={open}
                                          className ="button-toggle"
                                          >
                                          { toggleButton ? <AiOutlinePlus/> : <AiOutlineMinus/>}
                                    </button>
                        </Col>

                  </Row>

                  <Divider/>
            </Container>
      )
}
