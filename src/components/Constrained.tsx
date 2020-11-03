export default (props) => {
  return (
    <div
      {...props}
      style={{
        margin: `0 auto`,
        maxWidth: "60rem",
        padding: `1.45rem 1.0rem`,
        ...props.style,
      }}
    />
  );
};
