import { createStore } from "vuex";
import user from "./modules/user";
import data from "./modules/data";

export default createStore({
  modules: {
    user,
    data,
  },
});
