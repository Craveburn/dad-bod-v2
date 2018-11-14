import React from 'react'
import { Grid, Image, Segment, Container, Header } from 'semantic-ui-react'

// import YellowShirt from '../pics/DadBod-yellowShirt.jpg'
import BlackHat from '../pics/BlackDadBodHat.jpg'
import GreenHat from '../pics/GreenDadBodHat.png'
import NasaDad from '../pics/NasaDadBod.png'
import Nascar from '../pics/NascarDadBod.jpg'

const GridExampleColumns = () => (
  <Grid centered>
    <Grid.Row columns={2}>
      <Grid.Column width={5}>
        <Segment>
          <Image src={Nascar} size="large" centered />
          <Container>
            <Header>
              Nascar Dad Bod Long Sleeve
            </Header>
            <Header as="h4">
              $25
            </Header>
            Have you ever wanted your conservative family members to be proud of you while also supporting
            local music? Well now's your chance. Sport this deep southern traditional logo long sleeve tshirts
            and make your ancestors proud.
          </Container>
        </Segment>
      </Grid.Column>
      <Grid.Column width={5}>
        <Segment>
          <Image src={NasaDad} size="large" centered />
          <Container>
            <Header>
              Nasa Dad Bod Long Sleeve
            </Header>
            <Header as="h4">
              $25
            </Header>
            It's blast off with this cozy long sleeve. You don't need a giant private owned corporations
            logo on your shirt. Besides, their CEO is known to drop LSD and make financial fraud jokes on
            his twitter and drop their stocks significantly. Trust us, you're better off repping the government
            sector this time.
          </Container>
        </Segment>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row columns={2}>
      <Grid.Column width={5}>
        <Segment>
          <Image src={BlackHat} centered size="large" />
          <Container>
            <Header>
              Black Dad Bod Beanie
            </Header>
            <Header as="h4">
              $20
            </Header>
            Have you ever wanted your conservative family members to be proud of you while also supporting,
            local music? Well now's your chance. Sport this deep southern traditional logo long sleeve tshirts
            and make your ancestors proud
          </Container>
        </Segment>
      </Grid.Column>
      <Grid.Column width={5}>
        <Segment>
          <Image src={GreenHat} centered size="large" />
          <Container>
            <Header>
              Green Dad Bod Beanie
            </Header>
            <Header as="h4">
              $20
            </Header>
            Have you ever wanted your conservative family members to be proud of you while also supporting,
            local music? Well now's your chance. Sport this deep southern traditional logo long sleeve tshirts
            and make your ancestors proud
          </Container>
        </Segment>
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default GridExampleColumns