import { connect } from 'react-redux';
import { setVisibilityFilter} from '../actions';
import Link from '../components/Link';

const mapStateToProps = (state, OwnProps) => ({
    active: OwnProps.filter === state.visibilityFilter
});

//make the onClick of buttons All Active Completed to work according to filter
const mapDispactToProps = (dispatch, OwnProps) => ({
    onClick: () => dispatch(setVisibilityFilter(OwnProps.filter))
});

export default connect(mapStateToProps,mapDispactToProps)(Link);