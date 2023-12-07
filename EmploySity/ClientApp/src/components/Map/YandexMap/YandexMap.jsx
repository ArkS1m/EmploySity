import {Map, YMaps} from "@pbe/react-yandex-maps";
import {YandexPlaceMark} from "./YandexPlaceMark";
import {Component} from "react";
import "./YandexMap.scss"

export class YandexMap extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            mapState,
            workPlaceListState,
        } = this.props;

        return (
            <div 
                className={"yandexMap"}
            >
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
        )
    }
}

