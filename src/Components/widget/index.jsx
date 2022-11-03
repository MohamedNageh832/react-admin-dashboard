const Widget = ({ className, children }) => {
  return (
    <section className={`widget  ${className ? className : ""}`}>
      {children}
    </section>
  );
};

export default Widget;
