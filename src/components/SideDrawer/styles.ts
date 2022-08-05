import styled from 'styled-components'

interface INav {
  show: boolean
}

export const SideDrawerNav = styled.nav<INav>`
  top: 0;
  left: 0;
  width: 70%;
  z-index: 20;
  height: 100%;
  position: fixed;
  max-width: 400px;
  padding-top: 16px;
  background: #fafafa;
  0 1px 5px 0 rgba(0, 0, 0, 0.12);
  transition: transform 0.3s ease-out;
  transform: translateX(${({ show }) => (show ? '0' : '-100%')});
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2),
`
export const SideDrawerUl = styled.div`
  height: 100%;
  display: flex;
  list-style: none;
  flex-direction: column;
  align-items: space-betwin;
`
export const SideDrawerItem = styled.a`
  width: 100%;
  height: 50px;
  padding: 16px;
  color: #757575;
  font-size: 1.6rem;
  align-items: center;
  text-decoration: none;
  :hover,
  :active {
    background: #e0e0e0;
  }
`
