import { useNavigate } from "react-router-dom";
import { Tabs } from "../components/ui/tabs";
import { BentoGrid, BentoGridItem } from "../components/ui/bento-grid";
import {
  Modal,
  ModalTrigger,
  ModalBody,
  ModalContent,
  ModalFooter,
} from "../components/ui/animated-modal";
import { eventCategories, allEvents, Event } from "../data/events";
import { LampContainer } from "../components/ui/lamps";
import { motion } from "motion/react";

const AllEvents = () => {
  const navigate = useNavigate();

  const getEventsForCategory = (category: string) => {
    return allEvents.filter((event) => event.category === category);
  };

  const EventModal = ({ event }: { event: Event }) => (
    <Modal>
      <ModalTrigger className="w-full h-full">
        <BentoGridItem
          title={event.title}
          description={event.description}
          header={
            <div className="flex w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 items-center justify-center">
              <span className="text-4xl">{event.icon}</span>
            </div>
          }
          icon={<span className="text-2xl">{event.icon}</span>}
        />
      </ModalTrigger>
      <ModalBody>
        <ModalContent>
          <h2 className="text-2xl font-bold mb-4 text-neutral-600 dark:text-white">
            {event.title}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
            {event.images.map((image, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg aspect-video"
                style={{
                  transform: `perspective(1000px) rotateX(${
                    index * 2
                  }deg) rotateY(${index * 3}deg)`,
                  transformStyle: "preserve-3d",
                }}
              >
                <img
                  src={image}
                  alt={`${event.title} ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
            ))}
          </div>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            {event.description}
          </p>
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2 text-neutral-600 dark:text-white">
              Event Features:
            </h3>
            <ul className="space-y-1">
              {event.features.map((feature, index) => (
                <li
                  key={index}
                  className="text-gray-600 dark:text-gray-300 text-sm"
                >
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="text-xl font-bold text-purple-600 dark:text-purple-400">
            Price: {event.price}
          </div>
        </ModalContent>
        <ModalFooter>
          <button
            onClick={() => navigate("/tickets")}
            className="px-6 py-2 bg-black dark:bg-white dark:text-black text-white rounded-lg font-medium"
          >
            Book Now
          </button>
        </ModalFooter>
      </ModalBody>
    </Modal>
  );

  const tabs = eventCategories.map((category) => ({
    title: category.title,
    value: category.value,
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
        <p className="text-2xl md:text-3xl mb-8">{category.title} Events</p>
        <BentoGrid className="max-w-4xl mx-auto">
          {getEventsForCategory(category.value).map((event) => (
            <EventModal key={event.id} event={event} />
          ))}
        </BentoGrid>
      </div>
    ),
  }));

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          <LampContainer>
            <motion.h1
              initial={{ opacity: 0.5, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
              }}
              className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
            >
              All events <br />{" "}
              {/* <p 
              className="text-lg text-center mb-16 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
              >
                Discover amazing events across different categories. Click on
                any event to learn more and book your tickets.
              </p> */}
            </motion.h1>
          </LampContainer>
        </h1>

        <Tabs tabs={tabs} />
      </div>
    </div>
  );
};

export default AllEvents;
