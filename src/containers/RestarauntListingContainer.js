import { connect } from 'react-redux';
import RestarauntListingPage from '../components/RestarauntListing/RestarauntListingPage';
import * as actions from '../store/actions';

function mapStateToProps(state) {
  const {
    isLoading,
    restaraunts,
    isListFetched,
    isError,
    error
  } = state.restarauntList;
  return {
    isLoading,
    restaraunts,
    isListFetched,
    isError,
    error
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getRestarauntsList: () => dispatch(actions.getRestarauntList()),
    updateRestaraunt: (restaraunt) => dispatch(actions.updateRestaraunt(restaraunt)),
  };
}

const RestarauntListingContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RestarauntListingPage);

export default RestarauntListingContainer;
