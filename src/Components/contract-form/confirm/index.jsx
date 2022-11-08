import { useReducer } from "react";

import FormHeader from "../../form/FormHeader";
import ClientData from "./client-data";
import FormFooter from "./form-footer";
import Ajax from "../../../utils/Ajax";
import SpinnerLoader from "../../../Components/loaders";

const reducer = (state, action) => {
  switch (action.type) {
    case "isPending":
      return { ...state, isPending: true };
    case "error":
      return { ...state, isPending: false, error: true, success: false };
    case "success":
      return { ...state, isPending: false, error: null, success: true };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const intialState = {
  isPending: false,
  error: null,
};

const Confirm = ({ values, setCurrentStep }) => {
  const [{ isPending, error }, dispatch] = useReducer(reducer, intialState);
  const ajax = Ajax();
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "isPending" });
    const data = await ajax.post("", values);

    if (!data) {
      dispatch({ type: "error" });
      setCurrentStep("success");
    } else {
      dispatch({ type: "success" });
    }
  };

  return (
    <form className="form pos-center" onSubmit={handleSubmit}>
      <FormHeader subTitle="تأكيد البيانات">ادخال تعاقد جديد</FormHeader>
      {!error && (
        <SpinnerLoader isPending={isPending}>
          <ClientData values={values} />
          <FormFooter setCurrentStep={setCurrentStep} />
        </SpinnerLoader>
      )}

      {error && <div>حدث خطأ!</div>}
    </form>
  );
};

export default Confirm;
