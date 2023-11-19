import {Component} from "react";
import {Placemark} from '@pbe/react-yandex-maps';
import "./Map.scss"

export class YandexPlaceMark extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        const {
            workPlaceName,
            workPlaceCoordinateX,
            workPlaceCoordinateY,
            workPlaceConditions,
            workPlaceDescription
        } = this.props;
        
        return (
                <Placemark
                    modules={["geoObject.addon.balloon"]}
                    defaultGeometry={[workPlaceCoordinateX, workPlaceCoordinateY]}
                    properties={{
                        balloonContentHeader: workPlaceName,
                        balloonContentBody: workPlaceConditions,
                        balloonContentFooter: workPlaceDescription
                    }}
                />
        );
    }
}