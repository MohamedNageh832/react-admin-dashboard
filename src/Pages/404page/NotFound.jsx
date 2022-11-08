import notFoundSvg from "../../Assets/svg/404.svg";

const NotFound = () => {
  return (
    <div className="not-found">
      <img className="not-found__img" src={notFoundSvg} alt="404" />
      <p className="fs-3 mt-5">عذرا لم نستطع ايجاد الصفحة التي تبحث عنها</p>
      <a className="link fs-3" href="https://www.aswangreen.com">
        العودة للرئيسية
      </a>
    </div>
  );
};

export default NotFound;
