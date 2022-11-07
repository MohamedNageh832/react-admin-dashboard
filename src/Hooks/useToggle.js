import { useReducer } from "react";

const toggleReducer = (state, action) => {
  switch (action.type) {
    case "toggle":
      return { on: !state.on };
    case "on":
      return { on: true };
    case "off":
      return { on: false };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const useToggle = ({ reducer = (state, action) => action.changes } = {}) => {
  const [{ on }, dispatch] = useReducer(
    (state, action) => {
      const changes = toggleReducer(state, action);
      return reducer(state, { ...action, changes });
    },
    { on: false }
  );

  const toggle = () => dispatch({ type: "toggle" });
  const setOn = () => dispatch({ type: "on" });
  const setOff = () => dispatch({ type: "off" });

  return { on, toggle, setOn, setOff };
};

export default useToggle;
