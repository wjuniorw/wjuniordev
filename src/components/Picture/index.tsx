import * as S from './styles'

const Picture = ({ img }) => (
  <S.CirclePicture>
    {/* <S.Picture src={img.src} /> */}
    <S.Picture src={img} />
  </S.CirclePicture>
)
export default Picture
