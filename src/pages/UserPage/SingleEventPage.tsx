import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import PageMeta from "../../components/common/PageMeta";

// Add custom styles for animations
const customStyles = `
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
  }
  .animate-float {
    animation: float 6s ease-in-out infinite;
  }
  .delay-1000 { animation-delay: 1s; }
  .delay-2000 { animation-delay: 2s; }
  .delay-3000 { animation-delay: 3s; }
  .delay-4000 { animation-delay: 4s; }
`;

// Inject styles
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement("style");
  styleSheet.innerText = customStyles;
  document.head.appendChild(styleSheet);
}

interface EventSchedule {
  scheduleId: number;
  title: string;
  description: string;
  startTime: [number, number, number, number, number];
  endTime: [number, number, number, number, number];
  location: string;
  performerName: string;
  artistId: number;
  highlighted: boolean;
  notes?: string;
  orderIndex: number;
}

interface EventGuest {
  guestId: number;
  fullName: string;
  designation: string;
  organization: string;
  email: string;
  phone: string;
  profileImage?: string;
  shortBio: string;
  vip: boolean;
  confirmed: boolean;
  speaker: boolean;
  orderIndex: number;
  guestQty: number;
}

interface EventCategory {
  categoryId: number;
  categoryName: string;
  description: string;
  iconImageUrl: string;
  bannerImageUrl: string;
}

interface EventDetail {
  eventId: string | number;
  title: string;
  subtitle?: string;
  description?: string;
  eventStartDate: [number, number, number, number, number];
  eventEndDate?: [number, number, number, number, number];
  gateOpenTime?: [number, number, number, number, number];
  city: string;
  state?: string;
  country?: string;
  locationDetails?: string;
  bannerImageUrl: string;
  thumbnailUrl?: string;
  videoTeaserUrl?: string;
  ticketPrice?: number;
  vipTicketPrice?: number;
  totalCapacity?: number;
  availableSeats?: number;
  vipAvailable?: boolean;
  allowGroupBooking?: boolean;
  eventStatus?: string;
  approvedStatus?: string;
  seoTitle?: string;
  seoDescription?: string;
  eventWebsite?: string;
  termsAndConditionsUrl?: string;
  registrationLink?: string;
  totalFollowers?: number;
  rating?: number;
  totalReviews?: number;
  viewCount?: number;
  interestedCount?: number;
  eventCategoryDto?: EventCategory;
  eventScheduleDtoList?: EventSchedule[];
  eventGuestDtoList?: EventGuest[];
}

const SingleEventPage = () => {
  const { eventId } = useParams<{ eventId: string }>();
  const navigate = useNavigate();
  const [event, setEvent] = useState<EventDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (eventId) {
      axios
        .get(`${import.meta.env.VITE_API_EVENT}/api/v1/event/findByEventId/${eventId}`)
        .then((response) => {
          console.log("Event data:", response.data);
          // Extract eventDto from the response
          if (response.data && response.data.eventDto) {
            setEvent(response.data.eventDto);
          } else {
            setError("Invalid event data structure");
          }
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching event:", error);
          setError("Failed to load event details");
          setLoading(false);
        });
    } else {
      setError("Event ID not provided");
      setLoading(false);
    }
  }, [eventId]);

  const formatDate = (dateData: [number, number, number, number, number] | string | number | undefined) => {
    try {
      // Check if dateData is an array (like [2025, 1, 15, 14, 30])
      if (Array.isArray(dateData) && dateData.length >= 3) {
        const [year, month, day, hour = 0, minute = 0] = dateData;
        const date = new Date(year, month - 1, day, hour, minute);
        return date.toLocaleDateString('en-US', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        });
      }
      
      // Check if dateData is a string or can be converted to Date
      if (typeof dateData === 'string' || typeof dateData === 'number') {
        const date = new Date(dateData);
        if (!isNaN(date.getTime())) {
          return date.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
          });
        }
      }
      
      // Fallback for invalid date
      return 'Date not available';
    } catch (error) {
      console.error('Error formatting date:', error);
      return 'Date not available';
    }
  };

  const formatTime = (timeData: [number, number, number, number, number] | undefined) => {
    try {
      if (Array.isArray(timeData) && timeData.length >= 5) {
        const [year, month, day, hour, minute] = timeData;
        const date = new Date(year, month - 1, day, hour, minute);
        return date.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          hour12: true
        });
      }
      return 'Time not available';
    } catch (error) {
      console.error('Error formatting time:', error);
      return 'Time not available';
    }
  };

  if (loading) {
    return (
      <>
        <PageMeta title="Loading Event..." description="Loading event details" />
        <div className="min-h-screen bg-black flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
            <p className="text-white mt-4 text-xl">Loading event details...</p>
          </div>
        </div>
      </>
    );
  }

  if (error || !event) {
    return (
      <>
        <PageMeta title="Event Not Found" description="Event not found" />
        <div className="min-h-screen bg-black flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Event Not Found</h1>
            <p className="text-gray-400 mb-8">{error || "The event you're looking for doesn't exist."}</p>
            <button
              onClick={() => navigate("/events")}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
            >
              Back to Events
            </button>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <PageMeta title={event.title} description={event.description || `Event in ${event.city}`} />
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-purple-900">
        {/* Hero Section */}
        <div className="relative h-screen overflow-hidden">
          <img
            src={event.bannerImageUrl}
            alt={event.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-purple-900/30"></div>
          
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-3/4 left-1/3 w-48 h-48 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
          </div>
          
          {/* Content Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="container mx-auto max-w-6xl">
              <div className="mb-6">
                <button
                  onClick={() => navigate("/events")}
                  className="flex items-center text-gray-300 hover:text-white transition-colors mb-6"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Back to Events
                </button>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                {event.title}
              </h1>
              
              {event.subtitle && (
                <p className="text-2xl text-blue-200 mb-6 font-light">{event.subtitle}</p>
              )}
              
              <div className="flex flex-wrap items-center gap-6 text-lg">
                <div className="flex items-center text-gray-300">
                  <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {formatDate(event.eventStartDate)}
                </div>
                
                <div className="flex items-center text-gray-300">
                  <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {event.city}
                  {event.locationDetails && `, ${event.locationDetails}`}
                </div>
                
                {event.rating && (
                  <div className="flex items-center text-yellow-400">
                    <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    {event.rating} ({event.totalReviews} reviews)
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Event Details Section */}
        <div className="py-16 px-4 relative">
          {/* Gorgeous background with gradients and patterns */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/50 to-black"></div>
          <div className="absolute inset-0" style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(120, 119, 198, 0.1) 0%, transparent 25%),
              radial-gradient(circle at 75% 75%, rgba(236, 72, 153, 0.1) 0%, transparent 25%),
              radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.05) 0%, transparent 50%)
            `
          }}></div>
          
          {/* Floating particles effect */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/6 w-2 h-2 bg-purple-400/40 rounded-full animate-float"></div>
            <div className="absolute top-3/4 left-1/3 w-1 h-1 bg-blue-400/40 rounded-full animate-float delay-1000"></div>
            <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-pink-400/40 rounded-full animate-float delay-2000"></div>
            <div className="absolute bottom-1/4 left-2/3 w-1.5 h-1.5 bg-purple-300/40 rounded-full animate-float delay-3000"></div>
            <div className="absolute top-1/6 right-1/3 w-2.5 h-2.5 bg-blue-300/40 rounded-full animate-float delay-4000"></div>
          </div>
          
          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main Content - 2 columns */}
              <div className="lg:col-span-2 space-y-12">
                
                {/* Event Information */}
                <div>
                  <h2 className="text-3xl font-bold text-white mb-8">Event Details</h2>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-lg p-6 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 shadow-lg hover:shadow-purple-500/10">
                      <h3 className="text-lg font-semibold text-white mb-3 flex items-center">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                        Date & Time
                      </h3>
                      <div className="space-y-2">
                        <p className="text-gray-300">
                          <span className="text-blue-400">Start:</span> {formatDate(event.eventStartDate)}
                        </p>
                        {event.eventEndDate && (
                          <p className="text-gray-300">
                            <span className="text-blue-400">End:</span> {formatDate(event.eventEndDate)}
                          </p>
                        )}
                        {event.gateOpenTime && (
                          <p className="text-gray-400 text-sm">
                            <span className="text-blue-400">Gates Open:</span> {formatTime(event.gateOpenTime)}
                          </p>
                        )}
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-lg p-6 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 shadow-lg hover:shadow-blue-500/10">
                      <h3 className="text-lg font-semibold text-white mb-3 flex items-center">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                        Location
                      </h3>
                      <div className="space-y-2">
                        <p className="text-gray-300">{event.city}, {event.state}</p>
                        <p className="text-gray-300">{event.country}</p>
                        {event.locationDetails && (
                          <p className="text-gray-400 text-sm">{event.locationDetails}</p>
                        )}
                      </div>
                    </div>
                    
                    {event.eventCategoryDto && (
                      <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-lg p-6 border border-pink-500/20 hover:border-pink-400/40 transition-all duration-300 shadow-lg hover:shadow-pink-500/10">
                        <h3 className="text-lg font-semibold text-white mb-3 flex items-center">
                          <div className="w-2 h-2 bg-pink-400 rounded-full mr-3"></div>
                          Category
                        </h3>
                        <div className="flex items-center space-x-3">
                          <img 
                            src={event.eventCategoryDto.iconImageUrl} 
                            alt={event.eventCategoryDto.categoryName}
                            className="w-10 h-10 rounded-lg object-cover"
                          />
                          <div>
                            <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                              {event.eventCategoryDto.categoryName}
                            </span>
                            <p className="text-gray-400 text-sm mt-1">{event.eventCategoryDto.description}</p>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-lg p-6 border border-green-500/20 hover:border-green-400/40 transition-all duration-300 shadow-lg hover:shadow-green-500/10">
                      <h3 className="text-lg font-semibold text-white mb-3 flex items-center">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                        Capacity & Status
                      </h3>
                      <div className="space-y-2">
                        <p className="text-gray-300">
                          <span className="text-blue-400">Total Capacity:</span> {event.totalCapacity?.toLocaleString()}
                        </p>
                        <p className="text-gray-300">
                          <span className="text-green-400">Available:</span> {event.availableSeats?.toLocaleString()}
                        </p>
                        <p className="text-gray-300">
                          <span className="text-yellow-400">Status:</span> {event.eventStatus}
                        </p>
                        {event.vipAvailable && (
                          <span className="inline-block bg-purple-600 text-white px-2 py-1 rounded text-xs">
                            VIP Available
                          </span>
                        )}
                        {event.allowGroupBooking && (
                          <span className="inline-block bg-green-600 text-white px-2 py-1 rounded text-xs ml-2">
                            Group Booking
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Description */}
                {event.description && (
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                      <div className="w-1 h-8 bg-gradient-to-b from-purple-400 to-blue-400 rounded-full mr-4"></div>
                      About This Event
                    </h2>
                    <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-lg p-8 border border-purple-500/20 shadow-lg">
                      <p className="text-gray-300 leading-relaxed text-lg">{event.description}</p>
                    </div>
                  </div>
                )}

                {/* Event Schedule */}
                {event.eventScheduleDtoList && event.eventScheduleDtoList.length > 0 && (
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                      <div className="w-1 h-8 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full mr-4"></div>
                      Event Schedule
                    </h2>
                    <div className="space-y-4">
                      {event.eventScheduleDtoList
                        .sort((a, b) => a.orderIndex - b.orderIndex)
                        .map((schedule) => (
                          <div 
                            key={schedule.scheduleId} 
                            className={`bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-lg p-6 border transition-all duration-300 shadow-lg ${
                              schedule.highlighted 
                                ? 'border-yellow-500/40 hover:border-yellow-400/60 shadow-yellow-500/10' 
                                : 'border-gray-700/40 hover:border-gray-600/60'
                            }`}
                          >
                            <div className="flex justify-between items-start mb-3">
                              <div>
                                <h3 className="text-xl font-semibold text-white mb-1">{schedule.title}</h3>
                                <p className="text-blue-400 font-medium">{schedule.performerName}</p>
                              </div>
                              <div className="text-right">
                                <p className="text-gray-300">{formatTime(schedule.startTime)} - {formatTime(schedule.endTime)}</p>
                                <p className="text-gray-400 text-sm">{schedule.location}</p>
                              </div>
                            </div>
                            <p className="text-gray-300 mb-2">{schedule.description}</p>
                            {schedule.notes && (
                              <p className="text-gray-400 text-sm italic">{schedule.notes}</p>
                            )}
                            {schedule.highlighted && (
                              <span className="inline-block bg-yellow-600 text-white px-2 py-1 rounded text-xs mt-2">
                                Featured Performance
                              </span>
                            )}
                          </div>
                        ))}
                    </div>
                  </div>
                )}

                {/* Special Guests */}
                {event.eventGuestDtoList && event.eventGuestDtoList.length > 0 && (
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                      <div className="w-1 h-8 bg-gradient-to-b from-pink-400 to-purple-400 rounded-full mr-4"></div>
                      Special Guests
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                      {event.eventGuestDtoList
                        .sort((a, b) => a.orderIndex - b.orderIndex)
                        .map((guest) => (
                          <div key={guest.guestId} className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-lg p-6 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 shadow-lg hover:shadow-purple-500/10">
                            <div className="flex items-start space-x-4">
                              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                                {guest.fullName.split(' ').map(n => n[0]).join('')}
                              </div>
                              <div className="flex-1">
                                <h3 className="text-lg font-semibold text-white">{guest.fullName}</h3>
                                <p className="text-blue-400">{guest.designation}</p>
                                <p className="text-gray-400 text-sm">{guest.organization}</p>
                                <p className="text-gray-300 text-sm mt-2">{guest.shortBio}</p>
                                <div className="flex space-x-2 mt-3">
                                  {guest.vip && (
                                    <span className="inline-block bg-purple-600 text-white px-2 py-1 rounded text-xs">
                                      VIP
                                    </span>
                                  )}
                                  {guest.speaker && (
                                    <span className="inline-block bg-green-600 text-white px-2 py-1 rounded text-xs">
                                      Speaker
                                    </span>
                                  )}
                                  {guest.confirmed && (
                                    <span className="inline-block bg-blue-600 text-white px-2 py-1 rounded text-xs">
                                      Confirmed
                                    </span>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                )}

                {/* Video Teaser */}
                {event.videoTeaserUrl && (
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                      <div className="w-1 h-8 bg-gradient-to-b from-red-400 to-pink-400 rounded-full mr-4"></div>
                      Event Preview
                    </h2>
                    <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-lg p-6 border border-red-500/20 shadow-lg">
                      <video 
                        controls 
                        className="w-full rounded-lg shadow-2xl"
                        poster={event.thumbnailUrl}
                      >
                        <source src={event.videoTeaserUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  </div>
                )}
                
              </div>
              
              {/* Sidebar - Booking Section */}
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-2xl p-8 text-white sticky top-8 shadow-2xl border border-purple-400/20">
                  {/* Glowing effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20 rounded-2xl blur-xl -z-10"></div>
                  <h3 className="text-2xl font-bold mb-6">Book Your Tickets</h3>
                  
                  <div className="space-y-6">
                    {event.ticketPrice && (
                      <div className="border-b border-blue-300/30 pb-4">
                        <div className="flex justify-between items-center">
                          <span className="text-blue-100">Regular Ticket</span>
                          <span className="text-2xl font-bold">৳{event.ticketPrice}</span>
                        </div>
                      </div>
                    )}
                    
                    {event.vipTicketPrice && event.vipAvailable && (
                      <div className="border-b border-blue-300/30 pb-4">
                        <div className="flex justify-between items-center">
                          <span className="text-blue-100">VIP Ticket</span>
                          <span className="text-2xl font-bold">৳{event.vipTicketPrice}</span>
                        </div>
                      </div>
                    )}
                    
                    {event.availableSeats && (
                      <div className="flex items-center text-blue-100">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                        </svg>
                        {event.availableSeats.toLocaleString()} seats available
                      </div>
                    )}
                  </div>
                  
                  <div className="space-y-4 mt-8">
                    {event.registrationLink ? (
                      <a 
                        href={event.registrationLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full bg-white text-blue-600 font-bold py-4 px-6 rounded-lg hover:bg-blue-50 transition-colors duration-300 text-center"
                      >
                        Register Now
                      </a>
                    ) : (
                      <button className="w-full bg-white text-blue-600 font-bold py-4 px-6 rounded-lg hover:bg-blue-50 transition-colors duration-300">
                        Book Now
                      </button>
                    )}
                    
                    <button className="w-full bg-transparent border-2 border-white text-white font-bold py-4 px-6 rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-300">
                      Add to Wishlist
                    </button>
                  </div>

                  {/* Event Stats */}
                  <div className="mt-8 pt-6 border-t border-blue-300/30">
                    <div className="grid grid-cols-2 gap-4 text-center">
                      {event.totalFollowers && (
                        <div>
                          <div className="text-2xl font-bold">{event.totalFollowers.toLocaleString()}</div>
                          <div className="text-blue-100 text-sm">Followers</div>
                        </div>
                      )}
                      {event.interestedCount && (
                        <div>
                          <div className="text-2xl font-bold">{event.interestedCount.toLocaleString()}</div>
                          <div className="text-blue-100 text-sm">Interested</div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* More Information inside the booking card */}
                  <div className="mt-8 pt-6 border-t border-blue-300/30">
                    <h3 className="text-lg font-semibold text-white mb-4">More Information</h3>
                    <div className="space-y-3">
                      {event.eventWebsite && (
                        <a 
                          href={event.eventWebsite}
                          target="_blank"
                          rel="noopener noreferrer" 
                          className="block w-full bg-white/10 hover:bg-white/20 text-white border border-white/20 py-3 px-4 rounded transition-colors text-center"
                        >
                          Event Website
                        </a>
                      )}
                      
                      {event.termsAndConditionsUrl && (
                        <a 
                          href={event.termsAndConditionsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block text-blue-100 hover:text-white text-sm underline text-center"
                        >
                          Terms & Conditions
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                
                {/* Share Section */}
                <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-lg p-6 border border-purple-500/20 shadow-lg">
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                    Share This Event
                  </h3>
                  <div className="flex space-x-3">
                    <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition-colors">
                      Facebook
                    </button>
                    <button className="flex-1 bg-sky-500 hover:bg-sky-600 text-white py-2 px-4 rounded transition-colors">
                      Twitter
                    </button>
                    <button className="flex-1 bg-pink-600 hover:bg-pink-700 text-white py-2 px-4 rounded transition-colors">
                      Instagram
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleEventPage;
