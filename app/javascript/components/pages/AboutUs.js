import React, { Component } from 'react';
import {
  Card, Button, CardImg, CardTitle, CardText, CardGroup,
  CardSubtitle, CardBody, Row, Col
} from 'reactstrap';
import './AboutUs.scss'

class AboutUs extends Component {
  render() {
    return (
      <>
        <h1 className="h1-styles">About us</h1>
        <CardGroup>
          <Row className='row-margin'>
          <Col md='6'>
           <Card>
             <CardImg top width="100%" src="https://images.unsplash.com/photo-1615266508040-7c47f7339963?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1649&q=80" alt="Angelo" />
             <CardBody>
               <CardTitle tag="h5">Angelo DiMarco</CardTitle>
               <CardSubtitle tag="h6" className="mb-2 text-muted">Product Manager</CardSubtitle>
               <CardText>Many pats yapper wow very biscit he made many woofs fluffer what a nice floof, heckin good boys and girls vvv mlem. Shooberino lotsa pats heckin good boys and girls very good spot stop it fren h*ck, you are doin me a concern boofers pats. Many pats doing me a frighten floofs you are doing me the shock puggo corgo, stop it fren smol long water shoob you are doing me a frighten. Adorable doggo super chub most angery pupper I have ever seen extremely cuuuuuute sub woofer, tungg puggo mlem, long doggo the neighborhood pupper clouds.</CardText>
               <Button>Button</Button>
             </CardBody>
           </Card>
           </Col>
           <Col md='6'>
           <Card>
             <CardImg top width="100%" src="https://images.unsplash.com/photo-1598133893778-ed19656d6a4f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzN8fGRvZyUyMGluJTIwY2xvdGhlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="Deven" />
             <CardBody>
               <CardTitle tag="h5">Deven Perkins</CardTitle>
               <CardSubtitle tag="h6" className="mb-2 text-muted">Project Manager</CardSubtitle>
               <CardText>Many pats yapper wow very biscit he made many woofs fluffer what a nice floof, heckin good boys and girls vvv mlem. Shooberino lotsa pats heckin good boys and girls very good spot stop it fren h*ck, you are doin me a concern boofers pats. Many pats doing me a frighten floofs you are doing me the shock puggo corgo, stop it fren smol long water shoob you are doing me a frighten. Adorable doggo super chub most angery pupper I have ever seen extremely cuuuuuute sub woofer, tungg puggo mlem, long doggo the neighborhood pupper clouds.</CardText>
               <Button>Button</Button>
             </CardBody>
           </Card>
           </Col>
           </Row>
           <Row className='row-margin'>
           <Col md='6'>
           <Card>
             <CardImg top width="100%" src="https://images.unsplash.com/photo-1583512603784-a8e3ea8355b4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1649&q=80" alt="Kevinn" />
             <CardBody>
               <CardTitle tag="h5">Kevinn Arbas</CardTitle>
               <CardSubtitle tag="h6" className="mb-2 text-muted">Tech Lead</CardSubtitle>
               <CardText>Many pats yapper wow very biscit he made many woofs fluffer what a nice floof, heckin good boys and girls vvv mlem. Shooberino lotsa pats heckin good boys and girls very good spot stop it fren h*ck, you are doin me a concern boofers pats. Many pats doing me a frighten floofs you are doing me the shock puggo corgo, stop it fren smol long water shoob you are doing me a frighten. Adorable doggo super chub most angery pupper I have ever seen extremely cuuuuuute sub woofer, tungg puggo mlem, long doggo the neighborhood pupper clouds.</CardText>
               <Button>Button</Button>
             </CardBody>
           </Card>
           </Col>
           <Col md='6'>
           <Card>
             <CardImg top width="100%" src="https://images.unsplash.com/photo-1582456780653-aabf23f711b9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTEwfHxkb2clMjBpbiUyMGNsb3RoZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="Elyse" />
             <CardBody>
               <CardTitle tag="h5">Elyse Montano</CardTitle>
               <CardSubtitle tag="h6" className="mb-2 text-muted">Design Lead</CardSubtitle>
               <CardText>Many pats yapper wow very biscit he made many woofs fluffer what a nice floof, heckin good boys and girls vvv mlem. Shooberino lotsa pats heckin good boys and girls very good spot stop it fren h*ck, you are doin me a concern boofers pats. Many pats doing me a frighten floofs you are doing me the shock puggo corgo, stop it fren smol long water shoob you are doing me a frighten. Adorable doggo super chub most angery pupper I have ever seen extremely cuuuuuute sub woofer, tungg puggo mlem, long doggo the neighborhood pupper clouds.</CardText>
               <Button>Button</Button>
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
