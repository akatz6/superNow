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
  resetFeaturedBasicData(state: any) {
    state.featured = [];
  },
  resetArtBasicData(state: any) {
    state.artsCrafts = [];
  },
  resetSmallSocial(state: any) {
    state.smallSocial = [];
  },
  getMoreData(state: any, payload: any) {
    state.currentDataInfo = [];
    switch (payload.category) {
      case "Featured":
        state.currentDataInfo.push(state.featured[payload.id]);
        break;
      case "Arts and Crafts":
        state.currentDataInfo.push(state.artsCrafts[payload.id]);
        break;
      case "Small Group Socials":
        state.currentDataInfo.push(state.smallSocial[payload.id]);
        break;
    }
  },
  setCategory(state: any, category: string) {
    state.category = category;
  },
  setBooking(state: any, payload: any) {
    switch (payload.category) {
      case "Featured":
        state.featured[payload.id].check = !state.featured[payload.id].check;
        break;
      case "Arts and Crafts":
        state.artsCrafts[payload.id].check =
          !state.artsCrafts[payload.id].check;
        break;
      case "Small Group Socials":
        state.smallSocial[payload.id].check =
          !state.smallSocial[payload.id].check;
        break;
    }
  },
};
