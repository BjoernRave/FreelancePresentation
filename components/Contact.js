import React from "react";
import styled from "styled-components";

const ContactButton = styled.a`
  background-color: white;
  background: rgba(210, 255, 82, 1);
  background: linear-gradient(
    135deg,
    rgba(210, 255, 82, 1) 0%,
    rgba(75, 156, 0, 1) 74%,
    rgba(75, 156, 0, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#d2ff52', endColorstr='#4b9c00', GradientType=1 );

  border-radius: 20px;
  padding: 15px;
  margin: 10px;
  font-size: 2.8rem;
  font-weight: bold;
  color: black;
  text-decoration: none;
  display: table;

  :hover {
    box-shadow: 0 0 20px rgba(210, 255, 82, 1);
  }

  i {
    margin-left: 5px;
  }
`;

const MeetingButton = styled(ContactButton)`
  background: #e96443; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to left,
    #e96443,
    #904e95
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to left,
    #e96443,
    #904e95
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
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
      <MeetingButton
        href="https://calendly.com/bjoern-rave/15min"
        target="_blank"
        rel="noreferrer"
      >
        Schedule a meeting <i className="uil uil-calendar-alt" />
      </MeetingButton>
    </ContactWrapper>
  );
};

export default Contact;
