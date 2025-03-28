interface Props {
  children: string;
  is_highlight?: boolean;
}

function Button({ children, is_highlight = false }: Props) {
  return (
    <>
      <button
        type="button"
        className={
          is_highlight ? "bnt_deafult bnt_deafult-highlight" : "bnt_deafult"
        }
      >
        {children}
      </button>
    </>
  );
}

export default Button;
