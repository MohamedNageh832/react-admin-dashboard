import useAuth from "../Hooks/useAuth";

const UserOptions = ({ show }) => {
  const user = useAuth();

  return (
    show && (
      <ul className="navbar__user-options">
        <li className="user-option">
          <small className="user-option__title">اسم المستخدم</small>
          <h3 className="user-option__info">{user.name}</h3>
        </li>
        <li className="user-option">
          <small className="user-option__title">الوظيفة</small>
          <h3 className="user-option__info">{user.job}</h3>
        </li>
        <li className="user-option">
          <button className="btn user-option__logout-btn" to="/login">
            تسجيل الخروج
          </button>
        </li>
      </ul>
    )
  );
};

export default UserOptions;
