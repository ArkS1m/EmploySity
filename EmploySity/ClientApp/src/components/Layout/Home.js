import React, {useEffect, useState} from 'react';
import {getUniversities} from "../../services/universityService";
import {getWorkPlaces} from "../../services/workPlaceService";
import {UniversityCard} from "../UniversityCard";
import {YandexPlaceMark} from "../YandexPlaceMark";
import {FullscreenControl, Map, YMaps} from "@pbe/react-yandex-maps";

import "../../styles/Layout/Home.scss";
import Popup from "reactjs-popup";

export default function Home () {
    const [universityListState, setUniversityListState] = useState([]);
    const [workPlaceListState, setWorkPlaceListState] = useState([]);
    const [selectedUniversity, setSelectedUniversity] = useState();
    const closeModal = () => setSelectedUniversity(null);
    const [mapState, setMapState] = useState();
    const [zoomState, setZoomState] = useState(17);
    
    const removeBalloon = () => {
        const removeBalloonButton = document.getElementsByClassName("ymaps-2-1-79-balloon__close-button")[0];
        if (removeBalloonButton !== undefined)
            removeBalloonButton.click();
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
                setUniversityListState(result);
            });
        }, []
    );
    
    useEffect(() => {
        if (!selectedUniversity) {
            return;
        }
        
        getWorkPlaces(selectedUniversity.id)
            .then((result) => {
                setWorkPlaceListState(result)
            });
    }, [selectedUniversity])
        
    return (
        <div id={"main"}>
            <div id={"university-cards-section"}>
                {universityListState.map((university) =>
                    <div onClick={() => changeSelectedUniversity(university)}>
                        <UniversityCard
                            universityName={university.name}
                            universityCountry={university.country}
                            universityLogoPicUrl={university.unversityLogoPicUrl}
                            universityCountryPicUrl={university.countryPicUrl}
                        ></UniversityCard>
                    </div>
                )}
            </div>
            <Popup 
                open={!!selectedUniversity}
                onClose={closeModal}
            >
                <div className={"mapPopupTitle"}>
                    {selectedUniversity?.name}
                </div>
                <div 
                    id={"mapElements"}
                >
                    <div
                        id={"mapSelectBox"}
                    >
                        <select
                            id={"workPlaceSelectBox"}
                            className={"selectBox"}
                            disabled={workPlaceListState.length === 0}
                            onChange={(e) => changeSelectedWorkPlace(e)}
                        >
                            <option value="" selected disabled hidden>Места работы</option>
                            {workPlaceListState.map((workPlace) => (
                                <option
                                    value={workPlace.id}
                                    label={workPlace.name}
                                />
                            ))}
                        </select>
                    </div>
                    <div id={"map"}>
                        <YMaps
                            query={{ apikey: '2f1f0fe2-a1ed-4eef-a7fb-dd54c3dacb42' }}>
                            <Map
                                width={"100%"}
                                state={mapState}
                                defaultState={{ center: [55.995387, 92.793795], zoom: 15, controls: [] }}
                            >
                                {workPlaceListState.map(x =>
                                    <YandexPlaceMark
                                        workPlaceName={x.name}
                                        workPlaceCoordinateX={x.coordinateX}
                                        workPlaceCoordinateY={x.coordinateY}
                                        workPlaceConditions={x.conditions}
                                        workPlaceDescription={x.description}
                                    />
                                )}
                            </Map>
                        </YMaps>
                    </div>
                </div>
            </Popup>
        </div>
    );
}

                                
