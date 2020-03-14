
import React , { Component} from 'react'
import { connect } from 'react-redux'
import SecondComponent from './SecondComponent';
import NameAction from '../Redux/Actions/NameAction';
import store from '../store';

class ShowNames extends Component {

    onLCickHanlder = () => {
        this.props.name_action('xyzzzzzzz')
    // store.dispatch(NameAction('abccccc'))

    }
    render(){
        return(
            <div>
                <h2> Hii {this.props.name} </h2>
                <h3> this is second component: </h3>
                <SecondComponent />
                <input type="button" value="dispatch" onClick={this.onLCickHanlder} />
            </div>
        )
    }
}


function mapStateToProps(state) {
    return({
        name: state.name_reducer.name,
        show: state.name_reducer.show

    })
}

function mapDispatchToProps(dispatch) {
    return ({
        name_action:(payload)=>  dispatch(NameAction(payload))
    })
}




export default connect(mapStateToProps, mapDispatchToProps)(ShowNames)
