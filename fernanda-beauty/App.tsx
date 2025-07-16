

import React, { useState } from 'react';
import { services, removalService, careGuideItems, bookingInfoItems, MenuIcon, MapPinIcon, InstagramIcon, HeartIcon, OrnamentIcon } from './constants';
import ServiceCard from './components/ServiceCard';
import Modal from './components/Modal';
import { ModalType, Service } from './types';

const CareGuideContent: React.FC = () => (
  <div className="space-y-4 text-gray-200">
    <ul className="space-y-3 list-inside">
      {careGuideItems.map((item, index) => (
        <li key={index} className="flex items-start">
          <HeartIcon className="w-5 h-5 mr-3 mt-1 text-pink-400 flex-shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
    <div className="pt-4 text-center border-t border-white/10 mt-6">
        <p className="font-semibold">Poste uma foto sua com os cílios no Instagram.</p>
        <p className="text-sm text-gray-400">Vou adorar repostar!</p>
        <a href="https://www.instagram.com/fernandabeauty" target="_blank" rel="noopener noreferrer" className="inline-block mt-2 text-pink-400 hover:text-pink-300 transition-colors">
            @Fernandabeauty
        </a>
    </div>
  </div>
);

const BookingInfoContent: React.FC = () => (
    <div className="space-y-6 text-gray-300">
        {bookingInfoItems.map((item, index) => (
            <div key={index}>
                <h3 className="font-semibold text-lg text-pink-300">{item.title}</h3>
                <p>{item.text}</p>
            </div>
        ))}
        <div className="pt-4 text-center border-t border-white/10 mt-6">
            <p className="font-semibold text-lg">Pronta para agendar?</p>
            <p>Consegue fazer via PIX para finalizarmos o seu agendamento?</p>
            <a href="https://wa.me/5566999914911" target="_blank" rel="noopener noreferrer" className="mt-4 inline-block bg-gradient-to-r from-pink-500 to-rose-400 text-white font-bold py-2 px-6 rounded-full hover:scale-105 transition-transform">
                Agendar via WhatsApp
            </a>
        </div>
    </div>
);

const AddressContent: React.FC = () => (
  <div className="text-center text-gray-200">
    <MapPinIcon className="w-12 h-12 mx-auto text-pink-400 mb-4" />
    <p className="text-2xl font-semibold">Avenida Jaçanã, 823</p>
    <p className="text-lg">Parque Universitário</p>
    <a 
      href="https://www.google.com/maps/search/?api=1&query=Avenida+Jaçanã+823,+Parque+universitário"
      target="_blank"
      rel="noopener noreferrer"
      className="mt-4 inline-block bg-white/10 border border-white/20 text-white font-bold py-2 px-6 rounded-full hover:bg-white/20 transition-all"
    >
      Ver no mapa
    </a>
  </div>
);

const ServiceDetailContent: React.FC<{ service: Service; onBook: () => void }> = ({ service, onBook }) => (
    <div className="flex flex-col md:flex-row gap-8 text-gray-200">
        <div className="flex-shrink-0 md:w-1/3">
             <img
              src={service.image}
              alt={service.name}
              className="w-full h-auto rounded-xl object-cover border-2 border-white/20"
            />
        </div>
        <div className="flex flex-col">
            <p className="mb-4 text-gray-300">{service.description}</p>
            {service.duration && <p className="text-sm text-gray-400 mb-4"><strong>Duração:</strong> {service.duration}</p>}
            <div className="text-lg space-y-2 mb-6">
                 <p>
                    <span className="font-semibold text-pink-300">Aplicação:</span> R$ {service.applicationPrice.toFixed(2)}
                </p>
                {service.maintenancePrice && (
                    <p>
                        <span className="font-semibold text-pink-300">Manutenção:</span> R$ {service.maintenancePrice.toFixed(2)}
                    </p>
                )}
            </div>
            <button onClick={onBook} className="mt-auto w-full md:w-auto bg-gradient-to-r from-pink-500 to-rose-400 text-white font-bold py-3 px-8 rounded-full hover:scale-105 transition-transform duration-300 shadow-lg shadow-pink-500/30">
                Reservar Horário
            </button>
        </div>
    </div>
);


const App: React.FC = () => {
  const [activeModal, setActiveModal] = useState<ModalType | null>(null);
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const openModal = (modal: ModalType) => setActiveModal(modal);
  const closeModal = () => setActiveModal(null);
  
  const handleServiceClick = (service: Service) => setSelectedService(service);
  const handleCloseServiceModal = () => setSelectedService(null);

  const modalContent = {
    address: { title: "Endereço", content: <AddressContent /> },
    booking: { title: "Reserva de Horário", content: <BookingInfoContent /> },
    care: { title: "Guia de Cuidados", content: <CareGuideContent /> }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white selection:bg-pink-500/50">
      {/* Background Styling */}
      <div className="fixed inset-0 z-[-1] bg-gradient-to-br from-black via-[#100a0e] to-[#2c0f1d] overflow-hidden">
         <div className="absolute top-[-20%] left-[-20%] w-96 h-96 bg-pink-500/20 rounded-full filter blur-3xl animate-pulse-slow opacity-50"></div>
         <div className="absolute bottom-[-20%] right-[-20%] w-96 h-96 bg-rose-500/20 rounded-full filter blur-3xl animate-pulse-slower opacity-50"></div>
      </div>
      
      {/* Navbar */}
      <header className="sticky top-0 z-40 bg-black/30 backdrop-blur-lg border-b border-white/10">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-serif tracking-wider text-white">Fernanda Beauty</a>
          <div className="hidden md:flex space-x-4">
            <button onClick={() => openModal('address')} className="hover:text-pink-300 transition-colors">Endereço</button>
            <button onClick={() => openModal('booking')} className="hover:text-pink-300 transition-colors">Reservas</button>
            <button onClick={() => openModal('care')} className="hover:text-pink-300 transition-colors">Cuidados</button>
          </div>
          <button className="md:hidden" onClick={() => openModal('address')}><MenuIcon/></button>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="relative text-center flex flex-col items-center justify-center overflow-hidden -mx-4 sm:-mx-6 lg:-mx-8">
          {/* Background Image Layer */}
          <div className="absolute inset-0 z-0">
            <img 
              src="./fer.jpg" 
              alt="Eyelash background" 
              className="w-full h-full object-cover filter blur-[2px] scale-105"
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          
          {/* Glassmorphism Content Container */}
          <div className="relative z-10 w-full py-20 md:py-32 flex flex-col items-center bg-black/20 backdrop-blur-md">
            <div className="relative mb-6">
                <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-pink-600 to-rose-400 blur-xl animate-pulse-slow"></div>
                <img src="/fer.jpg" alt="Fernanda" className="relative w-48 h-48 md:w-56 md:h-56 rounded-full object-cover shadow-2xl border-4 border-pink-900/50"/>
            </div>
            <h1 className="font-serif text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-pink-200" style={{'textShadow': '0 0 15px rgba(236, 72, 153, 0.3)'}}>
              Fernanda
            </h1>
            <h2 className="font-serif text-5xl md:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-rose-300 to-pink-400 mb-8">
              Beauty
            </h2>
            <a href="#services" className="bg-gradient-to-r from-pink-500 to-rose-400 text-white font-bold py-3 px-8 rounded-full hover:scale-105 transition-transform duration-300 shadow-lg shadow-pink-500/30">
               CATALOGO DE CÍLIOS
            </a>
          </div>
        </section>

        {/* About Section */}
        <section className="relative text-center overflow-hidden rounded-2xl my-20">
          {/* Background Image Layer */}
          <div className="absolute inset-0 z-0">
            <img 
              src="" 
              alt="Relaxing background" 
              className="w-full h-full object-cover filter blur-[2px] scale-105"
            />
            <div className="absolute inset-0 bg-black/60"></div>
          </div>

          {/* Glassmorphism Content Container */}
          <div className="relative z-10 w-full py-16 px-8 bg-black/20 backdrop-blur-md">
            <h2 className="text-4xl font-serif mb-4 text-pink-300">Sobre o Atendimento</h2>
            <OrnamentIcon className="mx-auto my-4"/>
            <div className="max-w-3xl mx-auto space-y-4 text-gray-300">
                <p>O procedimento leva em torno de <strong>1:30 a 2 horas</strong>, dependendo da quantidade de fios e da técnica escolhida.</p>
                <p>Venha <strong>sem maquiagem</strong> na região dos olhos, principalmente rímel.</p>
                <p>Aproveite esse momento para <strong>relaxar!</strong></p>
            </div>
          </div>
        </section>


        {/* Services Section */}
        <section id="services" className="relative text-center overflow-hidden rounded-2xl my-20">
          {/* Background Image Layer */}
          <div className="absolute inset-0 z-0">
            <img 
              src="/fer.jpg"
              alt="Beauty services background" 
              className="w-full h-full object-cover filter blur-[2px] scale-105"
            />
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
        
          {/* Glassmorphism Content Container */}
          <div className="relative z-10 w-full py-16 px-4 sm:px-6 lg:px-8 bg-black/20 backdrop-blur-md">
            <h2 className="text-5xl font-serif text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-rose-300 to-pink-300">Nossos Serviços</h2>
            <p className="text-center text-gray-400 mb-12">Procedimento de 1:30 a 2 horas em média</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map(service => 
                    <ServiceCard 
                        key={service.name} 
                        service={service} 
                        onClick={() => handleServiceClick(service)}
                    />
                )}
                <div className="md:col-span-2 lg:col-span-3 flex justify-center">
                    <div className="w-full max-w-sm">
                        <ServiceCard 
                            service={removalService}
                            onClick={() => handleServiceClick(removalService)} 
                        />
                    </div>
                </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 mt-20 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400">
            <div className="flex justify-center items-center gap-4 mb-4">
                <MapPinIcon className="w-5 h-5"/>
                <span>Avenida Jaçanã, 823 - Parque Universitário</span>
            </div>
            <a href="https://www.instagram.com/fernandabeauty" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center gap-2 hover:text-pink-300 transition-colors">
                <InstagramIcon className="w-5 h-5"/>
                <span>@Fernandabeauty</span>
            </a>
            <p className="mt-8 text-sm">&copy; {new Date().getFullYear()} Fernanda Beauty. Todos os direitos reservados.</p>
        </div>
      </footer>
      
      {/* Modal */}
      {activeModal && (
        <Modal 
          isOpen={!!activeModal} 
          onClose={closeModal} 
          title={modalContent[activeModal].title}
        >
          {modalContent[activeModal].content}
        </Modal>
      )}

      {/* Service Detail Modal */}
      {selectedService && (
        <Modal
            isOpen={!!selectedService}
            onClose={handleCloseServiceModal}
            title={selectedService.name}
        >
            <ServiceDetailContent 
                service={selectedService} 
                onBook={() => {
                    handleCloseServiceModal();
                    openModal('booking');
                }}
            />
        </Modal>
      )}


      {/* Mobile Bottom Nav for Modals */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-black/50 backdrop-blur-lg border-t border-white/10 z-40">
        <div className="flex justify-around items-center h-16">
            <button onClick={() => openModal('address')} className="flex flex-col items-center text-xs p-2 hover:text-pink-300 transition-colors">
                <MapPinIcon className="w-6 h-6 mb-1"/> Endereço
            </button>
            <button onClick={() => openModal('booking')} className="flex flex-col items-center text-xs p-2 hover:text-pink-300 transition-colors">
                <HeartIcon className="w-6 h-6 mb-1"/> Reservas
            </button>
            <button onClick={() => openModal('care')} className="flex flex-col items-center text-xs p-2 hover:text-pink-300 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 mb-1"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/></svg> Cuidados
            </button>
        </div>
      </div>
    </div>
  );
};

export default App;