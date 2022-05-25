import axios from "axios";

const instance = axios.create({
  //The API (Cloud function) URL
  baseURL: 'http://localhost:5000/project/clone-4600c/api'  

});

export default instance;