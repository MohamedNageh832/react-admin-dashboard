const SpinnerLoader = ({ isPending, className, children }) => {
  return (
    <section className={`loader--spinner ${className ? className : ""}`}>
      {isPending && (
        <div className="overlay overlay--loading">
          <span className="spinner"></span>
        </div>
      )}
      {children}
    </section>
  );
};

export default SpinnerLoader;
