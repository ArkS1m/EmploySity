import {getMethod} from "./baseService";
import {urls} from "../utils/constants";
import {create} from "./factoryService";

export const universityTemplate = () => {
    return {
        id: null,
        name: null,
        country: null,
        universityLogoPicUrl: null,
        countryPicUrl: null,
        coordinateX: null,
        coordinateY: null
    }
}

export const getUniversities = () => {
    return getMethod(urls.university.GET_UNIVERSITIES)
        .then(result => create(universityTemplate, result));
}