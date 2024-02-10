// src/components/Contacts.js
import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { removeContact } from '../actions';

const ContactItem = styled.div`
  border: 1px solid #ccc;
  margin-bottom: 10px;
  padding: 10px;
`;

const Contacts = ({ contacts, removeContact }) => (
  <div>
    {contacts.map(contact => (
      <ContactItem key={contact.id}>
        <p>Nome: {contact.name}</p>
        <p>Email: {contact.email}</p>
        <p>Telefone: {contact.phone}</p>
        <button onClick={() => removeContact(contact.id)}>Remover</button>
      </ContactItem>
    ))}
  </div>
);

const mapStateToProps = state => ({
  contacts: state.contacts
});

export default connect(mapStateToProps, { removeContact })(Contacts);
