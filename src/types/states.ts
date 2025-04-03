
export interface StateInfo {
  name: string;
  description: string;
  heroImage: string;
  cities: string[];
  attractions: {
    name: string;
    location: string;
    description: string;
  }[];
  food: string[];
}

export interface StateData {
  [key: string]: StateInfo;
}

export const validStateIds = [
  "alabama",
  "alaska",
  "arizona", 
  "california", 
  "colorado",
  "florida",
  "georgia",
  "hawaii", 
  "new-york",
  "texas",
  "nevada"
];
