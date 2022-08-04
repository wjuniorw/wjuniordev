import * as S from './styles'

const BackDrop = ({ closeDrawer }) => (
  <S.Backdrop onClick={() => closeDrawer()} />
)

export default BackDrop
