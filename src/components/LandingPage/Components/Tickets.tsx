import { CardBody, CardContainer, CardItem } from '../../ui/3d-card';

const Tickets = () => {
  return (
    <div className="w-full py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          Event Tickets
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {/* VIP Ticket */}
          <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                VIP Experience
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                Premium access with exclusive perks and front-row seating
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <div className="h-60 w-full bg-gradient-to-br from-violet-400 via-purple-400 to-blue-400 rounded-xl flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-4xl font-bold">$299</div>
                    <div className="text-lg">VIP Access</div>
                  </div>
                </div>
              </CardItem>
              <div className="flex justify-between items-center mt-6">
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  Learn More →
                </CardItem>
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

          {/* General Admission Ticket */}
          <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                General Admission
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                Standard access to the main event with great atmosphere
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <div className="h-60 w-full bg-gradient-to-br from-cyan-400 via-blue-400 to-purple-400 rounded-xl flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-4xl font-bold">$99</div>
                    <div className="text-lg">General Access</div>
                  </div>
                </div>
              </CardItem>
              <div className="flex justify-between items-center mt-6">
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  Learn More →
                </CardItem>
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

          {/* Student Ticket */}
          <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                Student Discount
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                Special pricing for students with valid ID verification
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <div className="h-60 w-full bg-gradient-to-br from-pink-400 via-red-400 to-yellow-400 rounded-xl flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-4xl font-bold">$49</div>
                    <div className="text-lg">Student Rate</div>
                  </div>
                </div>
              </CardItem>
              <div className="flex justify-between items-center mt-6">
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  Learn More →
                </CardItem>
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
        </div>
      </div>
    </div>
  );
};

export default Tickets;
