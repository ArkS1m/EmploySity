import {getMethod} from "./baseService";
import {urls} from "../utils/constants";

export const getWorkPlaces = () => {
    return getMethod(urls.workPlace.GET_WORK_PLACES);
}