

const Banner = () => {
  return (
    <div>
      <div className="relative h-[600px] text-white  flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center "
          style={{ 
            backgroundImage: "url('/images/banner/banner2.webp')"
           
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-bl from-black/90 to-black/20 bg-opacity-80"></div>
        <div className="container mx-auto max-w-6xl px-4 relative z-10 text-start items-center">
          <p className="text-4xl font-bold uppercase lg:mt-16">
            Upcoming Events
          </p>
        </div>
      </div>
    </div>
  )
}

export default Banner
