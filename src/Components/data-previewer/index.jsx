import { Children } from "react";
import { cloneElement } from "react";
import { createContext, useReducer, useContext } from "react";
import Controls from "./controls";
import Modal from "./modal";
import CodePreview from "./modal/code-preview";
import PreviewButton from "./preview-btn";
import "./style.css";

const intialState = {
  data: null,
  isPending: false,
  error: null,
  showModal: false,
  dataSent: null,
  dataReceived: null,
};

const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "loading":
      return { ...intialState, isPending: true };
    case "show-modal":
      return { ...intialState, showModal: true };
    case "hide-modal":
      return { ...state, showModal: false };
    case "update-data":
      return { ...state, ...payload };
    case "simulate-date-received":
      return { ...intialState, ...payload };
    case "error":
      return { intialState, error: "Failed to fetch!" };
    default:
      return state;
  }
};

const PreviewerContext = createContext(intialState);

const DataPreviewer = ({ children, dataSent, dataReceived }) => {
  const intialValues = { ...intialState, dataSent, dataReceived };
  const [state, dispatch] = useReducer(reducer, intialValues);

  const showModal = () => dispatch({ type: "show-modal" });
  const hideModal = () => dispatch({ type: "hide-modal" });

  const updateData = (dataSent, dataReceived) => {
    const payload = {
      showModal: true,
      dataSent: dataSent ? dataSent : state.dataSent,
      dataReceived: dataReceived ? dataReceived : state.dataReceived,
    };

    dispatch({ type: "update-data", payload });
  };

  const simulateDataReceived = () => {
    dispatch({ type: "loading" });

    setTimeout(
      () =>
        dispatch({
          type: "simulate-date-received",
          payload: { data: state.dataReceived },
        }),
      1000
    );
  };

  const simulateError = () => {
    dispatch({ type: "error" });
  };

  const data = [
    {
      title: "Data sent to server",
      data: state.dataSent
        ? JSON.stringify(state.dataSent, null, 4)
        : "Get request",
    },
    {
      title: "Data received from server",
      data: JSON.stringify(state.dataReceived, null, 4),
    },
  ];

  const controlActions = { simulateDataReceived, simulateError, hideModal };

  const value = { ...state, showModal, updateData };

  return (
    <PreviewerContext.Provider value={value}>
      {children}
      {state.showModal && (
        <>
          <div className="previewer__overlay" onClick={hideModal}></div>
          <Modal>
            {data.map((item, i) => (
              <CodePreview key={i} {...item} />
            ))}
            <Controls actions={controlActions} />
          </Modal>
        </>
      )}
    </PreviewerContext.Provider>
  );
};

export const usePreviewer = () => {
  const context = useContext(PreviewerContext);

  if (!context)
    throw Error(
      "usePreviewer must be used in the same file of PreviewerContext"
    );

  return context;
};

export default DataPreviewer;
