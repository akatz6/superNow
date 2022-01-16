import { createStore } from "vuex";
import data from "./modules/data";

export default createStore({
  modules: {
    data,
  },
});
