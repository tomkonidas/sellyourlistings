import React from "react"

import SEO from "../components/seo"
import Layout from "../components/layout"
import Header from "../components/header"
import ContactForm from "../components/contactForm"

const ContactPage = () => {
  return (
    <Layout>
      <SEO title="Contact Us" />
      <Header />
      <ContactForm />
    </Layout>
  )
}

export default ContactPage
