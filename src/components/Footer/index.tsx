import * as S from './styles'

const Footer = () => (
  <S.FooterContainer>
    <S.FooterItemTop>
      <S.BackToTopBtn href='/#'>
        Ir para o topo <S.IconUp />
      </S.BackToTopBtn>
    </S.FooterItemTop>
    <S.FooterItemMiddle>
      Copyright © 2022 - Wilson Junior -
      <S.Email href='mailto:wjuniorwebdev@gmail.com'>
        wjuniorwebdev@gmail.com
      </S.Email>
    </S.FooterItemMiddle>
    <S.FooterItemBottom>
      <S.FootLink href='/#'>links</S.FootLink>
    </S.FooterItemBottom>
  </S.FooterContainer>
)

export default Footer
