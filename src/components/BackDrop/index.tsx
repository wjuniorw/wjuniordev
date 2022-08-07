import { ApplicationCtx } from 'context'
import { useContext } from 'react'
import * as S from './styles'

const BackDrop = () => {
  const { opened, toggleDrawer } = useContext(ApplicationCtx)
  if (!opened) {
    return null
  }
  return <S.Backdrop onClick={() => toggleDrawer} />
}

export default BackDrop
