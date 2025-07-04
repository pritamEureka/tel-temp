import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

type FeaturedEventType = {
  id: string | number;
  title: string;
  date: string;
  location: string;
  image: string;
  bgColor: string;
};

const FeaturedEvent = () => {
  const [featuredEvents, setFeaturedEvents] = useState<FeaturedEventType[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_EVENT}/api/v1/event/findAll`)
      .then((response) => {
        interface EventDto {
          eventId: string | number;
          title: string;
          eventStartDate: [number, number, number, number, number];
          city: string;
          bannerImageUrl: string;
        }

        interface ApiResponse {
          eventDtoList: EventDto[];
        }

        const responseData: ApiResponse = response.data;
        const events: FeaturedEventType[] = responseData.eventDtoList.map((event: EventDto): FeaturedEventType => ({
          id: event.eventId,
          title: event.title,
          date: `${event.eventStartDate[0]}-${event.eventStartDate[1]}-${event.eventStartDate[2]} ${event.eventStartDate[3]}:${event.eventStartDate[4]}`,
          location: event.city,
          image: event.bannerImageUrl,
          bgColor: "bg-blue-600",
        }));
        setFeaturedEvents(events);
      })
      .catch((error) => console.error("Error fetching events:", error));
  }, []);

  return (
    <div
      className=" py-16 px-4"
      style={{ backgroundImage: "url('/images/bg/bg.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div className="container mx-auto max-w-6xl">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-white text-start items-center mb-12 tracking-wider">
          FEATURED EVENTS
        </h2>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredEvents.slice(0, 3).map((event) => (
            <div key={event.id} className="group cursor-pointer h-full">
              {/* Event Card */}
              <div className="bg-[#030006] rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col">
                {/* Event Image */}
                <div className="relative h-64 overflow-hidden flex-shrink-0">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 rounded-md"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>

                {/* Event Details */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {event.title}
                    </h3>
                  </div>
                  
                  <div className="space-y-2">
                    {/* Date */}
                    <div className="flex items-center text-gray-300">
                      <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="text-sm">{event.date}</span>
                    </div>

                    {/* Location */}
                    <div className="flex items-center text-gray-400">
                      <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="text-sm">{event.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Events Button */}
        <div className="text-center mt-12">
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-colors duration-300 transform hover:scale-105"
            onClick={() => navigate("/events")}
          >
            View All Events
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedEvent;
