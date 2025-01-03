import PropTypes from "prop-types"
import styles from './CityList.module.css'
import Spinner from './Spinner';
import CityItem from "./CityItem";
import Message from "./Message"
import { useCities } from "../contexts/CitiesContext";

function CityList() {
    const{cities, isLoading} = useCities();
    if (isLoading) return <Spinner />;
    if(!cities.length) return <Message message="Add your first city by clicking on city on map"/>
    return (
        <div className={styles.cityList}> 
            <ul className={styles.cityList}>
                {cities.map((city) => <CityItem city={city} key={city.id}/>)}
            </ul>
        </div>
    )
}
CityList.propTypes = {
    cities: PropTypes.array.isRequired,    // Expect an array for cities
    isLoading: PropTypes.bool.isRequired, // Expect a boolean for isLoading
};

export default CityList
