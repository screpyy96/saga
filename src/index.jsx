import { render } from "react-dom";
import { Provider } from "react-redux";
import Posts from "./component/post";
import store from "./store/store";

const posts = (
  <Provider store={store}>
    <Posts />
  </Provider>
);
const here = document.querySelector("#here");

render(posts, here);
