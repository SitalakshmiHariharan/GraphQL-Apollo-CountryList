import React from 'react';
import { gql, useQuery } from '@apollo/client';
import Country from './Country';

const GET_COUNTRIES = gql`query getCountries {
    countries {
      name      
      code
    }
  }`;


export default function CountryList() {
   const{ loading, error, data } = useQuery(GET_COUNTRIES);

    if( loading ) return <p> Loading....</p>;
    if( error ) return <p> Error..</p>;

    return data.countries.map((country) => (

        <Country key={country.id} country= {country}></Country>

    ));
}