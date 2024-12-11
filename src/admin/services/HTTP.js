// This file to create axios instance
//=> API root
// BASE_API for common

import axios from "axios";
import { BASE_API } from "../shared/constant/app";
const HTTP = axios.create({
    baseURL : BASE_API,
});

export default HTTP;
