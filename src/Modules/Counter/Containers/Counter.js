import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Counter from '../Components/Counter';
import * as actions from '../Actions/Counter';

const mapStateToProps = (state, ownProps) => {
    return {
        counter: state[ownProps.id],
        idx: ownProps.id
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators(actions, dispatch)
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps 
)(Counter)