import { useEffect, useState } from 'react'
import './App.css'
import { getApi } from './utils/getApi'
import styled from 'styled-components'

function App() {

  const [apiData, setApiData] = useState<string>("")

  useEffect(() => {
    const fetchApi = async () => {
      const data = await getApi();
      if (data) {
        console.log("DATA", data)
        setApiData(data)
      } else {
        console.log("Error charging data.")
      }
    }

    fetchApi()

  }, [])



  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <h1>RICK AND MORTY</h1>
      </div>
      <Div>
        <MainCard>
          <img width={250} height={200} alt='Characters' src='https://rickandmortyapi.com/api/character/avatar/1.jpeg' />
          <h3>Characters</h3>
        </MainCard>
        <MainCard>
          <img width={250} height={200} alt='Locations' src='https://www.looper.com/img/gallery/the-most-disturbing-dimension-ever-visited-on-rick-and-morty/the-dimension-known-as-buttworld-1573075311.jpg' />
          <h3>Locations</h3>
        </MainCard>
        <MainCard>
          <img width={250} height={200} alt='Episodes' src='https://upload.wikimedia.org/wikipedia/en/b/b8/Rick_and_Morty_season_1.png' />
          <h3>Episodes</h3>
        </MainCard>
      </Div>
    </>
  )
}

export default App


const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
  }

  :hover {
    cursor: pointer;
   }
`

const MainCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 300px;
  background-color: aliceblue;
  border-radius: 15px;

  img {
    /* width: 250px;
    height: 250px; */
    padding-top: 15px;
    object-fit: cover;
  }

  h3 {
    color: black;
    font-weight: 800;
  }
`