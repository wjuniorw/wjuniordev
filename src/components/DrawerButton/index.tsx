import { useContext } from 'react'
import * as S from './styles'

import { ApplicationCtx } from 'context'
interface IDrawerButton {
  click: () => void
}

const DrawerButton = () => {
  const { toggleDrawer } = useContext(ApplicationCtx)
  return (
    <S.ToggleDrawer onClick={toggleDrawer}>
      <S.ButtonLine />
      <S.ButtonLine />
      <S.ButtonLine />
    </S.ToggleDrawer>
  )
}
export default DrawerButton
