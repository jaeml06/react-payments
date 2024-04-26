import styled from 'styled-components';

const BottomButtonBox = styled.button`
background-color: black;
color: #FFFFFF;
  position: fixed;
  width: 100%;
  height: 10%;
  bottom: 0;
  font-size: 2rem;
`;

const DefaultButtonBox = styled.button`
  background-color: black;
  color: #FFFFFF;
  width: 100%;
  height: 50px;
`

interface Props {
  value: string;
  layoutType?: string;
  onClick? : (e? :  React.MouseEvent<HTMLElement>) => void
}

export default function BottomButton({ value, layoutType, onClick }: Props) {
  if(layoutType === 'bottom'){
    return <BottomButtonBox onClick={onClick}>{value}</BottomButtonBox>;
  } else {
    return <DefaultButtonBox onClick = {onClick}>{value}</DefaultButtonBox>;
  }
  
}