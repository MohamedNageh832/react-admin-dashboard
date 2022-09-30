import { useState } from "react";
import { Link } from "react-router-dom";
import FormButton from "../../Components/FormButton";
import FormInput from "../../Components/FormInput";
import logo from "../../Assets/Images/logo.png";

import useFetch from "../../Hooks/useFetch";
import useAuth from "../../Hooks/useAuth";

const LoginPage = () => {
  const { isPending, error, excuteFetch } = useFetch("/as");
  const auth = useAuth();
  const [values, setValues] = useState({
    emailAddress: "",
    password: "",
  });

  const inputs = [
    {
      id: 0,
      name: "email",
      type: "email",
      label: "البريد الإليكتروني",
      errorMessage: "هذا الحقل مطلوب",
      required: true,
    },
    {
      id: 1,
      name: "password",
      type: "password",
      label: "كلمة المرور",
      errorMessage: "هذا الحقل مطلوب",
      required: true,
    },
  ];

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    };

    const response = await excuteFetch(requestOptions);

    if (response?.authenticated) auth.login(response);
  };

  return (
    <div className="wrapper login-wrapper">
      <form className="form form--login" onSubmit={handleSubmit}>
        <img className="form__img" src={logo} alt="logo" />
        {error && <div className="form__err">خطأ في تسجيل الدخول</div>}

        {inputs.map((input, i) => (
          <FormInput
            key={i}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <section>
          <FormButton
            text={"تسجيل الدخول"}
            color="green"
            isPending={isPending}
          />
          <Link className="form__link" to="">
            نسيت كلمة المرور
          </Link>
        </section>
      </form>
    </div>
  );
};

export default LoginPage;
