import { connect } from 'react-redux';
import RestarauntHomePage from '../components/RestarauntListing/RestarauntHomePage';
// import * as actions from '../store/actions';

function mapStateToProps(state) {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return {
  };
}

const RestarauntDetailPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RestarauntHomePage);

export default RestarauntDetailPageContainer;
