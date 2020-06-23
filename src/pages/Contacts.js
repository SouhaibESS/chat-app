import React from "react";
import { Page, Contacts } from "../components";

const ContactsPage = ({ location }) => {
  console.log(location.pathname);
  return (
    <Page>
      <Contacts />
    </Page>
  );
};

export default ContactsPage;
