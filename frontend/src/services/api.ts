import axios from "axios";

const api = axios.create({

baseURL:
"https://portfolio-backend-tdcs.onrender.com/api"

});

export default api;