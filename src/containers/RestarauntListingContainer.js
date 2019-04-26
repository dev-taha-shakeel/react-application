import { connect } from 'react-redux';
import RestarauntListingPage from '../components/RestarauntListing/RestarauntListingPage';
// import * as actions from '../store/actions';

function mapStateToProps(state) {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return {
  };
}

const RestarauntListingContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RestarauntListingPage);

export default RestarauntListingContainer;
