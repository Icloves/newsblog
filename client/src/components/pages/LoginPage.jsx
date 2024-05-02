import React from 'react';
import { motion } from 'framer-motion';

export default function LoginPage() {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '5%',
    }}
    >
      <motion.form
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div>
          <div className="mb-3">
            <label className="form-label">
              <motion.input
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
