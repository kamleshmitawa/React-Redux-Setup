import { NAME_UPDATE } from '../Actions/NameAction'

 const initialState = {
    name: 'kamlesh',
    show: true
}


 const Name_Reducer = (state= initialState, action) => {
     
        switch(action.type){
            case NAME_UPDATE:
            return {
                name: action.payload ,
                show: false
            }
            default:
            return initialState
        }
}

export default Name_Reducer