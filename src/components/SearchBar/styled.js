import styled, {css} from 'styled-components'

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  width: 100%;
`

export const CustomInput = styled.div`
  position: relative;
  width: 623px;
  display: flex;
  align-items: center;
`

export const Input = styled.input`
  width: 100%;
  border-radius: 16px;
  padding-left: 64px;
  height: 56px;
  border: 2px solid #72768E;
  background-color: #14142B;
  font-size: 16px;
  font-weight: normal;
  line-height: 28px;
  letter-spacing: 0.75px;
  color: ${({isTyping}) => isTyping ? '#D9DBE9' : '#72768E'};

  &::placeholder {
    margin-left: 20px;
    color: #72768E;
  }

  &:focus {
    border: 2px solid #D9DBE9;
    outline: none;
  }
`


export const Button = styled.input`
  height: 56px;
  width: 97px;
  border-radius: 12px;
  font-weight: bold;
  font-size: 15px;
  color: #FCFCFC;
  margin-left: 16px;
  cursor: pointer;
  border: none;
  background: #4E00BB;

  &:hover {
    background: ${({disabled}) => disabled ? '#373B51' : '#610BEF'}
  }

  ${({disabled, isTyping}) => css`
    background: ${isTyping && '#350080'};
    background: ${disabled && '#373B51'};
  }
  `}
`;


export const SearchIcon = styled.div`
  mask-image: url(/icons/search.svg);
  width: 24px;
  height: 24px;
  position: absolute;
  left: 26px;
  background-color: ${({isFocus}) => isFocus ? '#D9DBE9' : '#72768E'};
`

export const CloseIcon = styled.div`
  background-color: ${({isTyping, isFocus}) => isTyping && isFocus ? '#D9DBE9' : '#72768E'};
  mask-image: url(/icons/close.svg);
  width: 12px;
  height: 12px;
  position: absolute;
  right: 24px;
`