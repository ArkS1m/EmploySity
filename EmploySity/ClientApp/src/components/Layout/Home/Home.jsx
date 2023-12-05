import React, { useEffect, useState } from 'react';
import { getUniversities } from "../../../services/universityService";
import { getWorkPlaces } from "../../../services/workPlaceService";
import { UniversityCard } from "../../UniversityCard/UniversityCard";
import { YandexMap } from "../../Map/YandexMap/YandexMap";
import SelectBox from "../../Basic/SelectBox/SelectBox";
import DefaultPopup from "../../Basic/DefaultPopup/DeafultPopup";
import "./Home.scss";

export default function Home () {
    const [universityListState, setUniversityListState] = useState([]);
    const [workPlaceListState, setWorkPlaceListState] = useState([]);
    const [selectedUniversity, setSelectedUniversity] = useState();
    const closeModal = () => setSelectedUniversity(null);
    const [mapState, setMapState] = useState();
    const [zoomState, setZoomState] = useState(17);
    
    const removeBalloon = () => {
        const removeBalloonButton = document.getElementsByClassName("ymaps-2-1-79-balloon__close-button")[0];
        if (removeBalloonButton !== undefined) {
            removeBalloonButton.click();
        }
    }

    const changeSelectedUniversity = (university) => {
        setSelectedUniversity(university);
        changeMapState(university);
    }
    
    const changeSelectedWorkPlace = (changeEventInfo) => {
        const selectedWorkPlaceId = changeEventInfo.target.value;
        const selectedWorkPlace = selectedWorkPlaceId
            ? workPlaceListState.find(workPlace => workPlace.id == selectedWorkPlaceId)
            : null;
        changeMapState(selectedWorkPlace);
    }
    
    const changeMapState = (geographicalObject, zoomValue = 17.0000001) => {
        removeBalloon()
        if (zoomState === zoomValue) {
            zoomValue -= 0.0000001;
        }
        
        setZoomState(zoomValue);
        const newMapState = {
            zoom: zoomState,
            center: [
                geographicalObject?.coordinateX,
                geographicalObject?.coordinateY
            ],
            controls: []
        }
        setMapState(newMapState);
    }
    
    useEffect(() => {
        getUniversities()
            .then((result) => {
                if (!result) {
                    result = [];
                }
                
                setUniversityListState(result);
            });
    }, []);
    
    useEffect(() => {
        if (!selectedUniversity) {
            return;
        }
        
        getWorkPlaces(selectedUniversity.id)
            .then((result) => {
                if (!result) {
                    result = [];
                }
                
                setWorkPlaceListState(result)
            });
    }, [selectedUniversity])
        
    return (
        <div
            id={"main"}
        >
            <div
                className={"university-cards-section"}
            >
                {universityListState.map((university) =>
                    <div
                        onClick={() => changeSelectedUniversity(university)}
                    >
                        <UniversityCard
                            universityName={university.name}
                            universityCountry={university.country}
                            universityLogoPicUrl={university.universityLogoPicUrl}
                            universityCountryPicUrl={university.countryPicUrl}
                        />
                    </div>
                )}
            </div>
            <DefaultPopup
                isOpened={!!selectedUniversity}
                onCloseHandler={closeModal}
                popupTitle={selectedUniversity?.name}
            >
                <div
                    className={"mapElements"}
                >
                    <SelectBox
                        selectBoxId={"workPlaceSelectBox"}
                        selectBoxClassName={"selectBox"}
                        isDisabled={workPlaceListState.length === 0}
                        changeHandler={changeSelectedWorkPlace}
                        isDefaultOptionNeeded={true}
                        defaultOptionValue={""}
                        isDefaultOptionSelected={true}
                        isDefaultOptionDisabled={true}
                        isDefaultOptionHidden={true}
                        defaultOptionLabel={"Места работы"}
                        options={workPlaceListState}
                        optionValueKey={"id"}
                        optionLabelKey={"name"}
                    />
                    <YandexMap
                        mapState={mapState}
                        workPlaceListState={workPlaceListState}
                    />
                </div>
            </DefaultPopup>
        </div>
    );
}

                                
