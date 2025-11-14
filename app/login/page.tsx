'use client';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LoginComponent from '../components/LoginComponent';
import { UserProvider, useUser } from '../context/userContext';

function LoginPageContent() {
  const { user, logout } = useUser();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar user={user} onLogout={logout} onOpenModal={() => {}} />
      <main className="flex-grow">
        <LoginComponent />
      </main>
      <Footer />
    </div>
  );
}

export default function LoginPage() {
  return (
    <UserProvider>
      <LoginPageContent />
    </UserProvider>
  );
}