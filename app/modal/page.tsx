// components/CreateModal.tsx
'use client'

import React, { useState } from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  type: 'post' | 'event';
  onClose: () => void;
  user: User | null;
}

interface User {
  id: string;
  name: string;
  avatar: string;
  rol: 'admin' | 'user' | 'moderator';
}


const CreateModal: React.FC<ModalProps> = ({ type, onClose, user }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (): void => {
    if (!user) {
      alert('Demo: Simulando login...');
      setTimeout(() => {
        alert('En la aplicación real, aquí iniciarías sesión primero');
        onClose();
      }, 500);
      return;
    }
    alert(`${type === 'post' ? 'Post' : 'Evento'} creado: ${title}`);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800">
            {type === 'post' ? 'Crear Nuevo Post' : 'Crear Nuevo Evento'}
          </h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
            <X size={24} />
          </button>
        </div>
        <div className="p-6 space-y-4">
          {/* campos del modal */}
        </div>
      </div>
    </div>
  );
};

export default CreateModal; // ✅ export default correcto
