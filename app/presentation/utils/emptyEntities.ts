import { Itinerary, Travel } from "@types";

export const emptyItinerary: Itinerary = {
  day: 1,
  location: "",
  description: "",
};

export const emptyTravel: Travel = {
  id: "",
  title: "",
  description: "",
  photo_url: "",
  status: "todo",
  itinerary: [emptyItinerary],
  introduction: "",
};
