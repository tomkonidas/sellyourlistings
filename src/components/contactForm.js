import React, { useContext } from "react"
import Context from "../store/context"

const ContactForm = () => {
  const {
    form: {
      title,
      placeholders: { name, email, phone, message, submit },
    },
  } = require("../../content/data/contact.json")
  const { packages } = require("../../content/data/packages.json")
  const { state, dispatch } = useContext(Context)
  return (
    <div className="bg-white overflow-hidden sm:px-6 lg:px-8 lg:py-24">
      <div className="relative max-w-xl mx-auto">
        <svg
          className="absolute left-full transform translate-x-1/2"
          width="404"
          height="404"
          fill="none"
          viewBox="0 0 404 404"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="85737c0e-0916-41d7-917f-596dc7edfa27"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <rect
                x="0"
                y="0"
                width="4"
                height="4"
                className="text-gray-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width="404"
            height="404"
            fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"
          />
        </svg>
        <svg
          className="absolute right-full bottom-0 transform -translate-x-1/2"
          width="404"
          height="404"
          fill="none"
          viewBox="0 0 404 404"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="85737c0e-0916-41d7-917f-596dc7edfa27"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <rect
                x="0"
                y="0"
                width="4"
                height="4"
                className="text-gray-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width="404"
            height="404"
            fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"
          />
        </svg>
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {title}
          </h2>
        </div>
        <div className="mt-12">
          <form
            action="#"
            method="POST"
            netlify-honeypot="bot-field"
            data-netlify="true"
            name="Website submission"
            className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
          >
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />

            <div className="sm:col-span-2">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="name"
                  id="name"
                  autocomplete="name"
                  className="py-3 px-4 block w-full shadow-sm focus:ring-brand focus:border-brand border-gray-300 rounded-md"
                  placeholder={name}
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autocomplete="email"
                  className="py-3 px-4 block w-full shadow-sm focus:ring-brand focus:border-brand border-gray-300 rounded-md"
                  placeholder={email}
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="phone_number"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              <div className="mt-1">
                <input
                  id="phone_number"
                  name="phone_number"
                  type="text"
                  autocomplete="tel"
                  className="py-3 px-4 block w-full shadow-sm focus:ring-brand focus:border-brand border-gray-300 rounded-md"
                  placeholder={phone}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="package"
                className="block text-sm font-medium text-gray-700"
              >
                Package
              </label>
              <select
                id="package"
                name="package"
                className="mt-1 block w-full pl-3 pr-10 py-3 px-4 text-base border-gray-300 focus:outline-none focus:ring-brand focus:border-brand sm:text-sm rounded-md"
                value={state.selectedPackage}
              >
                <option selected>None</option>
                {packages.map(({ name, package_code }) => (
                  <option value={package_code}>{name}</option>
                ))}
              </select>
            </div>
            <div>
              <label
                htmlFor="package"
                className="block text-sm font-medium text-gray-700"
              >
                Property Type
              </label>
              <select
                id="property_type"
                name="property_type"
                className="mt-1 block w-full pl-3 pr-10 py-3 px-4 text-base border-gray-300 focus:outline-none focus:ring-brand focus:border-brand sm:text-sm rounded-md"
                value={state.buildType}
                onChange={() => dispatch({ type: "TOGGLE_BUILD_TYPE" })}
              >
                <option value="condo">Condo</option>
                <option value="house">House</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <div className="mt-1">
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="py-3 px-4 block w-full shadow-sm focus:ring-brand focus:border-brand border-gray-300 rounded-md"
                  placeholder={message}
                ></textarea>
              </div>
            </div>
            <div className="sm:col-span-2">
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-brand hover:bg-brand-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand"
              >
                {submit}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactForm
