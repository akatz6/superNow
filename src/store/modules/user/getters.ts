import { state } from "./state";

export const getters = {
  getName(state: any): any {
    return state.name;
  },
};
