'use strict'

import React, { PureComponent } from 'react'
// import MainScreenSound, { mainScreenSoundState } from './sound'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import './global-style.css'

import Login from 'components/login'
// import Topbar from 'components/topbar'
// import Navbar from 'components/navbar'
// import Sidebar from 'components/sidebar'
// import Jobs from 'components/content/generic-list-screen'

const styles = (currentTheme) => ({
  root: {
    flexGrow: currentTheme.flexSettings.defaultGrow,
    display: 'flex',
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

class App extends PureComponent {
  constructor (props) {
    super(props)
    // this.state = { ...mainScreenSoundState }
    this.playSound = this.playSound.bind(this)
  }

  componentDidMount () {
    setTimeout(() => {
      // this.playSound('message.jobs')
    }, 500)
  }

  playSound (requestedSound) {
    if (this.state.hasOwnProperty(requestedSound)) {
      for (const sound in this.state) {
        if (this.state[sound] === 'PLAYING') {
          this.setState({ [sound]: 'STOPPED' })
        }
      }

      setTimeout(() => {
        this.setState({ [requestedSound]: 'PLAYING' })
      }, 20)
    } else {
      throw new Error('playSound: unknown sound.')
    }
  }

  render () {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <Login />
        {/* <Navbar />
        <Sidebar active='jobs' />
        <Jobs type='Empregos' />
        <MainScreenSound state={this.state} /> */}
      </div>
    )
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(App)
