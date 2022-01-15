import { BasicData } from "@/models/BasicInfo";

export const mutations = {
  setFeaturedBasicData(state: any, payload: BasicData) {
    state.featured.push(payload);
  },
  setArtBasicData(state: any, payload: BasicData) {
    state.artsCrafts.push(payload);
  },
  setSmallSocial(state: any, payload: BasicData) {
    state.smallSocial.push(payload);
  },
};
