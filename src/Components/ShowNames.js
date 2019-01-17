
import React , { Component} from 'react'
import { connect } from 'react-redux'
import SecondComponent from './SecondComponent';
import NameAction from '../Redux/Actions/NameAction';

class ShowNames extends Component {
    render(){
        console.log(this.props, "ShowNames component", this.props.name_action)
        
        return(
            <div>
                <h2> Hii kashish </h2>
                <h3> this is second component: </h3>
                <SecondComponent />
                <input type="button" value="dispatch" onClick={() => this.props.name_action} />
            </div>
        )
    }
}

// const mapStateToProps ({ Name_Reducer }){
//     return{

//     }
// }

function mapStateToProps(state) {
    return({
        name: state.name,
        show: state.show

    })
}

function mapDispatchToProps(dispatch) {
    return ({
        name_action: dispatch.NameAction
    })
}

// function mapDispatchToProps(dispatch) {
//     return({
//         name: this.props.dispatch(NameAction())

//     })
// }



export default connect(mapStateToProps, mapDispatchToProps)(ShowNames)


// export default connect()(ShowNames)