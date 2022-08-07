import styled from 'styled-components'

export const IntroContainer = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  margin-top: 25px;
  align-items: center;
  flex-direction: column;
  background: ${({ theme }) => theme.intro.background};
`
export const IntroHeader = styled.header`
  width: 100%;
  height: 14%;
  margin-top: 30px;
  padding-top: 30px;
  align-items: center;
  margin-bottom: 100px;
  justify-content: center;
  background: ${({ theme }) => theme.intro.header.background};
`

export const IntroTitle = styled.h2`
  font-size: 56px;
  text-align: center;
  font-family: ${({ theme }) => theme.intro.title.font};
  @media (max-width: 769px) {
    font-size: 32px;
  }
`
