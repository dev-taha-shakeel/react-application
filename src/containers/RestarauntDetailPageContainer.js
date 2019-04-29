import { connect } from 'react-redux';
import RestarauntHomePage from '../components/RestarauntListing/RestarauntHomePage';
import * as actions from '../store/actions';

function mapStateToProps(state) {
  const {
    details,
    isDetailsFetched,
    isLoading,
    isError,
    error
  } = state.restarauntDetail;
  return {
    details,
    isDetailsFetched,
    isLoading,
    isError,
    error
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getRestarauntDetails: (id) => dispatch(actions.getRestarauntDetails(id)),
  };
}

const RestarauntDetailPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RestarauntHomePage);

export default RestarauntDetailPageContainer;
