import Link from 'next/link'
import * as S from './styles'

import { DrawerButton } from 'components'

const ToolBar = () => (
  <S.ToolBarHeader>
    <S.ToolbarNav>
      <div style={{ display: 'flex' }}>
        <DrawerButton />
        <S.ToolbarLogo>
          <Link href="/">
            WILSON JUNIOR
          </Link>
        </S.ToolbarLogo>
      </div>
      <S.ToolbarNavItens>
        <ul>
          <li>
            <Link href="/projects">
              Projetos
            </Link>
          </li>
          <li>
            <Link href="/skills">
              Skills
            </Link>
          </li>
          <li>
            <Link href="/about">
              Sobre mim
            </Link>
          </li>
        </ul>
      </S.ToolbarNavItens>
    </S.ToolbarNav>
  </S.ToolBarHeader>
)

export default ToolBar
