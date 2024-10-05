import React, { useState } from 'react';
import { motion } from 'framer-motion';
import RoleSelector from '../components/home/RoleSelector';

const Home = () => {
  const [selectedRole, setSelectedRole] = useState(null);

  return (
    <div className="min-h-screen bg-eduportal text-white">
      <div className="container mx-auto px-4 py-16">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold text-center mb-4"
        >
          Welcome to EduPortal
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-center mb-12 text-gray-300"
        >
          Empowering education through seamless connectivity
        </motion.p>

        <RoleSelector onSelectRole={setSelectedRole} />

        {selectedRole && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-12 text-center"
          >
            <p className="text-xl mb-4">You selected: {selectedRole}</p>
            <div className="flex justify-center space-x-4">
              <button className="btn btn-primary">Login</button>
              <button className="btn btn-secondary">Register</button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Home;