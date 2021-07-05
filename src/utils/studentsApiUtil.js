import axios from 'axios';

export const fetchAllStudents = async () => {
  return axios.get("https://api.hatchways.io/assessment/students");
};