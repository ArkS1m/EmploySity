const UniversityAlias = "university";
const WorkPlaceAlias = "workPlace"

export const urls = {
    university: {
        GET_UNIVERSITIES: `api/${UniversityAlias}/getUniversities`
    },
    workPlace:  {
        GET_WORK_PLACES_BY_UNIVERSITY: `api/${WorkPlaceAlias}/getWorkPlacesByUniversityId`
    }
}