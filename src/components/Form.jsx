import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_9oyr9gu',  // Replace with your EmailJS Service ID
      'template_sgq9cuh', // Replace with your EmailJS Template ID
      form.current,
      'M5t7VwFQAwmdpWWF5'      // Replace with your EmailJS User ID
    )
      .then((result) => {
        console.log('Email successfully sent!', result.text);
        alert('Message sent successfully!');
      }, (error) => {
        console.log('Failed to send email.', error.text);
        alert('Failed to send the message.');
      });

    e.target.reset();
  };

  return (
    <div className="bg-violet-200 flex justify-center items-center min-h-screen">
      <div
        className="py-6 lg:py-12 px-6 sm:px-10 md:px-14 mx-auto w-full sm:w-[90%] md:w-[600px] max-w-[700px] h-auto rounded-3xl bg-gradient-to-b 
             from-purple-800 to-indigo-900 shadow-2xl border-4 border-indigo-500 border-opacity-40 
             transform hover:scale-105 transition-all duration-300"
      >

        <form ref={form} onSubmit={sendEmail} className="space-y-6">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="first-name" className="block mb-2 text-sm font-medium text-gray-300">
                First Name
              </label>
              <input
                type="text"
                name="first_name"
                id="first-name"
                className="block p-4 w-full text-sm text-gray-900 bg-gray-300 rounded-2xl border border-gray-400 
                shadow-lg focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 
                transform hover:scale-105 hover:shadow-indigo-500/50"
                placeholder="First Name"
                required
              />
            </div>

            <div>
              <label htmlFor="last-name" className="block mb-2 text-sm font-medium text-gray-300">
                Last Name
              </label>
              <input
                type="text"
                name="last_name"
                id="last-name"
                className="block p-4 w-full text-sm text-gray-900 bg-gray-300 rounded-2xl border border-gray-400 
                shadow-lg focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 
                transform hover:scale-105 hover:shadow-indigo-500/50"
                placeholder="Last Name"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-300">
              Your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="shadow-lg bg-gray-300 border border-gray-400 text-gray-900 text-sm rounded-2xl 
              focus:ring-indigo-500 focus:border-indigo-500 block w-full p-4 transition-all duration-300 
              transform hover:scale-105 hover:shadow-indigo-500/50"
              placeholder="name@flowbite.com"
              required
            />
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-300">
              Your message
            </label>
            <textarea
              id="message"
              name="message"
              rows="3"
              className="block p-4 w-full text-sm text-gray-900 bg-gray-300 rounded-2xl shadow-lg 
              border border-gray-400 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 
              transform hover:scale-105 hover:shadow-indigo-500/50"
              placeholder="Leave a comment..."
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="py-3 px-6 text-sm font-medium text-center text-white rounded-2xl bg-gradient-to-r 
            from-pink-500 to-red-500 shadow-xl hover:shadow-red-500/50 transform hover:scale-110 
            transition-all duration-300 focus:ring-4 focus:outline-none focus:ring-primary-300"
          >
            Send message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;