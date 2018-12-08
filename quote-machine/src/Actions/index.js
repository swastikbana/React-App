import axios from "axios";


export const GET_QUOTE = "get_quote";


const URL2 = 'https://talaikis.com/api/quotes/random/';

export function getQuotes(){

    return axios.get(URL2).then(response=>{
        return{
            type: GET_QUOTE,
            payload:response.data
        }
    }).catch(error=>{
        const errorlist = error.data;
        console.log(errorlist);
    })

}
