import { useEffect, useState } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface EventDto {
  eventId: string | number;
  title: string;
  eventStartDate: [number, number, number, number, number];
  city: string;
  bannerImageUrl: string;
}

interface EventType {
  id: string | number;
  title: string;
  date: string;
  location: string;
  image: string;
  bgColor: string;
}

const EventsPageComponent = () => {
  const [events, setEvents] = useState<EventType[]>([]);
  const [filteredEvents, setFilteredEvents] = useState<EventType[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterDate, setFilterDate] = useState<Date | null>(null);
  const [filterLocation, setFilterLocation] = useState("");

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_EVENT}/api/v1/event/findAll`)
      .then((response) => {
        const currentDate = new Date();
        const eventsData: EventType[] = response.data.eventDtoList
          .filter((event: EventDto) => {
            const eventDate = new Date(
              event.eventStartDate[0],
              event.eventStartDate[1] - 1,
              event.eventStartDate[2]
            );
            return eventDate >= currentDate;
          })
          .map(
            (event: EventDto): EventType => ({
              id: event.eventId,
              title: event.title,
              date: `${event.eventStartDate[0]}-${event.eventStartDate[1]}-${event.eventStartDate[2]} ${event.eventStartDate[3]}:${event.eventStartDate[4]}`,
              location: event.city,
              image: event.bannerImageUrl,
              bgColor: "bg-blue-600",
            })
          );
        setEvents(eventsData);
        setFilteredEvents(eventsData);
      })
      .catch((error) => console.error("Error fetching events:", error));
  }, []);

  useEffect(() => {
    const filtered = events.filter((event) => {
      const matchesSearch = event.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesDate = filterDate
        ? new Date(event.date).toDateString() === filterDate.toDateString()
        : true;
      const matchesLocation = filterLocation
        ? event.location.toLowerCase().includes(filterLocation.toLowerCase())
        : true;
      return matchesSearch && matchesDate && matchesLocation;
    });
    setFilteredEvents(filtered);
  }, [searchTerm, filterDate, filterLocation, events]);

  const handleClearFilters = () => {
    setSearchTerm("");
    setFilterDate(null);
    setFilterLocation("");
    setFilteredEvents(events);
  };

  return (
    <div
      className=" py-16 px-4"
      style={{
        backgroundImage: "url('/images/bg/bg1.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto max-w-6xl">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-white text-start items-center mb-12 tracking-wider ">
          ALL EVENTS
        </h2>

        {/* Filters */}
        <div className="mb-8 grid grid-cols-12 gap-4 items-center">
          <div className="col-span-4 bg-black rounded-md py-2 px-4">
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-1 py-1 rounded-md border border-gray-300  text-white placeholder-gray-500"
            />
          </div>
          <div className="bg-black col-span-8 rounded-md">
            <div className="col-span-2 flex items-center gap-4 rounded-md py-2 px-4 ">
              <span className="text-gray-400 whitespace-nowrap">
                Filter By:
              </span>
              <DatePicker
                selected={filterDate}
                onChange={(date) => setFilterDate(date)}
                placeholderText="Select Date"
                className="px-1 py-1 rounded-md border border-gray-300 text-white placeholder-gray-500"
              />
              <input
                type="text"
                placeholder="Cities"
                value={filterLocation}
                onChange={(e) => setFilterLocation(e.target.value)}
                className="px-1 py-1 rounded-md border border-gray-300 text-white placeholder-gray-500"
              />
              <button
                onClick={handleClearFilters}
                className="px-2 py-1 bg-black text-white border rounded-md hover:bg-gray-700 whitespace-nowrap"
              >
                Clear
              </button>
            </div>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event) => (
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
      </div>
    </div>
  );
};

export default EventsPageComponent;
