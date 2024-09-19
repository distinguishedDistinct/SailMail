export const Alert = (props: { name: string }) => {
  const MyStyle = {
    width: 200,
  };

  return (
    <>
      <div className="alert alert-warning" role="alert" style={MyStyle}>
        {props.name}
      </div>
    </>
  );
};
export default Alert;
