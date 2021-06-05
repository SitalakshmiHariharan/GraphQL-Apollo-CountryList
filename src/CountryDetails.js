import React from 'react'
import { useQuery, gql } from '@apollo/client';
import Alert from 'react-bootstrap/Alert';

const GET_COUNTRY_DETAIL =
        gql`
        query getCountryDetails ($code: ID!){
            country(code:$code){
            name
            native
            emoji
            currency
            phone            
            capital
            continent{
                name
              }
            languages {
                code
                name
                __typename
            }
            }
        }`


export default function CountryDetails(props) {
   
    const code= props.match.params.code    

    const { loading, error, data } = useQuery(GET_COUNTRY_DETAIL, {
        variables: {code: code},
      });      

      if (loading) return <p>Loading ...</p>;
      if(error) return <p>Error...</p>
      return (
        <Alert variant="success" style={{ width: "35rem" }}>
        <Alert.Heading>
          COUNTRY DETAILS
          </Alert.Heading>
            <p align="left"><b>Name:</b>{data.country.name}</p>            
            <p align="left"><b>Native:</b>{data.country.native}</p>
            <p align="left"><b>Capital:</b>{data.country.capital}</p>
            <p align="left"><b>Phone:</b>{data.country.phone}</p> 
            <p align="left"><b>Emoji:</b>{data.country.emoji}</p>           
            <p align="left"><b>Currency:</b>{data.country.currency}</p>            
            {data.country.languages.map((language) => (<p align="left"><b>Language:</b>{language.name}</p>))}                                                 
        </Alert>
      );
}
           
      //{data.country.continent.map((item) => (<p align="left"><b>Continent:</b>{item.name}</p>))}
     