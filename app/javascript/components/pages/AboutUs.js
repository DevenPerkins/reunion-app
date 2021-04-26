import React, { Component } from 'react';
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardGroup,
  CardSubtitle,
  CardBody,
  Row,
  Col,
} from 'reactstrap';

class AboutUs extends Component {
  render() {
    return (
      <>
        <h1 className='h1-styles'>About us</h1>
        <CardGroup>
          <Row className='row-margin'>
            <Col md='6'>
              <Card>
                <CardImg
                  top
                  width='100%'
                  src='https://images.unsplash.com/photo-1615266508040-7c47f7339963?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1649&q=80'
                  alt='Angelo'
                />
                <CardBody>
                  <CardTitle tag='h5'>Angelo DiMarco</CardTitle>
                  <CardSubtitle tag='h6' className='mb-2 text-muted'>
                    Product Manager
                  </CardSubtitle>
                  <CardText>
                    Angelo DiMarco software developer motivated by a love of
                    learning and skill development in the tech field. Confident
                    in the ability to learn quickly and problem solve to get to
                    the final solution. Coming from 7 years experience in the
                    transportation industry he had the opportunity to be
                    involved in project managing new applications, streamlining
                    day to day operations. He is able to take the knowledge he
                    learned from there and apply it to developing.
                  </CardText>
                  <Button
                    className='btn-style'
                    href='https://linkedin.com/in/angelosdimarco'
                    target='blank'
                  >
                    LinkedIn
                  </Button>
                  <Button
                    className='btn-style'
                    href='https://github.com/angelod5811'
                    target='blank'
                  >
                    GithHub
                  </Button>
                  <Button href='https://www.angeloddimarco.com/' target='blank'>
                    Portfolio
                  </Button>
                </CardBody>
              </Card>
            </Col>
            <Col md='6'>
              <Card>
                <CardImg
                  top
                  width='100%'
                  src='https://images.unsplash.com/photo-1598133893778-ed19656d6a4f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzN8fGRvZyUyMGluJTIwY2xvdGhlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
                  alt='Deven'
                />
                <CardBody>
                  <CardTitle tag='h5'>Deven Perkins</CardTitle>
                  <CardSubtitle tag='h6' className='mb-2 text-muted'>
                    Project Manager
                  </CardSubtitle>
                  <CardText>
                    Deven is a growth-minded full-stack web developer dedicated
                    to implementing efficient, creative, and accessible
                    solutions to complex challenges. He has a strong background
                    in a high-volume production environment backed with 3+ years
                    of content management. He has a passion for reducing his
                    carbon footprint by using environmentally friendly practices
                    in his life and encouraging others to do the same. He loves
                    being outdoors and near , on, or in water. As the project
                    manager, Deven contributed to the team by keeping the
                    schedule for the team (take your breaks!) and keeping track
                    of the items that needed to be done to reach MVP.
                  </CardText>
                  <Button
                    className='btn-style'
                    href='https://www.linkedin.com/in/deven-perkins-50356b51/'
                    target='blank'
                  >
                    LinkedIn
                  </Button>
                  <Button
                    className='btn-style'
                    href='https://github.com/DevenPerkins'
                    target='blank'
                  >
                    GithHub
                  </Button>
                  <Button href='http://devenperkins.com' target='blank'>
                    Portfolio
                  </Button>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row className='row-margin'>
            <Col md='6'>
              <Card>
                <CardImg
                  top
                  width='100%'
                  src='https://images.unsplash.com/photo-1583512603784-a8e3ea8355b4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1649&q=80'
                  alt='Kevinn'
                />
                <CardBody>
                  <CardTitle tag='h5'>Kevinn Arbas</CardTitle>
                  <CardSubtitle tag='h6' className='mb-2 text-muted'>
                    Tech Lead
                  </CardSubtitle>
                  <CardText>
                    Kevinn is a software development student at LEARN academy
                    and he is really excited that he is learning REACT with ruby
                    on rails because of how quick and simply it can get an
                    application up and running while also using current industry
                    tech. He came into LEARN with a background in the MERN stack
                    and python/Django. As Tech Lead he lead the morning standup,
                    reporting the status of the project and any blockers. He
                    also lead the mentorship sessions while having a strong
                    understanding of the technical needs of the project.
                  </CardText>
                  <Button
                    className='btn-style'
                    href='https://www.linkedin.com/in/kevinnarbas'
                    target='blank'
                  >
                    LinkedIn
                  </Button>
                  <Button
                    className='btn-style'
                    href='https://github.com/kevinnarbas'
                    target='blank'
                  >
                    GithHub
                  </Button>
                  <Button href='http://kevinnarbas.com' target='blank'>
                    Portfolio
                  </Button>
                </CardBody>
              </Card>
            </Col>
            <Col md='6'>
              <Card>
                <CardImg
                  top
                  width='100%'
                  src='https://images.unsplash.com/photo-1582456780653-aabf23f711b9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTEwfHxkb2clMjBpbiUyMGNsb3RoZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
                  alt='Elyse'
                />
                <CardBody>
                  <CardTitle tag='h5'>Elyse Montano</CardTitle>
                  <CardSubtitle tag='h6' className='mb-2 text-muted'>
                    Design Lead
                  </CardSubtitle>
                  <CardText>
                    Elyse is a front end software developer with a passion to
                    write software and web applications with readable code for
                    efficient collaboration and user friendly experiences. With
                    a heart for people, she constantly has the user in mind
                    while developing applications. From the color selection to
                    the flow of the application, every last detail counts and is
                    crucial to building an effective product. As design lead,
                    she has constantly kept the user in mind, thinking what the
                    user wants out of our product and how best to implement
                    these features.
                  </CardText>
                  <Button
                    className='btn-style'
                    href='https://www.linkedin.com/in/elysemontano/'
                    target='blank'
                  >
                    LinkedIn
                  </Button>
                  <Button
                    className='btn-style'
                    href='https://github.com/elysemontano'
                    target='blank'
                  >
                    GithHub
                  </Button>
                  <Button
                    href='https://elysemontano.bss.design/'
                    target='blank'
                  >
                    Portfolio
                  </Button>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </CardGroup>
      </>
    );
  }
}

export default AboutUs;
