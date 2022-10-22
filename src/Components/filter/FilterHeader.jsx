const FilterHeader = ({ setShowForm }) => {
  return (
    <header className="space-between mb-3">
      <h2 className="h3">فلترة النتائج</h2>
      <section>
        <button
          className="link link--sec fs-3"
          type="button"
          onClick={() => setShowForm(false)}
        >
          اغلاق
        </button>
        <button className="link fs-3 mr-3" type="submit">
          تطبيق
        </button>
      </section>
    </header>
  );
};

export default FilterHeader;
