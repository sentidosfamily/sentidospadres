// components/CreateModal.tsx
'use client';

import React, { useState } from 'react';
import { X } from 'lucide-react';

interface User {
  id: string;
  name: string;
  avatar: string;
  rol: 'admin' | 'user' | 'moderator';
}

interface ModalProps {
  type: 'post' | 'event';
  onClose: () => void;
  user: User | null;
}

const CreateModal: React.FC<ModalProps> = ({ type, onClose, user }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventLocation, setEventLocation] = useState('');

  const handleSubmit = (): void => {
    if (!user) {
      alert('Demo: Simulando login...');
      setTimeout(() => {
        alert('En la aplicación real, aquí iniciarías sesión primero');
        onClose();
      }, 500);
      return;
    }
    
    if (!title.trim()) {
      alert('Por favor, ingresa un título');
      return;
    }
    
    if (!content.trim()) {
      alert('Por favor, ingresa contenido');
      return;
    }
    
    alert(`${type === 'post' ? 'Post' : 'Evento'} creado: ${title}`);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gradient-to-r from-orange-50 to-orange-100">
          <h2 className="text-2xl font-bold text-gray-800">
            {type === 'post' ? 'Crear Nuevo Post' : 'Crear Nuevo Evento'}
          </h2>
          <button 
            onClick={onClose} 
            className="p-2 hover:bg-orange-200 rounded-full transition-colors"
            aria-label="Cerrar modal"
          >
            <X size={24} className="text-gray-700" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-5">
          {/* Título */}
          <div>
            <label htmlFor="title" className="block text-sm font-semibold text-gray-700 mb-2">
              Título
            </label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder={type === 'post' ? 'Título del post...' : 'Nombre del evento...'}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
            />
          </div>

          {/* Campos específicos para eventos */}
          {type === 'event' && (
            <>
              <div>
                <label htmlFor="eventDate" className="block text-sm font-semibold text-gray-700 mb-2">
                  Fecha del evento
                </label>
                <input
                  id="eventDate"
                  type="date"
                  value={eventDate}
                  onChange={(e) => setEventDate(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                />
              </div>

              <div>
                <label htmlFor="eventLocation" className="block text-sm font-semibold text-gray-700 mb-2">
                  Ubicación
                </label>
                <input
                  id="eventLocation"
                  type="text"
                  value={eventLocation}
                  onChange={(e) => setEventLocation(e.target.value)}
                  placeholder="Dirección o lugar del evento..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                />
              </div>
            </>
          )}

          {/* Contenido */}
          <div>
            <label htmlFor="content" className="block text-sm font-semibold text-gray-700 mb-2">
              {type === 'post' ? 'Contenido' : 'Descripción'}
            </label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder={type === 'post' 
                ? '¿Qué quieres compartir?' 
                : 'Describe los detalles del evento...'}
              rows={6}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all resize-none"
            />
          </div>

          {/* Botones */}
          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-all"
            >
              Cancelar
            </button>
            <button
              type="button"
              onClick={handleSubmit}
              className="flex-1 px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all transform hover:scale-105 shadow-lg"
            >
              {type === 'post' ? 'Publicar' : 'Crear Evento'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateModal;

