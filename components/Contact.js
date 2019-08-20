import React from "react";
import styled from "styled-components";

const ContactButton = styled.a`
  background-color: white;
  border-radius: 20px;
  padding: 15px;
  margin: 10px;
  font-size: 2.8rem;
  font-weight: bold;
  color: black;
  text-decoration: none;
  display: table;
  transition: all linear 0.1s;

  :hover {
    box-shadow: 0 0 20px white;
  }

  i {
    margin-left: 5px;
  }
`;

const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContactHeader = styled.h3`
  color: white;
  font-size: 50px;
`;

const ContactButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Contact = () => {
  return (
    <ContactWrapper>
      <ContactHeader>Get in Contact</ContactHeader>
      <ContactButtons>
        <ContactButton
          href="mailto:rahwn-websites@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          Email App <i className="uil uil-envelope" />
        </ContactButton>
        <ContactButton
          href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=rahwnwebsites@gmail.com&su&cc&bcc&body&tf=1"
          target="_blank"
          rel="noreferrer"
        >
          Gmail <i className="uil uil-google" />
        </ContactButton>
      </ContactButtons>
      <ContactButton
        href="https://calendly.com/bjoern-rave/15min"
        target="_blank"
        rel="noreferrer"
      >
        Schedule a meeting <i className="uil uil-calendar-alt" />
      </ContactButton>
    </ContactWrapper>
  );
};

export default Contact;
