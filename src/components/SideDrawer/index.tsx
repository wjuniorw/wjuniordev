import { useContext } from 'react'
import Link from 'next/link'
import * as S from './styles'

import { ApplicationCtx } from 'context'

const SideDrawer = () => {
  const { opened } = useContext(ApplicationCtx)

  return (
    <S.SideDrawerNav show={opened}>
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
}
export default SideDrawer
