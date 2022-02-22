import {connect} from 'react-redux';
import Building from '../components/building';
import {addToCart} from '../Services/Actions/actions';
import { getUsers } from '../Services/Actions/actions';


const mapStateToProps = state =>({
    data:state.cardItems
})
const mapDispatchToProps = dispatch =>({
    addToCartHandler: data=>dispatch(addToCart(data))
})


export default connect(mapStateToProps, mapDispatchToProps)(Building);