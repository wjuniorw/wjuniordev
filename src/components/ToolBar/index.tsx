import Link from 'next/link'
import * as S from './styles'


const ToolBar = () => (
  <S.ToolBarHeader>
    <S.ToolbarNav>
      <S.ToolbarLogo>
        <Link href="/">
          Wilson Junior
        </Link>
      </S.ToolbarLogo>
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
