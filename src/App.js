import React, { useEffect } from 'react'
import Main from './Main'
import { authCheck } from './Redux/actionCreators'

import { connect } from 'react-redux'

const mapStateToProps = state => {
  return {
    isUserSignedIn: state.expense.isUserSignedIn,
    isUserSignedOut: state.expense.isUserSignedOut
  }
}


const mapDispatchToProps = dispatch => {
  return {
    authCheck: () => dispatch(authCheck())
  }
}

const App = (props) => {

  useEffect(() => {
    props.authCheck()
  }, [])



  return (
    <div>
      <p className="text-white" >adv-Dev</p>

      <Main />


    </div >
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(App)