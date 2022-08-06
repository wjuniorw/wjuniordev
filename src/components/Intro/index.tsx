
import * as S from './styles'
import { Picture } from 'components'

import img from 'assets/wjuniorw.png'

const IntroSection = () => {
  img.height = '280px'
  img.width = '280px'
  return (
    <S.IntroContainer>
      <S.IntroHeader>
        <S.IntroTitle>
          {/* Devsenvolvedor Independente */}
          {/* Indie Developer */}
          Full-Stack Developer
        </S.IntroTitle>
      </S.IntroHeader>
      <Picture img={img} />
    </S.IntroContainer>
  )
}

export default IntroSection
