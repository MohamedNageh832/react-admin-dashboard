const LoaderWidget = ({ isPending, className, children }) => {
  return (
    <section className={`widget loader-widget ${className ? className : ""}`}>
      {isPending && (
        <div className="overlay overlay--loading">
          <span className="spinner"></span>
        </div>
      )}
      {children}
    </section>
  );
};

export default LoaderWidget;
