import React from "react";
import { useDispatch } from "react-redux";
import { initializeList } from "../../store/saga/saga";

const Posts = () => {
  const dispatch = useDispatch();
  const click = () => {
    dispatch({ type: "INITIALIZE_LIST_FETCH", list: [123] });
  };
  return (
    <div>
      <button onClick={click}>asd</button>
    </div>
  );
};

export default Posts;
