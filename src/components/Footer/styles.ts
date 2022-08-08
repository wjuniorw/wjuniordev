import Link from 'next/link'
import styled from 'styled-components'
import { ChevronUp } from '@styled-icons/boxicons-solid'

export const FooterContainer = styled.footer`
  width: 100%;
  display: 'flex';
  font-size: 1.5rem;
  padding: 16px 40px;
  flex-direction: column;
  color: ${({ theme }) => theme.footer.text};
  background: ${({ theme }) => theme.footer.background};
`
export const FooterItem = styled.div`
  width: 100%;
  display: flex;
  line-height: 36px;
  margin-bottom: 16px;
  flex-direction: row;
`

export const FooterItemTop = styled(FooterItem)`
  justify-content: flex-end;
`
export const FooterItemMiddle = styled(FooterItem)`
  justifycontent: flex-start;
`
export const FooterItemBottom = styled(FooterItem)`
  justifycontent: flex-start;
`

export const FootLink = styled.a`
  color: ${({ theme }) => theme.footer.secondLink};
`

export const BackToTopBtn = styled.a``
export const Email = styled.a`
  margin-left: 5px;
  color: ${({ theme }) => theme.footer.link};
`

export const IconUp = styled(ChevronUp)`
  width: 20px;
  color: ${({ theme }) => theme.footer.text};
`
