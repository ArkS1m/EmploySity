import React, {useEffect, useState} from 'react';
import "../../styles/Layout/Home.scss";
import {getUniversities} from "../../services/universityService";
import {getWorkPlaces} from "../../services/workPlaceService";
import {UniversityCard} from "../UniversityCard";
import {YandexPlaceMark} from "../YandexPlaceMark";
import {FullscreenControl, Map, YMaps} from "@pbe/react-yandex-maps";

export default function Home () {
    const [universityListState, setUniversityListState] = useState([]);
    const [workPlaceListState, setWorkPlaceListState] = useState([]);
    const [mapState, setMapState] = useState();
    const [zoomState, setZoomState] = useState(17);

    const changeFunc = () => {
        const selectBox = document.getElementById("selectBox");
    
        const selectedValue = selectBox.options[selectBox.selectedIndex].value;
        const selectedWorkPlaceCoordinateX = workPlaceListState.filter(workPlace => workPlace.name === selectedValue)[0].coordinateX
        const selectedWorkPlaceCoordinateY = workPlaceListState.filter(workPlace => workPlace.name === selectedValue)[0].coordinateY

        changeMapState(selectedWorkPlaceCoordinateX, selectedWorkPlaceCoordinateY, 17.0000001);
    }
    
    const removeBalloon = () => {
        const removeBalloonButton = document.getElementsByClassName("ymaps-2-1-79-balloon__close-button")[0];
        if (removeBalloonButton !== undefined)
            removeBalloonButton.click();
    }
    
    const changeMapState = (x, y, zoomValue) => {
        removeBalloon()
        
        if (zoomState === zoomValue) {
            zoomValue -= 0.0000001;
        }
        
        setZoomState(zoomValue);
        setMapState({ zoom: zoomState, center: [x, y], controls: [] });
        console.log(mapState)
    }
    
    useEffect(() => {
        getUniversities()
            .then((result) => {
                setUniversityListState(result);
            });
        getWorkPlaces()
            .then((result) => {
                setWorkPlaceListState(result)
            });
        }, []);
        
    return (
        <div id={"main"}>
            <div id={"university-cards-section"}>
                {universityListState.map((x) =>
                    <div onClick={() => changeMapState(x.coordinateX, x.coordinateY, 17.0000001)}>
                        <UniversityCard
                            universityName={x.name}
                            universityCountry={x.country}
                            universityLogoPicUrl={x.unversityLogoPicUrl}
                            universityCountryPicUrl={x.countryPicUrl}
                        ></UniversityCard>
                    </div>
                )}
            </div>
            <div id={"mapElements"}>
                <div id={"mapSelectBox"}>
                    <select id={"selectBox"} onChange={changeFunc}>
                        <option value="" selected disabled hidden>Места работы</option>
                        {workPlaceListState.map((workPlace) => (
                            <option>
                                {workPlace.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div id={"map"}>
                    <YMaps query={{ apikey: '2f1f0fe2-a1ed-4eef-a7fb-dd54c3dacb42' }}>
                        <Map width={300} state={mapState} defaultState={{ center: [55.995387, 92.793795], zoom: 15, controls: [] }}>
                            {workPlaceListState.map(x => 
                                <YandexPlaceMark
                                    workPlaceName={x.name}
                                    workPlaceCoordinateX={x.coordinateX}
                                    workPlaceCoordinateY={x.coordinateY}
                                    workPlaceConditions={x.conditions}
                                    workPlaceDescription={x.description}
                                />
                            )}
                            <FullscreenControl />
                        </Map>
                    </YMaps>
                </div>
            </div>
        </div>
    );
}

                                
