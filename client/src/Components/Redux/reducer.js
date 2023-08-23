import { GET_POKES, GET_DETAIL, GET_POKE_NAME, GET_FILTER ,GET_POKE_CREATE, GET_ASC, GET_DESC, GET_TYPES } from "./actions-types";

const initialState = {
    pokemons : [],
    detail : {},
    searchName : [],
    filters : [],
    types : []
};

const reducer = (state = initialState, actions) => {
    switch (actions.type) {

        case GET_POKES:
           return {...state , pokemons : actions.payload };  
//-------------------------------------------------------------------------------------------         
        case GET_POKE_NAME :

                if(actions.payload){
            return {...state, searchName : [...state.searchName , actions.payload]};
                }
                return {...state , searchName: []}
                
//-------------------------------------------------------------------------------------------

        case GET_DETAIL :
            return {...state , detail : actions.payload };

//-------------------------------------------------------------------------------------------

        case GET_FILTER :

            if(actions.payload === "borrar" || actions.payload === "") {
                return {...state , filters : []}
            }

            if(actions.payload) {

            var string = actions.payload;
           
            // var filtrado = typesName.filter(ele => ele === string || ele === string)
            const filtrado = state.pokemons.filter((ele) => ele.Types[0].name === string || (ele.Types[1] && ele.Types[1].name === string ))
            if(filtrado.length > 0)
            return {...state , filters : filtrado}

            } 

            return {...state , filters : "No se encontraron pokes"}

//-------------------------------------------------------------------------------------------
            
        case GET_POKE_CREATE:
            return {...state , filters : actions.payload}

//-------------------------------------------------------------------------------------------

        case GET_ASC : 
        if(actions.payload === "borrar") {
            return {...state, filters : []}
        }

        var filtradoA;
        
        if(state.filters.length > 0) {
             filtradoA = [...state.filters]
        }else {
             filtradoA = [...state.pokemons]
        };
           
            const filtradoAsc = filtradoA.sort((a,b) => {
              return  a.name.localeCompare(b.name)
            });
            return {...state , filters : filtradoAsc}
//-------------------------------------------------------------------------------------------
            
        case GET_DESC :
            if(actions.payload === "borrar") {
                return {...state, filters : []}
            }
            var filtradoD;
            if(state.filters.length > 0) {
                filtradoD = [...state.filters]
            } else {
                filtradoD = [...state.pokemons]
            }
           
            const filtradoDesc = filtradoD.sort((a,b) => {
               return b.name.localeCompare(a.name)
            });

            return {...state, filters : filtradoDesc}
//----------------------------------------------------------------------------------------

            case GET_TYPES :
                return {...state , types : actions.payload}
        default:
            return {...state}
    }
};

export default reducer;