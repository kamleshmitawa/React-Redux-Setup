
 export const NAME_UPDATE = 'NAME_UPDATE'

const NameAction = (val) => {
    return {
        type : NAME_UPDATE,
        payload: val
    }
}

export default NameAction



// export const getsocketState = socketState => {
//     return {
//         type: SOCKET,
//         payload: {
//             socketState
//         }
//     }
// }