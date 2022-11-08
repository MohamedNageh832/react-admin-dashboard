const EditServicesTable = ({ services, children }) => {
  const header = ["الخدمة", "سعر الخدمة", "السعر لكل", "نوع الخدمة"];

  return (
    <section className="edit-services-table">
      <header className="edit-services-table__header">
        {header.map((cell, i) => (
          <span className="edit-services-table__heading" key={i}>
            {cell}
          </span>
        ))}
        {services.length > 1 && (
          <span className="edit-services-table__options"></span>
        )}
      </header>

      {children}
    </section>
  );
};

export default EditServicesTable;
