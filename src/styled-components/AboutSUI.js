import React from 'react'
import { Grid, Segment, Image, Card, Container, Header } from 'semantic-ui-react'

import Marcus from '../pics/MarcusMarinos.jpg'
import Lucas from '../pics/LucasOrton.jpg'
import Matt from '../pics/MatthewMarinos.jpg'
import Mike from '../pics/MichaelMarinos.jpg'


const AboutSUI = () => (
    <Grid verticalAlign='middle' centered>
        <Grid.Row columns={1}>
            <Grid.Column width={10}>
                <Segment>
                    <Container text>
                        <Header as="h2">
                            A Band of Brothers: 3 by blood and 1 by choice
                        </Header>
                        Their individual and collective taste in music creates a sound that will make your ear
                        holes wish they had taste buds. They have many artists to give credit to for their musical
                        inspiration such as Mac Demarco, Tame Impala, and Peach Pit. This bands new and unique sound
                        is taking Western America by storm, and they don’t plan on stopping anytime soon.
                     </Container>
                </Segment>
            </Grid.Column>
        </Grid.Row>

        <Grid.Row columns={4}>
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
                                learn the skill in a very short amount of time with no prior experience.The amount of
                                progression that Marcus has shown on the drums proves that he is nothing less than a prodigy.
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
                                stations at the carnival. You know? Like one of those things a bunch of people put their faces
                                into and and try to get as many apples as possible? One of those things.
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
                                The last brother, but definitely not the least. Luc’s Beethoven esc piano skills add a nice touch to the
                                bands elegant sound. Luc’s skills and musical knowledge serve the band greatly since the other
                                brothers don’t really know shit about music.
                            </Card.Description>
                        </Card.Content>
                    </Card>
                </Segment>
            </Grid.Column>
        </Grid.Row>
    </Grid>
)

export default AboutSUI