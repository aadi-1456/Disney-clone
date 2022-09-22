import React from 'react'
import styled from 'styled-components'

function Movies() {
  return (
    <Container>
        <h4>Recommended for You</h4>
        <Content>
            <Wrap>
                <img src='https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_2_5x/sources/r1/cms/prod/1288/571288-h'></img>
            </Wrap>
            <Wrap>
                <img src='https://images.hindustantimes.com/tech/img/2021/07/31/960x540/bhuj-the-pride-of-india_1200x768_1627719597206_1627719602352.jpeg'></img>
            </Wrap>
            <Wrap>
                <img src='https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/1331/641331-h'></img>
            </Wrap>
            <Wrap>
                <img src='https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/8372/818372-h'></img>
            </Wrap>
            <Wrap>
                <img src='https://img1.hotstarext.com/image/upload/f_auto,t_hcdl/sources/r1/cms/prod/6237/1296237-h-5662015305e4'></img>
            </Wrap>
            <Wrap>
                <img src='https://img1.hotstarext.com/image/upload/f_auto,t_hcdl/sources/r1/cms/prod/4427/674427-h'></img>
            </Wrap>
            <Wrap>
                <img src='https://img1.hotstarext.com/image/upload/f_auto,t_hcdl/sources/r1/cms/prod/3527/923527-h'></img>
            </Wrap>
            <Wrap>
                <img src='https://img.youtube.com/vi/Bw6I-KgCSP4/sddefault.jpg'></img>
            </Wrap>
        </Content>
    </Container>
  )
}

export default Movies

const Container= styled.div`

`

const Content=styled.div`
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(4, minmax(0,1fr));
`

const Wrap=styled.div`
    border-radius: 10px;
    overflow: hidden;
    border: 3px solid rgba(249,249,249,0.8);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s; 

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    &:hover{
        cursor: pointer;
        transform: scale(1.05);
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        border-color: rgba(249,249,249,0.8);
    }
`