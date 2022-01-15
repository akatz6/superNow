import { BasicData } from "@/models/BasicInfo";

export const state = () => ({
  featured: [] as BasicData[],
  artsCrafts: [] as BasicData[],
  smallSocial: [] as BasicData[],
  currentDataInfo: [] as BasicData[],
  category: "" as string,
});
