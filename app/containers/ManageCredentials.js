import { connect } from 'react-redux'
import addProfile from '../actions/addProfile'
import removeProfile from '../actions/removeProfile'
import updateProfile from '../actions/updateProfile'
import ManageCredentials from '../components/ManageCredentials'

const mapStateToProps = (state) => {
  return {
    credentials: state.credentials,
  }
}

export default connect(mapStateToProps, {
  addProfile,
  removeProfile,
  updateProfile,
})(ManageCredentials)
