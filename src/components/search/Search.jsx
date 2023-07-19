import React, { useState } from "react";

import { AsyncPaginate } from "react-select-async-paginate";

import { geoApiOptions, geoApiUrl } from "../../Api";
// Search function
const Search = ({ onSearchChange }) => {
  const [searchData, setSearchData] = useState(null);
  const handleOnSearchChange = (searchInput) => {
    setSearchData(searchInput);
    onSearchChange(searchInput);
  };

  //   loading options
  const loadOptions = (inputData) => {
    try {
       const response = fetch(
        `${geoApiUrl}/cities?minPopulation=1000000&namePrefix=${inputData}`,
        geoApiOptions
      )
        .then((response) => response.json())
        .then((response) => {
          return {
            options: response.data.map((city) => {
              return {
                value: `${city.latitude} ${city.longitude}`,
                label: `${city.name}, ${city.countryCode}`,
              };
            }),
          };
        });

        return response
        
    } catch (error) {
      console.log(error);
    }
  };
  //   search component function return
  return (
    <AsyncPaginate
      placeholder="search for a city"
      debounceTimeout={600}
      value={searchData}
      onChange={handleOnSearchChange}
      loadOptions={loadOptions}
    />
  );
};

export default Search;
