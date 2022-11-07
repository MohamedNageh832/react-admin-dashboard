const CreateContractBtn = ({ onClick }) => {
  return (
    <section className="create-contracts">
      <button className="btn btn--blue" onClick={onClick}>
        ادخال تعاقد جديد
      </button>
    </section>
  );
};

export default CreateContractBtn;
