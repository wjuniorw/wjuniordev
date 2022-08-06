import styled from 'styled-components'

export const ToggleDrawer = styled.button`
  @media (min-width: 769px) {
    ${'' /* display: none; */}
  }
  :focus {
    outline: none;
  }
  width: 30px;
  height: 24px;
  border: none;
  display: flex;
  cursor: pointer;
  flex-direction: column;
  background: transparent;
  justify-content: space-around;
`

export const ButtonLine = styled.div`
  width: 25px;
  height: 2px;
  background: #fff;
`
