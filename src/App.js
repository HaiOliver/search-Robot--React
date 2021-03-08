import React,{useState, useEffect,lazy, Suspense} from 'react';
import './App.css';
import Loading from './components/Loading/Loading-component';
import Container from 'react-bootstrap/Container'
import axios from 'axios';
import ErrorBoundary from './components/error-boundary/error';
import Row from 'react-bootstrap/Row'
import DataContext from './components/DataContext/contextData'

// ? Use React Lazy to improve performance
const CardList = lazy(()=>import('./components/ListCards/ListCard'))
const SearchBox = lazy(()=>import('./components/SearchBox/Search-Box'))
const Scroll = lazy(()=>import('./components/Scroll/Scroll'))

function App() {
  const [dataRobot,setDataRobot] = useState([])
  const [loading,setLoading] = useState(true)
  const [searchBox, setSearchBox] = useState('')
  const [searchTag, setSearchTag] = useState('')

	useEffect(()=>{
		const fetch_data_from_API = async ()=>{
            let response = await axios.get('https://api.hatchways.io/assessment/students');

            // ? Add 1 more props
            addTagProps(response.data.students)

            // ! set state here

            setDataRobot( response.data.students);
            setLoading(false)
		}
	fetch_data_from_API();

	},[])


  const addTagProps = (arr) => arr.forEach(each =>
                        { each['tag'] = []

                          }
                        )

  const handleSearchByName = (event) => {
        // ! set search Field
        setSearchBox(event.target.value)
  }

    const searchByFirstName = (card) => card.firstName.toLowerCase().includes(searchBox.toLowerCase())

  const searchByLastName = (card) => card.lastName.toLowerCase().includes(searchBox.toLowerCase())


  const searchByLastNameOrFirstName = (card) => searchByFirstName(card)|| searchByLastName(card)



  const handleSearchByTag = (event) => {
        // ! set search by Tag
        setSearchTag(event.target.value)
  }

  const checkTagInsideCard = (arr) => {
      var found = arr.find(eachTag => {
        return eachTag.toLowerCase().includes(searchTag.toLowerCase())
        })
      return  found || "not found tag"
  }

  const filteredCardByName = dataRobot.filter(card => {
              return searchByLastNameOrFirstName(card)
          }
      )

  const filteredCardByTag = filteredCardByName.filter(card => {
        var searchByTag = checkTagInsideCard(card.tag) !== 'not found tag' ? true : false
        return searchByTag
  })

  return (
    <DataContext.Provider value={dataRobot}>
          <ErrorBoundary>
            <Suspense fallback={<Loading/>}>

          <Container className="container">
              {loading
              ?(<Loading/>)
              :(
                  <Container>
                    <Row>
                      {/* search Box by Name */}
                      <SearchBox searchChange={handleSearchByName} name={"Search By Name"} />
                    </Row>
                    <Row>
                      {/* search Box by Tag */}
                        <SearchBox searchChange={handleSearchByTag} name={"Search By Tag"} />
                    </Row>
                    <Row>
                      {/* Main content */}
                      <Scroll>
                        {filteredCardByTag.length === 0
                            ? (<CardList dataAfterFilter={ filteredCardByName  }/>)
                            : (<CardList dataAfterFilter={ filteredCardByTag  }/>)
                        }
                      </Scroll>




                    </Row>
                  </Container>

              )}

          </Container>
          </Suspense>
          </ErrorBoundary>
      </DataContext.Provider>


  );
}

export default App;
