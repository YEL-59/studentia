import React, { useState } from 'react';
import { Plus, RotateCcw, Trash2, Clock } from 'lucide-react';
import dayjs from 'dayjs';
import noteTakingIcon from '@/assets/icons/note-taking-icon.svg';

export default function NotebookApp() {
  const [noteTitle, setNoteTitle] = useState('');
  const [notes, setNotes] = useState([]);

  const handleAddNote = () => {
    if (!noteTitle.trim()) return;
    const newNote = {
      id: Date.now(),
      title: noteTitle,
      timestamp: new Date().toISOString(),
    };
    setNotes([newNote, ...notes]);
    setNoteTitle('');
  };

  const handleDeleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div className="h-full w-full text-white space-y-4">
      {/* Header */}
      <div className="flex justify-between items-center w-full">
        <div className="flex items-center gap-2">
          <img src={noteTakingIcon} alt="" className="w-5 h-5" />
          <span className="text-sm">
            <i className="fa fa-edit" /> Note Title
          </span>
        </div>
        <div className="flex gap-3 text-purple-400">
          <button onClick={handleAddNote}>
            <Plus />
          </button>
          <button>
            <RotateCcw />
          </button>
        </div>
      </div>

      {/* Input Line */}
      <div className="border-b border-purple-700" />

      {/* Input Field */}
      <input
        type="text"
        placeholder="Title Goes Here..."
        value={noteTitle}
        onChange={(e) => setNoteTitle(e.target.value)}
        className="bg-transparent focus:outline-none text-lg mt-2"
      />

      {/* Notes List */}
      <div className="space-y-3">
        {notes.map((note) => (
          <div
            key={note.id}
            className="flex justify-between items-center px-4 py-2 bg-gradient-to-r from-[#7A43A4] to-[#6049BC] rounded-xl"
          >
            <span className="font-medium">{note.title}</span>
            <div className="flex items-center gap-2 text-sm text-white/80">
              <Clock className="w-4 h-4" />
              <span>{dayjs(note.timestamp).format('hh:mm A, MMM D')}</span>
              <button onClick={() => handleDeleteNote(note.id)}>
                <Trash2 className="w-4 h-4 hover:text-red-500" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
