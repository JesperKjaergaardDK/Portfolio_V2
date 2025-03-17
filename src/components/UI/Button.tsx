
interface Props {
  children: string;
  isHighlight?: boolean;
}

function Button({children, isHighlight = false}: Props) {
  return <>
    <button className={isHighlight ? 'btnHighlight' : 'bntDeafult'} >{children}</button> 
  </>;
}

export default Button;
