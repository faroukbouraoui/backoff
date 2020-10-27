import {createStore} from "redux"

const initialState= {
    blog: [],
    offres:[
        
        {
        offre:{
            
        },
        services:{}

    }

]
}

function reducers(state){
    return state;
}

const store= createStore(reducers, initialState)


export default store