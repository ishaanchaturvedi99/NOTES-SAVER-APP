// src/Components/Home.jsx
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addtopaste, updatetopaste } from '../redux/Pasteslice';

const Home = () => {
  const [title, setTitle] = useState('');
  const [value, setValue] = useState('');
  const [searchparam, setParam] = useSearchParams();
  const pasteid = searchparam.get('pasteId');
  const dispatch = useDispatch();
  const allpastes = useSelector((state) => state.paste.pastes);

  useEffect(() => {
    if (pasteid) {
      const paste = allpastes.find((p) => p._id === pasteid);
      if (paste) {
        setTitle(paste.title);
        setValue(paste.content);
      }
    }
  }, [pasteid]);

  const createpaste = () => {
    const paste = {
      title,
      content: value,
      _id: pasteid || Date.now().toString(36),
      createdAT: new Date().toISOString(),
    };
    pasteid ? dispatch(updatetopaste(paste)) : dispatch(addtopaste(paste));
    setTitle('');
    setValue('');
    setParam({});
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-md w-[90%] max-w-2xl space-y-4">
        <h1 className="text-2xl font-bold text-center">
          {pasteid ? 'Edit Paste' : 'Create a New Paste'}
        </h1>
        <input
          className="w-full p-3 rounded-lg border border-gray-300"
          type="text"
          placeholder="Enter your title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="w-full p-4 rounded-lg border border-gray-300"
          placeholder="Enter content here"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          rows={10}
        />
        <button
          onClick={createpaste}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition"
        >
          {pasteid ? 'Update Paste' : 'Create Paste'}
        </button>
      </div>
    </div>
  );
};

export default Home;
