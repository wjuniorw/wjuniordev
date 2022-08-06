import styled from 'styled-components'

export const IntroContainer = styled.section`
  width: 100%;
  height: 95vh;
  display: flex;
  margin-top: 25px;
  align-items: center;
  flex-direction: column;
  ${'' /* background: #e0e0e0; */}
  background: rgb(24, 188, 156) none repeat scroll 0% 0% / cover;
`
export const IntroHeader = styled.header`
  width: 100%;
  height: 14%;
  margin-top: 30px;
  padding-top: 30px;
  background: #2c3e50;
  align-items: center;
  margin-bottom: 100px;
  justify-content: center;
`

export const IntroTitle = styled.h2`
  font-size: 56px;
  text-align: center;
  font-family: 'Open Sans', sans-serif;
  @media (max-width: 769px) {
    font-size: 32px;
  }
`
