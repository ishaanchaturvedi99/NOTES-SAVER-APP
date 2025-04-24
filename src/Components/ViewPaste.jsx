// src/Components/ViewPaste.jsx
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ViewPaste = () => {
  const { id } = useParams();
  const allpastes = useSelector((state) => state.paste.pastes);
  const paste = allpastes.find((p) => p._id === id);

  if (!paste) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-600 text-lg">Paste not found.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-[90%] max-w-2xl">
        <h1 className="text-2xl font-bold text-center mb-4">{paste.title}</h1>
        <div className="text-sm text-center text-gray-500 mb-4">
          Created on: {new Date(paste.createdAT).toLocaleString()}
        </div>
        <textarea
          className="w-full p-4 rounded-lg border border-gray-300 bg-gray-50"
          value={paste.content}
          readOnly
          rows={10}
        />
      </div>
    </div>
  );
};

export default ViewPaste;
