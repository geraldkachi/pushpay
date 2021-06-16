import React, {useState , useEffect} from "react";
import axios from "axios"

const CountriesApi = () => {
  const [countries, setCountries] = useState([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    ListofCountries();
  }, []);

  
  const ListofCountries = async () => {
    await axios("https://restcountries.eu/rest/v2/all")
      .then((res) => setCountries(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <div className="text-center">
      <h1>List fo Countries</h1>
      {loading && <p>loading...</p>}
      {!loading &&
        countries.map((country) => (
          <div key={country.name}>
            {country.name} - {country.capital}
          </div>
        ))}
    </div>
  );
};

// httss://developer.githhub.com/v3/search

  // return (
  //   <div className="text-center">
  //     <h1>List fo Countries</h1>
  //     {loading && <p>loading...</p>}
  //     {!loading &&
  //       countries.map((country) => (
  //         <div key={country.name}>
  //           {country.name} - {country.capital}
  //         </div>
  //       ))}
  //   </div>
  // );

  // using index

  // return (
  //   <div className="text-center">
  //     <h1>List fo Countries</h1>
  //     {loading && <p>loading...</p>}
  //     {!loading &&
  //       countries.map((country, index) => (
  //         <div key={index}>
  //           {country.name} - {country.capital}
  //         </div>
  //       ))}
  //   </div>
  // );



export default CountriesApi;
