import { BasicData } from "@/models/BasicInfo";

export const getters = {
  getFeaturedBasicData(state: any): BasicData {
    return state.featured;
  },
  getArtBasicData(state: any): BasicData {
    return state.artsCrafts;
  },
  getSmallBasicData(state: any): BasicData {
    return state.smallSocial;
  },
  currentDataInfo(state: any): BasicData {
    return state.currentDataInfo[0];
  },
  getCategory(state: any): string {
    return state.category;
  },
};
