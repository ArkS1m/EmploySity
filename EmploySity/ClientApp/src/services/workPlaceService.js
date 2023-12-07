import {getMethod} from "./baseService";
import {urls} from "../utils/constants";
import {create} from "./factoryService";

export const workPlaceTemplate = () => {
    return {
        id: null,
        coordinateX: null,
        coordinateY: null,
        name: null,
        conditions: null,
        description: null
    }
}

export const getWorkPlaces = (universityId) => {
    return getMethod(urls.workPlace.GET_WORK_PLACES_BY_UNIVERSITY, universityId)
        .then(result => create(workPlaceTemplate, result));
}