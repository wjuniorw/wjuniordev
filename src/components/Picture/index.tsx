import * as S from './styles'

import { Img } from 'types'
interface IPicture {
  img: Img
}

const Picture = ({ img }: IPicture) => (
  <S.CirclePicture>
    {/* <S.Picture src={img.src} /> */}
    <S.Picture src={img} />
  </S.CirclePicture>
)
export default Picture
