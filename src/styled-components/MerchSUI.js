import React from 'react'
import { Grid, Image } from 'semantic-ui-react'

// import YellowShirt from '../pics/DadBod-yellowShirt.jpg'
import BlackDadBodHat from '../pics/BlackDadBodHat.jpg'

const GridExampleColumns = () => (
  <Grid>
    <Grid.Row columns={3}>
      <Grid.Column width={5}>
        <Image src={BlackDadBodHat} />
      </Grid.Column>
      <Grid.Column width={5}>
        <Image src={BlackDadBodHat} />
      </Grid.Column>
      <Grid.Column width={5}>
        <Image src={BlackDadBodHat} />
      </Grid.Column>
    </Grid.Row>

    <Grid.Row columns={3}>
      <Grid.Column width={5}>
        <Image src={BlackDadBodHat} />
      </Grid.Column>
      <Grid.Column width={5}>
        <Image src={BlackDadBodHat} />
      </Grid.Column>
      <Grid.Column width={5}>
        <Image src={BlackDadBodHat} />
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default GridExampleColumns