import React from 'react'
import { buyCake, buyIceCream } from '../redux'
import { connect } from 'react-redux'

function ItemContainer(props) {
    return (
        <div>
            <h1>Number of Cakes from IC - {props.item}</h1>
            <button onClick={props.buyItem}>Buy Item</button>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    const item = ownProps.cake ? state.cake.numOfCakes : state.iceCream.numOfIceCreams
    return {
        item: item
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const dispatchFunction = ownProps.cake ?
        () => dispatch(buyCake()) : () => dispatch(buyIceCream())
    return {
        buyItem: dispatchFunction
    }
}

export default connect(
    mapStateToProps, mapDispatchToProps)(ItemContainer)
