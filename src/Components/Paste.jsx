// src/Components/Paste.jsx
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removefrompaste } from '../redux/Pasteslice';
import toast from 'react-hot-toast';

const Paste = () => {
  const pastes = useSelector((state) => state.paste.pastes);
  const [searchTerm, setsearchTerm] = useState('');
  const dispatch = useDispatch();

  const filteredData = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handledelete = (pasteId) => {
    dispatch(removefrompaste({ _id: pasteId }));
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      <input
        className="w-full max-w-xl p-3 border border-gray-300 rounded-lg mb-6"
        type="search"
        placeholder="Search pastes by title"
        value={searchTerm}
        onChange={(e) => setsearchTerm(e.target.value)}
      />

      <div className="space-y-6 w-full max-w-xl">
        {filteredData.length === 0 ? (
          <p className="text-center text-gray-500">No pastes found.</p>
        ) : (
          filteredData.map((paste) => (
            <div
              key={paste._id}
              className="bg-white p-6 rounded-lg shadow-md space-y-3"
            >
              <div className="text-lg font-bold text-center">{paste.title}</div>
              <div className="text-sm text-center text-gray-500">
                Created on: {new Date(paste.createdAT).toLocaleString()}
              </div>
              <div className="text-gray-700 whitespace-pre-wrap text-center">{paste.content}</div>

              <div className="flex flex-wrap gap-3 justify-center pt-2">
                <a
                  href={`/?pasteId=${paste._id}`}
                  className="text-blue-600 hover:underline"
                >
                  Edit
                </a>
                <a
                  href={`/pastes/${paste._id}`}
                  className="text-green-600 hover:underline"
                >
                  View
                </a>
                <button
                  className="text-red-600 hover:underline"
                  onClick={() => handledelete(paste._id)}
                >
                  Delete
                </button>
                <button
                  className="text-purple-600 hover:underline"
                  onClick={() => {
                    navigator.clipboard.writeText(paste.content);
                    toast.success('Copied to clipboard');
                  }}
                >
                  Copy
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Paste;
