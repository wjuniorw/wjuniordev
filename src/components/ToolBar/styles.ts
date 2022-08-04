import styled from 'styled-components'

export const ToolBarHeader = styled.header`
  top: 0;
  left: 0;
  width: 100%;
  height: 56px;
  position: fixed;
  background: #2c3e50;
  font-family: Roboto,Helvetica,Arial,sans-serif;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12);
`

export const ToolbarNav = styled.nav`
  height: 100%;
  display: flex;
  padding: 0 1rem;
  font-size: 1.5rem;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 769px) {
    justify-content: flex-start;
  }
`


export const ToolbarLogo = styled.div`
  margin-left: 1rem;
  @media (min-width: 769px) {
    margin-left: 0;
  }
  a {
    color: #64ffda;
    font-size: 2rem;
    text-decoration: none;
  }
`

export const ToolbarNavItens = styled.div`
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
  }
  li {
    padding: 0 0.5rem;
  }
  a {
    color: #fff;
    text-decoration: none;
  }
  a:hover, a:active {
    color: rgb(3, 231, 255);
  }
  @media (max-width: 768px) {
    display: none;
  }
`
