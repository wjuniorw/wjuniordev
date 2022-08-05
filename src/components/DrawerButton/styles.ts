import styled from 'styled-components'

export const ToggleDrawer = styled.button`
  @media (min-width: 769px) {
    ${'' /* display: none; */}
  }
  :focus {
    outline: none;
  }
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 24px;
  width: 30px;
  border: none;
  cursor: pointer;
  background: transparent;
`

export const ButtonLine = styled.div`
  width: 30px;
  height: 2px;
  background: #fff;
`
