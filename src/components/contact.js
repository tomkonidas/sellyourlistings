import React from "react"
import Container from "./container"
import SectionTitle from "./sectionTitle"

const Contact = () => {
  const { contacts } = require("../../content/data/contacts.json")
  return (
    <div id="contact" className="mt-6 py-36 bg-gray-100">
      <Container>
        <SectionTitle>Contact Us</SectionTitle>
        <div className="mt-5 md:grid md:grid-cols-2 md:gap-8">
          {contacts.map(
            ({ title, description, phone, availability, email }) => (
              <div key={title}>
                <h2 className="text-2xl leading-8 font-extrabold text-gray-900 sm:text-3xl sm:leading-9">
                  {title}
                </h2>
                <div className="mt-3">
                  <p className="text-lg leading-7 text-gray-500">
                    {description}
                  </p>
                </div>
                <div className="mt-9">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-6 w-6 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div className="ml-3 text-base leading-6 text-gray-500">
                      <p>{phone}</p>
                      <p className="mt-1">{availability}</p>
                    </div>
                  </div>
                  <div className="mt-6 flex">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-6 w-6 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div className="ml-3 text-base leading-6 text-gray-500">
                      <p>{email}</p>
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </Container>
    </div>
  )
}

export default Contact
