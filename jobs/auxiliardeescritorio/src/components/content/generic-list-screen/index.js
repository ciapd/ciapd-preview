'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import LiveSearch from './live-search'
import Card from './card'

import { topbarHeight } from 'components/topbar'
import { navbarHeight } from 'components/navbar'

const tbHeight = topbarHeight || 0
const nbHeight = navbarHeight || 0

const styles = (currentTheme) => ({
  container: {
    alignContent: 'flex-start',
    height: `calc(100vh  - ${tbHeight}px - ${nbHeight}px)`,
    marginTop: 0,
    overflowY: 'scroll',
    padding: currentTheme.flexSettings.defaultContainer.padding,
    width: 'auto'
  },
  title: {
    borderBottom: '1px solid #888'
  }
})

const Screen = ({ type, classes }) => (
  <Grid container className={classes.container} spacing={24}>
    <Grid item xs={12}>
      <Typography align='left' className={classes.title} variant='display3'>{type.toUpperCase()}</Typography>
    </Grid>
    <Grid item xs={12}><LiveSearch querySelector={type} /></Grid>
    <Grid item xs={12}>
      <Card
        link='/ciapd-preview/jobs/auxiliardeescritorio'
        query={type}
        thumbnail='data:image/jpeg;base64,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'
        title='Auxiliar de escritório'
        content='A Level Group está contratando deficientes para a vaga de auxiliar de escritório, o contratado será responsável pela digitação de cadastro de clientes e atividades administrativas.'
      />
    </Grid>
    <Grid item xs={12}>
      <Card
        link='/ciapd-preview/jobs/atendente'
        query={type}
        thumbnail='data:image/png;base64,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'
        title='Atendente'
        content='A Neoformula contrata atendentes com algum tipo de deficiência, para fazer parte de seu quadro de funcionários. Os selecionados atuarão em atendimento ao cliente, em apresentações dos produtos e em organização de prateleiras.'
      />
    </Grid>
    <Grid item xs={12}>
      <Card
        link='/ciapd-preview/jobs/recepcionistaadministrativa'
        query={type}
        thumbnail='https://i.ytimg.com/vi/8jmI3X2Qwx0/maxresdefault.jpg'
        title='Recepcionista administrativa'
        content='O contratado será responsável pelo atendimento telefônico, pela agenda média, pela recepção de pacientes, pela organização do consultório e salas. '
      />
    </Grid>
  </Grid>
)

Screen.propTypes = {
  type: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Screen)
