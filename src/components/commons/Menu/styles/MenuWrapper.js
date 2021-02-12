import styled from 'styled-components'

export const MenuWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 18px;
  padding-right: 28px;
  padding-left: 28px;
`

MenuWrapper.LeftSide = styled.div`
  padding: 0;
  margin: 0;
  order: 1;
`

MenuWrapper.CentralSide = styled.div`
  order: 3;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 17px 0 0;
  padding: 12px;
  border-top: 1px solid #88989E;
  border-bottom: 1px solid #88989E;
  list-style: none;

  a {
    display: block;
    text-align: center;
    text-decoration: none;
    color: #88989E;
    transition: ${ ({theme}) => theme.transitions.fast };

    &:hover, &:focus {
      color: #070C0E;
    }
  }
`

MenuWrapper.RightSide = styled.div`
  order: 2;
  display: flex;
  justify-content: flex-end;
  flex: 1;
  padding: 0;
  margin: 0;
`
