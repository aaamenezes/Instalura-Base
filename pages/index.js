import styled from 'styled-components'

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

const Title2 = ({ title, titla }) => {
  return <h1>{title}, {titla}</h1>
}

export default function Home() {
  return <Title2 title="Vamos lá" titla="de novo" />
}
