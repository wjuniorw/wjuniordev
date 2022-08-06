import Image from 'next/image'
import styled from 'styled-components'

export const CirclePicture = styled.div`
  width: 300px;
  border: none;
  height: 300px;
  padding: 10px;
  border-radius: 100%;
  background-color: #2c3e50;
`
// export const Picture = styled.img`
export const Picture = styled(Image)`
  border: none;
  width: 280px;
  height: 280px;
  padding: 10px;
  position:relative;
  border-radius: 50%;
  background: #22bed9;
  background-size: contain;
`
