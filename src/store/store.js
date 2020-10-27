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

function reducers(state, action){
    switch(action.type){
        default:
        return state;
    }
    
}

const store= createStore(reducers, initialState)


export default store