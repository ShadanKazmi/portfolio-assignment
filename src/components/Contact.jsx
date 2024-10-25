import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const templateParams = {
      from_name: name,
      to_name: 'Shadan Kazmi',
      reply_to: email,
      message,
    };

    emailjs.send(
      'service_0p806ac',
      'template_hgbk9uh',
      templateParams,
      'kuKZNspWOGYq5IkjH'
    )
      .then((result) => {
        setIsSubmitting(false);
        setSuccessMessage('Message sent successfully!');
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        setIsSubmitting(false);
        setErrorMessage('Failed to send message. Please try again.');
        console.error('EmailJS error:', error.text);
      });
  };

  return (
    <div id="contact" className="bg-gradient-to-r from-blue-950 via-blue-900 to-blue-800 text-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-extrabold mb-12 text-center text-white tracking-wider">Let's Connect!</h2>
        <div className="flex justify-center">
          <div className="w-full max-w-lg">
            <form className="bg-gray-800 p-8 rounded-lg shadow-lg" onSubmit={sendEmail}>
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
              {successMessage && (
                <div className="mt-4 text-green-500 text-center">{successMessage}</div>
              )}
              {errorMessage && (
                <div className="mt-4 text-red-500 text-center">{errorMessage}</div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
