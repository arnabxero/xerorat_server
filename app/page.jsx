'use client'
import React, { useState } from 'react';

const LoginForm = () => {

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-sm">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <a href='/auth/login'>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Login
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
