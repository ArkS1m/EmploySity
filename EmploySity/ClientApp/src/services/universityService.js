import {getMethod} from "./baseService";
import {urls} from "../utils/constants";

export const getUniversities = () => {
    return getMethod(urls.university.GET_UNIVERSITIES);
}