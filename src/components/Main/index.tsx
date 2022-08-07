import React, { ReactNode } from 'react'
import * as S from './styles'

const Main = ({ children }: { children: ReactNode }) => (
  <S.Container>{children}</S.Container>
)
export default Main
