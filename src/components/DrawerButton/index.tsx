import * as S from './styles'

interface IDrawerButton {
  click: () => void;
}

const DrawerButton = ({ click }: IDrawerButton) => (
  <S.ToggleDrawer onClick={click}>
    <S.ButtonLine />
    <S.ButtonLine />
    <S.ButtonLine />
  </S.ToggleDrawer>
)

export default DrawerButton
