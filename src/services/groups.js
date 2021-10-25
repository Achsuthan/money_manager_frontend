import instance from "@/services/instance.js";
const getAllGroups = (payload) => {
  return instance.instance
    .get("/create-group?userId=" + payload.userId)
    .then(function(response) {
      return response;
    })
    .catch((error) => {
      if (error.response.data.message) {
        throw new Error(error.response.data.message);
      }
    });
};
export default {
  getAllGroups: getAllGroups,
};