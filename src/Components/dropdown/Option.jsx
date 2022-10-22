const Option = ({ icon, children, onClick }) => {
  return (
    <li className="dropdown__item">
      {icon}
      <button onClick={onClick}>{children}</button>
    </li>
  );
};

export default Option;
