'use client';

import { useState } from 'react';
import { UserProvider, useUser } from './context/userContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CreateModal from './modal/page';
import HomePage from './HomePage/page';

// Componente interno que usa el contexto
function PageContent() {
  const { user, logout } = useUser();
  const [modalType, setModalType] = useState<'post' | 'event' | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar user={user} onLogout={logout} onOpenModal={setModalType} />
      <main className="flex-grow">
        <HomePage />
      </main>
      <Footer />
      {modalType && <CreateModal type={modalType} onClose={() => setModalType(null)} user={user} />}
    </div>
  );
}

// Componente principal que provee el contexto
export default function Page() {
  return (
    <UserProvider>
      <PageContent />
    </UserProvider>
  );
}