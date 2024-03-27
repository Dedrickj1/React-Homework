import {useEffect, useState} from 'react'
import { server_calls } from '../api/server';

export const useGetData = () => {
const [contactData, setData ] = useState<[]>([])

async function handleDataFetch(){
    const result = await server_calls.get();
    console.log(result)
    setData(result)
}

useEffect( () => {
    handleDataFetch();
}, [])

  return { contactData, getData:handleDataFetch }
}
