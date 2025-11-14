'use client';

import React from "react";
import ImageCarouselFallback from "../carrousel/page";

const HomePage = () => {
    const handleWhatsAppClick = () => {
        const phoneNumber = "5493462529718"; // Formato internacional sin + ni espacios
        const message = "Hola, quiero saber más de cómo asociarme a Sentidos";
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    const handleInProgressClick = () => {
        alert('🚧 Esta sección está en proceso de armado. ¡Pronto estará disponible!');
    };

    return (
        <div className="w-full">
            <section className="relative bg-gradient-to-br from-orange-300 to-orange-500 py-12 md:py-20 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        <div className="space-y-6 z-10">
                            {/* Título con efecto nevada gris-blanco */}
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-br from-gray-100 via-white to-gray-200 bg-clip-text text-transparent leading-tight" style={{ filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.3)) drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2))' }}>
                                Sentidos
                            </h1>
                            <p
                                className="text-lg md:text-xl text-gray-100 font-medium leading-relaxed shadow-lg px-4 py-2"
                                style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}
                            >
                                Sentidos es una ONG argentina con personalidad jurídica en Rosario,
                                dedicada a acompañar y apoyar a personas con fisura labio-alveolo-palatina
                                (FLAP), una condición congénita mal llamada labio leporino.
                                <br></br>
                                La fisura es una malformación que ocurre durante el desarrollo fetal,
                                donde no se fusionan correctamente los tejidos que forman el labio superior
                                y/o el paladar. Nuestra misión es conectar personas, familias y profesionales,
                                compartiendo experiencias y recursos que fortalezcan la comunidad,
                                promoviendo la inclusión y el bienestar integral de quienes viven con esta condición.
                            </p>

                            <button 
                                onClick={handleWhatsAppClick}
                                className="inline-block px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-600 text-white text-lg font-semibold rounded-full hover:from-yellow-600 hover:to-orange-700 transition-all transform hover:scale-105 shadow-2xl" 
                                style={{ boxShadow: '0 10px 25px rgba(0, 0, 0, 0.4), 0 6px 12px rgba(0, 0, 0, 0.3)' }}
                            >
                                Asóciate
                            </button>
                        </div>

                        <div className="relative flex justify-center items-center">
                            <div className="relative w-full max-w-lg">
                                <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full opacity-40 blur-3xl transform scale-110"></div>
                                <div className="relative bg-gradient-to-br from-orange-100 to-orange-200 rounded-[3rem] p-8 shadow-2xl">
                                    <ImageCarouselFallback  />
                                    {/* Cinta adhesiva superior izquierda */}
                                    <div className="absolute -top-6 -left-6 w-24 h-16 bg-white/80 backdrop-blur-sm shadow-md transform -rotate-12" 
                                         style={{ 
                                           background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(240,240,240,0.8) 100%)',
                                           boxShadow: '0 2px 8px rgba(0,0,0,0.1), inset 0 1px 2px rgba(255,255,255,0.5)'
                                         }}>
                                    </div>
                                    {/* Cinta adhesiva inferior derecha */}
                                    <div className="absolute -bottom-6 -right-6 w-20 h-14 bg-white/80 backdrop-blur-sm shadow-md transform rotate-12" 
                                         style={{ 
                                           background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(240,240,240,0.8) 100%)',
                                           boxShadow: '0 2px 8px rgba(0,0,0,0.1), inset 0 1px 2px rgba(255,255,255,0.5)'
                                         }}>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0">
                    <svg viewBox="0 0 1440 120" fill="none" className="w-full">
                        <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" fill="white" />
                    </svg>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div id="conocenos" className="bg-gradient-to-br from-orange-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-orange-100 relative overflow-visible">
                            <div className="absolute -top-8 -left-8 w-24 h-24 bg-white rounded-lg shadow-xl transform -rotate-12 border-4 border-white overflow-hidden z-10"
                                 style={{ boxShadow: '0 10px 20px rgba(0,0,0,0.15)' }}>
                                <img 
                                    src="/assets/abuela.png" 
                                    alt="Conocenos" 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="mt-8">
                                <h3 className="text-2xl font-bold text-gray-800 mb-3">Conocenos</h3>
                                <p className="text-gray-600 leading-relaxed mb-4">
                                    Conecta con tu comunidad en tiempo real. Comparte experiencias y momentos únicos.
                                </p>
                                <button 
                                    onClick={handleInProgressClick}
                                    className="px-6 py-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-all"
                                >
                                    Ver más
                                </button>
                            </div>
                        </div>

                        <div id="eventos" className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-blue-100 relative overflow-visible">
                            <div className="absolute -top-8 -left-8 w-24 h-24 bg-white rounded-lg shadow-xl transform -rotate-12 border-4 border-white overflow-hidden z-10"
                                 style={{ boxShadow: '0 10px 20px rgba(0,0,0,0.15)' }}>
                                <img 
                                    src="/assets/mama.png" 
                                    alt="Eventos" 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="mt-8">
                                <h3 className="text-2xl font-bold text-gray-800 mb-3">Eventos</h3>
                                <p className="text-gray-600 leading-relaxed mb-4">
                                    Descubre eventos y actividades cerca de ti. Crea conexiones significativas.
                                </p>
                                <button 
                                    onClick={handleInProgressClick}
                                    className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-all"
                                >
                                    Ver más
                                </button>
                            </div>
                        </div>

                        <div id="asociate" className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-purple-100 relative overflow-visible">
                            <div className="absolute -top-8 -left-8 w-24 h-24 bg-white rounded-lg shadow-xl transform -rotate-12 border-4 border-white overflow-hidden z-10"
                                 style={{ boxShadow: '0 10px 20px rgba(0,0,0,0.15)' }}>
                                <img 
                                    src="/assets/colabora.png" 
                                    alt="Asociate" 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="mt-8">
                                <h3 className="text-2xl font-bold text-gray-800 mb-3">Asociate</h3>
                                <p className="text-gray-600 leading-relaxed mb-4">
                                    Mantente al día con las últimas novedades. Comparte tus historias.
                                </p>
                                <button 
                                    onClick={handleInProgressClick}
                                    className="px-6 py-2 bg-purple-500 text-white font-semibold rounded-lg hover:bg-purple-600 transition-all"
                                >
                                    Ver más
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gradient-to-r from-orange-500 to-orange-600">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Únete a Nuestra Comunidad
                    </h2>
                    <p className="text-xl text-orange-100 mb-8">
                        Conoce y comparte experiencias
                    </p>
                    <button 
                        onClick={handleWhatsAppClick}
                        className="px-8 py-4 bg-white text-orange-600 text-lg font-semibold rounded-full hover:bg-orange-50 transition-all transform hover:scale-105 shadow-lg"
                    >
                        Asóciate
                    </button>
                </div>
            </section>
        </div>
    );
};


export default HomePage;
