import Link from 'next/link'
import * as S from './styles'

interface ISideDrawer {
  show: boolean
}

const SideDrawer = ({ show }: ISideDrawer) => (
  <S.SideDrawerNav show={show}>
    <S.SideDrawerUl>
      <S.SideDrawerItem>
        <Link href='/projetos'>Projetos</Link>
      </S.SideDrawerItem>
      <S.SideDrawerItem>
        <Link href='/skills'>Skills</Link>
      </S.SideDrawerItem>
      <S.SideDrawerItem>
        <Link href='/about'>Sobre mim</Link>
      </S.SideDrawerItem>
    </S.SideDrawerUl>
  </S.SideDrawerNav>
)
export default SideDrawer
