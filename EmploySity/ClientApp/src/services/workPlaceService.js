import {getMethod} from "./baseService";
import {urls} from "../utils/constants";

export const getWorkPlaces = (universityId) => {
    return getMethod(urls.workPlace.GET_WORK_PLACES_BY_UNIVERSITY, universityId);
}