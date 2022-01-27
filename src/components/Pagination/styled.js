import styled from 'styled-components'

export const Button = styled.button`
  min-width: 57px;
  height: 56px;
  border-radius: 12px;
  border: none;
  font-weight: bold;
  font-size: 15px;
  cursor: pointer;
  color: #FCFCFC;
  margin-left: 16px;

  &:first-child {
    margin-left: 0;
  }

  &:hover {
    background: ${({isActive}) => isActive ? '#373B51' : '#610BEF'};
  }

  background: ${({isActive}) => isActive ? '#373B51' : '#4E00BB'};
`

export const Wrapper = styled.div`
  display: ${({showPagination}) => showPagination ? 'flex' : 'none'};
  width: 100%;
  overflow-x: scroll;
  margin-top: 48px;
  justify-content: ${({justifyContent}) => justifyContent};
`
