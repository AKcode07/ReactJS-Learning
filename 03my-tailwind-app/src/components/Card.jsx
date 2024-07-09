// src/ProfileCard.js
import React from 'react';

function ProfileCard() {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src="/AK.jpg" alt="Profile" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Ashwin</div>
        <p className="text-gray-700 text-base">
          Ak is a software engineer with 10 years of experience in web development.
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#webdev</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#javascript</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#react</span>
      </div>
    </div>
  );
}

export default ProfileCard;
