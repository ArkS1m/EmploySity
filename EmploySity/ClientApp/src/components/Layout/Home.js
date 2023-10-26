import React, { Component } from 'react';
import "../../styles/Layout/Home.scss";
import {getUniversities} from "../../services/universityService";
import {UniversityCard} from "../UniversityCard";

export class Home extends Component {
    static displayName = Home.name;
    constructor(props) {
        super(props);
        this.state = {
              universityList: []
        };
    }
    
    componentDidMount() {
        getUniversities()
            .then((result) => {
                this.setState({
                    universityList: result
                });
            });
    }
    
    render() {
        return (
            <div className={"main"}>
                <div className={"university-cards-section"}>
                    {this.state.universityList.map(x =>
                        <UniversityCard
                            universityName={x.name}
                            universityCountry={x.country}
                            universityLogoPicUrl={x.unversityLogoPicUrl}
                            universityCountryPicUrl={x.countryPicUrl}
                        />
                    )}
                </div>
            </div>
        );
    }
}
