import React from "react"

import SEO from "../components/seo"
import Layout from "../components/layout"
import Header from "../components/header"
import Container from "../components/container"
import ContactForm from "../components/contactForm"

const ContactPage = () => {
  return (
    <Layout>
      <SEO title="Contact Us" />
      <Header />
      <Container>
        <ContactForm />
      </Container>
    </Layout>
  )
}

export default ContactPage
