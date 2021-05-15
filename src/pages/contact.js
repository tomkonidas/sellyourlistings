import React from "react"

import Seo from "../components/seo"
import Layout from "../components/layout"
import Header from "../components/header"
import Container from "../components/container"
import ContactForm from "../components/contactForm"

const ContactPage = () => {
  return (
    <Layout>
      <Seo title="Contact Us" />
      <Header />
      <Container>
        <ContactForm />
      </Container>
    </Layout>
  )
}

export default ContactPage
