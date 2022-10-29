const TableWidget = ({ isPending, className, children }) => {
  return (
    <section className={`widget widget--table ${className ? className : ""}`}>
      {isPending && (
        <div className="overlay overlay--loading">
          <span className="spinner"></span>
        </div>
      )}
      {children}
    </section>
  );
};

export default TableWidget;
