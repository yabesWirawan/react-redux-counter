import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CounterList from '../Components/CounterList';
import * as actions from '../Actions/Counter';

const mapStateToProps = (state, ownProps) => {
    return {
        counters: state
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators(actions, dispatch)
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps 
)(CounterList)