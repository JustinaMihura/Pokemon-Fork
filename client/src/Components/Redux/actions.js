import axios from "axios";
import { GET_POKES, GET_DETAIL} from "./actions-types"


export const getPokes = (url) => {
    
    const endpoint = `http://localhost:3001/pokemons?offset=${url}&limit=12`;
    
return async (dispatch) => {

    try {
        

        const start = performance.now()

        const {data} = await axios(endpoint);

        const end = performance.now()
        const delay = end - start;
        console.log(delay);
        

        if(data){
        return dispatch({type : GET_POKES , payload : data})    
        };

    } catch (error) {
        
        console.log("fallo el server");
    } 
}};




export const getDetail = (idPokemon, setIsLoading ) => {
     
    return async (dispatch) => {

        try {
           
            const {data} = await axios(`http://localhost:3001/pokemons/${idPokemon}`);
            
            if(data) {
                
                return dispatch({type : GET_DETAIL, payload : data})
            };
            
        } catch (error) {
            
            console.log({error : error.message});
        }
    }
};


