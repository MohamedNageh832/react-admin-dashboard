const ConfirmPrint = ({ onSubmit, children }) => {
  return <form onSubmit={onSubmit}>{children}</form>;
};

export default ConfirmPrint;
