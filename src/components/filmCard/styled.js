import styled from 'styled-components'

export const Card = styled.div`
  width: 232px;
  min-height: 412px;
  margin-top: 26px;
  margin-right: 20px;
  position: relative;
`

export const Type = styled.div`
  font-size: 12px;
  letter-spacing: 1px;
  color: #72768E;
  margin-top: 16px;
`
export const Title = styled.div`
  font-weight: bold;
  font-size: 18px;
  max-width: 232px;
  color: #FFFFFF;
  margin-top: 8px;
`

export const Img = styled.img`
  width: 232px;
  height: 348px;
  border-radius: 16px;
`

export const Badge = styled.div`
  position: absolute;
  width: 59px;
  height: 33px;
  right: 16px;
  top: 16px;
  border-radius: 6px;
  color: #FFFFFF;
  font-weight: bold;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({color}) => color};
`

export const WithoutPoster = styled.div`
  background: url(/icons/altImg.svg) #373B51 center center no-repeat;
  width: 232px;
  height: 348px;
  border-radius: 16px;
`