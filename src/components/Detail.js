import React from 'react'
import styled from 'styled-components'

function Detail() {
  return (
    <Container>
        <Background>
            <img src=''></img>
        </Background>
    </Container>
  )
}

export default Detail

const Container= styled.div`
    min-height: calc(100vh-70px);
    padding: 0 calc(3.5vw + 5px);    
`

const Background=styled.div;