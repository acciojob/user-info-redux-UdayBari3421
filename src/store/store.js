import formReducer from "./reducers/formReducer";

import { createStore } from "redux";

const store = createStore(formReducer);
export default store;
