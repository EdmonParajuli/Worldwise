import PropTypes from "prop-types"
import styles from './CountryList.module.css'
import Spinner from './Spinner';
import CountryItem from "./CountryItem";
import Message from "./Message"
import { useCities } from "../contexts/CitiesContext";

function CountryList() {
    const{cities, isLoading} = useCities();

    if (isLoading) return <Spinner />;
    if(!cities.length) return <Message message="Add your first city by clicking on city on map"/>

    const countries = cities.reduce((arr,city) => {
        if(!arr.map((el) => el.country).includes(city.country)){
            return[...arr,{country: city.country, emoji: city.emoji} ]
        }else{
            return arr;
        }
    },[]);
    return (
        <div className={styles.CountryList}> 
            <ul className={styles.CountryList}>
                {countries.map((country) => <CountryItem country={country} key={country.id}/>)}
            </ul>
        </div>
    )
}
CountryList.propTypes = {
    cities: PropTypes.array.isRequired,    // Expect an array for cities
    isLoading: PropTypes.bool.isRequired, // Expect a boolean for isLoading
};

export default CountryList
