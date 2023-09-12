//import liraries
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';

const useFetch = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false); 
    const [error, setError] = useState(null);

    const api_data = JSON.stringify({
        "collection": "products",
        "database": "test",
        "dataSource": "Manushop",
        "projection": {
            "_id": 1
        }
    });

    const api_headers = {
        'Content-Type': 'application/json',
        'Access-Control-Request-Headers': '*',
        'api-key': 'gcWdXxvOMVQHW10RDeCfvRESKEiAGzfpmWOR22oybXzihzctEI09X34l9QsM1e6b'
      }

    const fetchData = async () => {
        setIsLoading(true);
        console.log("in FETCH DATA ...");
        try {
           const response = await fetch("http://192.168.0.103:3700/api/products/");
           const mohit = await response.json();
           /* const {response} = await axios.post('https://ap-south-1.aws.data.mongodb-api.com/app/data-knuxo/endpoint/data/v1/action/findOne', api_data, {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Request-Headers': '*',
                'api-key': 'gcWdXxvOMVQHW10RDeCfvRESKEiAGzfpmWOR22oybXzihzctEI09X34l9QsM1e6b'
              }
          }); */
           console.log("API RESPONSE mohit::: ",mohit);
           if(mohit.data && mohit.data.documents){
                setData(mohit.data.documents);
           }else{
               setData(mohit);
           }
           setIsLoading(false);
        } catch (error) {
            console.log("in FETCH DATA ERROR ...",error);
            setError(error);
        }finally{
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const refetch = () => {
        setIsLoading(true);
        fetchData();
    }

    return {data, isLoading, error, refetch}
};

export default useFetch;
