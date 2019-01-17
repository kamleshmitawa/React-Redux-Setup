
import React , { Component} from 'react'
import {connect } from 'react-redux'


class SecondComponent extends Component {
    render(){
        console.log(this.props, "ShowNames component")
        
        return(
            <div>
                <h2> Hii kashish Krish  heyy {this.props.name_reducer.name} </h2>
            </div>
        )
    }
}

// const mapStateToProps (store){
//     return{

//     }
// }


export default connect(state => state)(SecondComponent)


// export default connect()(SecondComponent)