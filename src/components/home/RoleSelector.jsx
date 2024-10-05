import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, User, UserPlus, Users } from 'lucide-react';

const roleData = [
  { id: 'student', title: 'Student', icon: User, color: 'bg-blue-500' },
  { id: 'teacher', title: 'Teacher', icon: UserPlus, color: 'bg-green-500' },
  { id: 'council', title: 'Council', icon: Users, color: 'bg-purple-500' },
];

const RoleSelector = ({ onSelectRole }) => {
  return (
    <div className="space-y-4 w-full max-w-md mx-auto">
      {roleData.map((role) => (
        <motion.div
          key={role.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className={`${role.color} rounded-lg p-4 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer`}
          onClick={() => onSelectRole(role.id)}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <role.icon size={24} className="text-white mr-3" />
              <div>
                <h2 className="text-xl font-bold text-white">{role.title}</h2>
                <p className="text-sm text-white opacity-80">Click to proceed as {role.title}</p>
              </div>
            </div>
            <ChevronRight size={24} className="text-white" />
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default RoleSelector;
