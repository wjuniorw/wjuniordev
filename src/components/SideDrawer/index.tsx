import { useContext } from 'react'
import Link from 'next/link'
import * as S from './styles'

import { ApplicationCtx } from 'context'

const SideDrawer = () => {
  const { opened } = useContext(ApplicationCtx)

  return (
    <S.SideDrawerNav show={opened}>
      <S.SideDrawerUl>
        <Link href='/' passHref>
          <S.SideDrawerItem>Home</S.SideDrawerItem>
        </Link>
        <Link href='/projetos' passHref>
          <S.SideDrawerItem>Blog</S.SideDrawerItem>
        </Link>
        <Link href='/projetos' passHref>
          <S.SideDrawerItem>Projetos</S.SideDrawerItem>
        </Link>
        <Link href='/skills' passHref>
          <S.SideDrawerItem>Portifolio</S.SideDrawerItem>
        </Link>
        <Link href='/skills' passHref>
          <S.SideDrawerItem>Skills</S.SideDrawerItem>
        </Link>
        <Link href='/about' passHref>
          <S.SideDrawerItem>Sobre mim</S.SideDrawerItem>
        </Link>
      </S.SideDrawerUl>
    </S.SideDrawerNav>
  )
}
export default SideDrawer
