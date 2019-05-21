import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'

const ContactModal = () => (
  <Modal trigger={<Button basic inverted fluid>Contact Us</Button>} centered={false}>
    <Modal.Header>Send us a message</Modal.Header>
    <Modal.Content image>
      <Modal.Description>
        <Header>Send us a message</Header>
      </Modal.Description>
    </Modal.Content>
  </Modal>
)

export default ContactModal
