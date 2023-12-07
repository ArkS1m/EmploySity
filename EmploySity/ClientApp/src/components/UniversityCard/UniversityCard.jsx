import {Component} from "react";
import "./UniversityCard.scss"

export class UniversityCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { 
            universityName,
            universityCountry,
            universityLogoPicUrl,
            universityCountryPicUrl
        } = this.props;
        
        return (
            <div className={"card"}>
                <div className={"card-header"}>
                    <div className={"university-title"}>
                        {universityName}
                    </div>
                    <div className={"country-title"}>
                        {universityCountry}
                    </div>
                    <img
                        className={"country-pic"}
                        src={process.env.PUBLIC_URL + '/media/' + universityCountryPicUrl}
                        alt="logo"
                    />
                </div>
                <div className={"card-body"}>
                    <img 
                        className={"university-pic"}
                        src={process.env.PUBLIC_URL + '/media/' + universityLogoPicUrl}
                        alt="logo"
                    />
                </div>
            </div>
        );
    }
}