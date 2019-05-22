import React from 'react'
import { Grid, Segment, Image, Card, Container, Header } from 'semantic-ui-react'

import Marcus from '../pics/MarcusMarinos.jpg'
import Lucas from '../pics/LucasOrton.jpg'
import Matt from '../pics/MatthewMarinos.jpg'
import Mike from '../pics/MichaelMarinos.jpg'
import Ben from '../pics/BenOstler.jpg'


const AboutSUI = () => (
    <Grid centered>
        <Grid.Row columns={1}>
            <Grid.Column width={10}>
                <Segment>
                    <Container fluid text>
                        <Header as="h2">
                            Who is Dad Bod?
                        </Header>
                        Dad Bod is comprised of 5 members, 3 of whom are brothers; with Michael Marinos on vocals and guitar,
                        Matthew Marinos on bass guitar, Marcus Marinos on the drums, with Lucas Orton on keys, and Ben Ostler on
                        lead guitar. The band released one EP early this year and is currently working on a full-length album
                        to be released this summer.
                     </Container>
                </Segment>
            </Grid.Column>
        </Grid.Row>

        <Grid.Row columns={3}>
            {/* this is the break between images */}
            <Grid.Column>
                <Segment>
                    <Card fluid >
                        <Image src={Mike} />
                        <Card.Content>
                            <Card.Header>Michael Marinos</Card.Header>
                            <Card.Meta>Guitar & Vocals</Card.Meta>
                            <Card.Description>The oldest of the 4 brothers, is the lead
                            guitarist and vocalist in this psychedelic, new age, indie rock band. Before the formation
                            of Dad Bod, Michael was a solo musician, writing his own songs and performing them around
                            Utah. His writing style, experience and passion for music inspired the formation of Dad Bod.
                            </Card.Description>
                        </Card.Content>
                    </Card>
                </Segment>
            </Grid.Column>
            {/* this is the break between images */}
            <Grid.Column>
                <Segment>
                    <Card fluid >
                        <Image src={Marcus} />
                        <Card.Content>
                            <Card.Header>Marcus Marinos</Card.Header>
                            <Card.Meta>Drums, Vocals & Shaker egg</Card.Meta>
                            <Card.Description>
                                With the use of his bottled in rage, he shows the drums who their real daddy is. Marcus’ love of the
                                oldies, rock and roll, and kurt vile, leaks through in his songwriting and his musical
                                execution. The necessity of a drummer in the band required Marcus to step up to the task and
                                learn the skill in a very short amount of time with no prior experience.
                            </Card.Description>
                        </Card.Content>
                    </Card>
                </Segment>
            </Grid.Column>
            {/* this is the break between images */}
            <Grid.Column>
                <Segment>
                    <Card fluid >
                        <Image src={Matt} />
                        <Card.Content>
                            <Card.Header>Matthew Marinos</Card.Header>
                            <Card.Meta>Bass & Vocals</Card.Meta>
                            <Card.Description>
                                Matthew has played the guitar for years
                                and put his skills to use as a bassist in Dad Bod. Matthew had no experience playing the bass
                                before Dad Bod so when the band asked him to play the bass, his exact words were “Yeah..sure”.
                                His skinny fingers now float across the strings like an apple in one of those apple bobbing
                                stations at the carnival.
                            </Card.Description>
                        </Card.Content>
                    </Card>
                </Segment>
            </Grid.Column>
            <Grid.Column>
                <Segment>
                    <Card fluid >
                        <Image src={Lucas} />
                        <Card.Content>
                            <Card.Header>Lucas Orton</Card.Header>
                            <Card.Meta>Synth & Vocals</Card.Meta>
                            <Card.Description>
                                Luc’s Beethoven esc piano skills add a nice touch to the
                                bands elegant sound. Luc’s skills and musical knowledge serve the band greatly since the other
                                brothers don’t really know shit about music.
                            </Card.Description>
                        </Card.Content>
                    </Card>
                </Segment>
            </Grid.Column>
        <Grid.Column>
                <Segment>
                    <Card fluid >
                        <Image src={Ben} />
                        <Card.Content>
                            <Card.Header>Ben Ostler</Card.Header>
                            <Card.Meta>Lead Guitar</Card.Meta>
                            <Card.Description>
                            Ben Ostler, age 21, is an all around classy act.  Lead guitarist, jazz music enthusiast, and San Pellgrino
                            connoisseur, he brings a perfect cherry on top with his musical writing and influence.
                            </Card.Description>
                        </Card.Content>
                    </Card>
                </Segment>
            </Grid.Column>
        </Grid.Row>
    </Grid>
)

export default AboutSUI