import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function LoginPage({ signupHandler }) {
  const [formData, setFormData] = useState({ email: '', name: '', password: '' });
  const handlerChange = (e) => setFormData(
    (prev) => ({ ...prev, [e.target.name]: e.target.value }),
  );
  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '5%',
    }}
    >
      <motion.form
        onSubmit={signupHandler}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div>
          <div className="mb-3">
            <label className="form-label">
              <motion.input
                onChange={handlerChange}
                value={formData.name}
                name="name"
                type="name"
                placeholder="name"
                className="form-control"
                id="exampleInputName1"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              />
            </label>
          </div>
          <div className="mb-3">
            <label className="form-label">
              <motion.input
                onChange={handlerChange}
                value={formData.email}
                name="email"
                type="email"
                placeholder="Email address"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              />
            </label>
          </div>
          <div className="mb-3">
            <label className="form-label">
              <motion.input
                onChange={handlerChange}
                value={formData.password}
                name="password"
                type="password"
                placeholder="Password"
                className="form-control"
                id="exampleInputPassword1"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              />
            </label>
          </div>
          <motion.button
            style={{ marginRight: '6%', width: '100px' }}
            type="submit"
            className="btn btn-dark"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Вход
          </motion.button>
        </div>
      </motion.form>
    </div>
  );
}
