import React from 'react'
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom'

export default function Country(props) {
    
    return (        
        <Alert variant="secondary" style={{ width: "25rem" }}>
        <Alert.Heading>
                {props.country.name}
          </Alert.Heading>
          <Button variant="warning"><Link to={`/country/${props.country.code}`}>Details</Link></Button>              
        </Alert>           
    )
}

