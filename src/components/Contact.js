import React, { useState } from 'react';
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
//commented out because the logic isn't working
  // const handleBlur = (e) => {
  //   const { name, value } = e.target;
  //   if (!value) {
  //     toast.error('Please complete all fields', {
  //       position: toast.POSITION.TOP_CENTER,
  //       autoClose: 2000
  //     });
  //   }
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <h2>Contact Page</h2>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" aria-label="Name">
            Name:
          </label>
          <input
            type="text"
            id="name"
            className="input-field"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email" aria-label="Email">
            Email:
          </label>
          <input
            type="email"
            id="email"
            className="input-field"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="message" aria-label="Message">
            Message:
          </label>
          <textarea
            id="message"
            className="input-field"
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </>
  );
};

export default ContactForm;
