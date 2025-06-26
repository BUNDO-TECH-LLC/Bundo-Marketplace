import React, { useState } from 'react';

const RegisterPage = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    role: 'artisan', // or 'client'
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Replace with actual backend API call
    try {
      const res = await fetch('http://localhost:5000/api/users/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });

      const data = await res.json();
      console.log(data);
      alert('Registration successful!');
    } catch (error) {
      console.error('Error registering:', error);
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: 'auto', paddingTop: 80 }}>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
          style={{ display: 'block', width: '100%', marginBottom: 10 }}
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
          style={{ display: 'block', width: '100%', marginBottom: 10 }}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
          style={{ display: 'block', width: '100%', marginBottom: 10 }}
        />
        <select
          name="role"
          value={form.role}
          onChange={handleChange}
          style={{ display: 'block', width: '100%', marginBottom: 10 }}
        >
          <option value="artisan">Artisan</option>
          <option value="client">Client</option>
        </select>
        <button type="submit" style={{ width: '100%' }}>Register</button>
      </form>
    </div>
  );
};

export default RegisterPage;
