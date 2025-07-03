import { CardBody, CardContainer, CardItem } from '../../ui/3d-card';
import { Modal, ModalTrigger, ModalBody, ModalContent, ModalFooter } from '../../ui/animated-modal';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';

const Events = () => {
  const navigate = useNavigate();
  
  return (
    <div className="w-full py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          Popular Events
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {/* VIP Event */}
          <Modal>
            <CardContainer className="inter-var">
              <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                  Music Event
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                  Enjoy our exclusive Music event with special appearances and premium activities
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <div className="h-60 w-full bg-gradient-to-br from-violet-400 via-purple-400 to-blue-400 rounded-xl flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="text-4xl font-bold">VIP Lounge</div>
                      <div className="text-lg">Premium Experience</div>
                    </div>
                  </div>
                </CardItem>
                <div className="flex justify-between items-center mt-6">
                  <ModalTrigger className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white">
                    Learn More
                  </ModalTrigger>
                  <CardItem
                    translateZ={20}
                    as="button"
                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                  >
                    Buy Now
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
            <ModalBody>
              <ModalContent>
                <h2 className="text-2xl font-bold mb-4 text-neutral-600 dark:text-white">VIP Event Experience Details ✨</h2>
                
                <div className="grid grid-cols-5 gap-2 mb-6">
                  {[
                    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
                    "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop",
                    "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&h=300&fit=crop",
                    "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
                    "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=400&h=300&fit=crop"
                  ].map((src, index) => (
                    <motion.img
                      key={index}
                      src={src}
                      alt={`VIP Event ${index + 1}`}
                      className="h-20 w-full object-cover rounded-lg cursor-pointer"
                      whileHover={{
                        scale: 1.1,
                        rotateY: 15,
                        rotateX: 10,
                        z: 50,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                      style={{
                        transformStyle: "preserve-3d",
                      }}
                    />
                  ))}
                </div>

                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <span>✈️</span> 5 connecting flights
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <span>🏨</span> 12 hotels
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <span>🎯</span> 69 visiting spots
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <span>🍽️</span> Good food everyday
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <span>🎤</span> Open Mic
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <span>🪂</span> Paragliding
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Join us for an exclusive VIP event experience with special appearances, premium activities, and unforgettable moments.
                </p>
              </ModalContent>
              <ModalFooter>
                <button 
                onClick={() => {
                    // close the modal
                    document.querySelector('.modal-close');
                }}
                className="px-4 py-2 text-sm border border-gray-300 dark:border-gray-600 text-black dark:text-white bg-white dark:bg-black hover:bg-gray-50 dark:hover:bg-gray-900 transition duration-200 rounded-md mr-2">
                  Cancel
                </button>
                <button 
                  onClick={() => navigate('/tickets')}
                  className="bg-black dark:bg-white dark:text-black text-white text-sm px-4 py-2 rounded-md border border-black dark:border-white hover:bg-gray-800 dark:hover:bg-gray-200 transition duration-200"
                >
                  Book Now
                </button>
              </ModalFooter>
            </ModalBody>
          </Modal>

          {/* General Admission Event */}
          <Modal>
            <CardContainer className="inter-var">
              <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                  Party Event
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                  Standard access to the party with great atmosphere and entertainment
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <div className="h-60 w-full bg-gradient-to-br from-cyan-400 via-blue-400 to-purple-400 rounded-xl flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="text-4xl font-bold">Main Event</div>
                      <div className="text-lg">General Access</div>
                    </div>
                  </div>
                </CardItem>
                <div className="flex justify-between items-center mt-6">
                  <ModalTrigger className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white">
                    Learn More
                  </ModalTrigger>
                  <CardItem
                    translateZ={20}
                    as="button"
                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                  >
                    Buy Now
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
            <ModalBody>
              <ModalContent>
                <h2 className="text-2xl font-bold mb-4 text-neutral-600 dark:text-white">General Admission Details 🎫</h2>
                
                <div className="grid grid-cols-5 gap-2 mb-6">
                  {[
                    "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=400&h=300&fit=crop",
                    "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400&h=300&fit=crop",
                    "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&h=300&fit=crop",
                    "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=400&h=300&fit=crop",
                    "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=400&h=300&fit=crop"
                  ].map((src, index) => (
                    <motion.img
                      key={index}
                      src={src}
                      alt={`General Event ${index + 1}`}
                      className="h-20 w-full object-cover rounded-lg cursor-pointer"
                      whileHover={{
                        scale: 1.1,
                        rotateY: 15,
                        rotateX: 10,
                        z: 50,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                      style={{
                        transformStyle: "preserve-3d",
                      }}
                    />
                  ))}
                </div>

                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <span>🎵</span> Live music performances
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <span>🍕</span> Food vendors
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <span>🎪</span> Entertainment zones
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <span>📸</span> Photo opportunities
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <span>🎮</span> Interactive activities
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <span>🛍️</span> Merchandise booths
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Experience the main event with general admission access. Enjoy great entertainment and networking opportunities.
                </p>
              </ModalContent>
              <ModalFooter>
                <button className="px-4 py-2 text-sm border border-gray-300 dark:border-gray-600 text-black dark:text-white bg-white dark:bg-black hover:bg-gray-50 dark:hover:bg-gray-900 transition duration-200 rounded-md mr-2">
                  Cancel
                </button>
                <button 
                  onClick={() => navigate('/tickets')}
                  className="bg-black dark:bg-white dark:text-black text-white text-sm px-4 py-2 rounded-md border border-black dark:border-white hover:bg-gray-800 dark:hover:bg-gray-200 transition duration-200"
                >
                  Book Now
                </button>
              </ModalFooter>
            </ModalBody>
          </Modal>

          {/* Student Event */}
          <Modal>
            <CardContainer className="inter-var">
              <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                  Student Get-together
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                  Special pricing for students with valid ID verification and full event access
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <div className="h-60 w-full bg-gradient-to-br from-pink-400 via-red-400 to-yellow-400 rounded-xl flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="text-4xl font-bold">Student Rate</div>
                      <div className="text-lg">Special Pricing</div>
                    </div>
                  </div>
                </CardItem>
                <div className="flex justify-between items-center mt-6">
                  <ModalTrigger className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white">
                    Learn More
                  </ModalTrigger>
                  <CardItem
                    translateZ={20}
                    as="button"
                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                  >
                    Buy Now
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
            <ModalBody>
              <ModalContent>
                <h2 className="text-2xl font-bold mb-4 text-neutral-600 dark:text-white">Student Discount Details 🎓</h2>
                
                <div className="grid grid-cols-5 gap-2 mb-6">
                  {[
                    "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop",
                    "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&h=300&fit=crop",
                    "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=400&h=300&fit=crop",
                    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop",
                    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop"
                  ].map((src, index) => (
                    <motion.img
                      key={index}
                      src={src}
                      alt={`Student Event ${index + 1}`}
                      className="h-20 w-full object-cover rounded-lg cursor-pointer"
                      whileHover={{
                        scale: 1.1,
                        rotateY: 15,
                        rotateX: 10,
                        z: 50,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                      style={{
                        transformStyle: "preserve-3d",
                      }}
                    />
                  ))}
                </div>

                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <span>💰</span> Special student pricing
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <span>🎒</span> Student networking zone
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <span>📚</span> Educational workshops
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <span>🤝</span> Career opportunities
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <span>🍕</span> Student meal deals
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <span>🎁</span> Exclusive student perks
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Take advantage of our special student pricing with full event access. Perfect for students at an affordable price.
                </p>
              </ModalContent>
              <ModalFooter>
                <button className="px-4 py-2 text-sm border border-gray-300 dark:border-gray-600 text-black dark:text-white bg-white dark:bg-black hover:bg-gray-50 dark:hover:bg-gray-900 transition duration-200 rounded-md mr-2">
                  Cancel
                </button>
                <button 
                  onClick={() => navigate('/tickets')}
                  className="bg-black dark:bg-white dark:text-black text-white text-sm px-4 py-2 rounded-md border border-black dark:border-white hover:bg-gray-800 dark:hover:bg-gray-200 transition duration-200"
                >
                  Book Now
                </button>
              </ModalFooter>
            </ModalBody>
          </Modal>
        </div>
        
        <div className="flex justify-center mt-12">
          <button
            onClick={() => navigate('/dashboard/all-events')}
            className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white transition-all duration-300 ease-in-out bg-gradient-to-r from-purple-600 to-blue-600 rounded-full hover:from-purple-700 hover:to-blue-700 hover:scale-105 hover:shadow-xl transform"
          >
            <span className="relative z-10">Explore all Events</span>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Events;
