'use client';

import React from "react";
import Swal from "sweetalert2";
import ImageCarouselFallback from "../carrousel/page";

const HomePage = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "5493462529718";
    const message = "Hola, quiero saber más de cómo asociarme a Sentidos";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleInProgressClick = () => {
    Swal.fire({
      title: "🚧 Sección en construcción",
      text: "Esta sección está en proceso de armado. ¡Pronto estará disponible!",
      icon: "info",
      confirmButtonText: "Entendido",
      confirmButtonColor: "#F59E0B",
      background: "#FFFBEB",
      backdrop: `rgba(0,0,0,0.4)`,
    });
  };

  return (
    <div className="w-full">
      {/* Hero Section - Colores modernos y profesionales */}
      <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-br from-slate-50 via-amber-50/30 to-orange-50/40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(251,191,36,0.08),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(249,115,22,0.06),transparent_50%)]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 rounded-full border border-amber-200">
                <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></span>
                <span className="text-sm font-medium text-amber-900">ONG Argentina con Personalidad Jurídica</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight">
                <span className="bg-gradient-to-r from-slate-900 via-amber-800 to-orange-700 bg-clip-text text-transparent">
                  Sentidos
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-slate-700 leading-relaxed font-normal">
                Una organización argentina dedicada a acompañar y apoyar a personas con fisura labio-alveolo-palatina (FLAP), 
                una condición congénita mal llamada labio leporino.
              </p>
              
              <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-slate-200 shadow-sm">
                <p className="text-base text-slate-600 leading-relaxed">
                  <span className="font-semibold text-slate-800">Nuestra misión:</span> Conectar personas, familias y profesionales, 
                  compartiendo experiencias y recursos que fortalezcan la comunidad, promoviendo la inclusión y el bienestar integral.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={handleWhatsAppClick}
                  className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-lg font-semibold rounded-xl hover:from-amber-600 hover:to-orange-600 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Asóciate Ahora
                </button>
                <button
                  onClick={handleInProgressClick}
                  className="px-8 py-4 bg-white text-slate-700 text-lg font-semibold rounded-xl border-2 border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all"
                >
                  Conocer Más
                </button>
              </div>
            </div>

            <div className="relative flex justify-center items-center">
              <div className="relative w-full max-w-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-200/30 to-orange-300/30 rounded-full blur-3xl"></div>
                <div className="relative bg-white rounded-3xl p-6 shadow-2xl border border-slate-200">
                  <ImageCarouselFallback />
                  
                  {/* Cinta superior izquierda */}
                  <div className="absolute -top-3 -left-3 w-32 h-8 bg-gradient-to-r from-amber-400 to-orange-500 transform -rotate-12 shadow-lg">
                    <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent"></div>
                  </div>
                  
                  {/* Cinta inferior derecha */}
                  <div className="absolute -bottom-3 -right-3 w-28 h-7 bg-gradient-to-r from-orange-500 to-red-500 transform rotate-12 shadow-lg">
                    <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Cards modernas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Descubre Sentidos
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Explora las diferentes formas en que puedes ser parte de nuestra comunidad
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                id: "conocenos",
                title: "Conocenos",
                text: "Conecta con tu comunidad en tiempo real. Comparte experiencias y momentos únicos.",
                img: "/assets/abuela.png",
                gradient: "from-amber-500 to-orange-500",
                bgGradient: "from-amber-50 to-orange-50",
              },
              {
                id: "eventos",
                title: "Eventos",
                text: "Descubre eventos y actividades cerca de ti. Crea conexiones significativas.",
                img: "/assets/mama.png",
                gradient: "from-blue-500 to-cyan-500",
                bgGradient: "from-blue-50 to-cyan-50",
              },
              {
                id: "asociate",
                title: "Asociate",
                text: "Mantente al día con las últimas novedades. Comparte tus historias.",
                img: "/assets/colabora.png",
                gradient: "from-purple-500 to-pink-500",
                bgGradient: "from-purple-50 to-pink-50",
              },
            ].map((card) => (
              <div
                key={card.id}
                id={card.id}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${card.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                
                <div className="relative p-8">
                  <div className="mb-6 relative">
                    <div className={`w-20 h-20 bg-gradient-to-br ${card.gradient} rounded-2xl shadow-lg overflow-hidden transform -rotate-3 group-hover:rotate-0 transition-transform duration-300`}>
                      <img src={card.img} alt={card.title} className="w-full h-full object-cover" />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">
                    {card.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    {card.text}
                  </p>
                  
                  <button
                    onClick={handleInProgressClick}
                    className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${card.gradient} text-white font-semibold rounded-xl hover:shadow-lg transition-all transform group-hover:scale-105`}
                  >
                    Ver más
                    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action - Diseño moderno y elegante */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(251,191,36,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(249,115,22,0.1),transparent_50%)]"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Únete a Nuestra Comunidad
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Forma parte de una red de apoyo donde compartimos experiencias, 
              conocimientos y construimos juntos un futuro más inclusivo
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button
                onClick={handleWhatsAppClick}
                className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-lg font-semibold rounded-xl hover:from-amber-600 hover:to-orange-600 transition-all transform hover:scale-105 shadow-xl"
              >
                Asóciate
              </button>
              <button
                onClick={handleInProgressClick}
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white text-lg font-semibold rounded-xl border-2 border-white/20 hover:bg-white/20 transition-all"
              >
                Contactar
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
