const Schedule = () => {
  return (
    <div className="flex flex-col items-center pt-20 pb-40 pl-5 pr-5 justify-center gap-20 bg-gradient-to-t from-primary primary">
      <div className="rounded-lg flex-col max-w-3xl w-full gap-5 flex">
        <h1 className="font-bold text-6xl md:text-7xl text-center pb-10 text-secondary">
          Schedule
        </h1>

        <div className="flex flex-col px-10 py-5 bg-gradient-to-tr from-light to-light rounded-3xl h-300 w-full shadow-2xl">
          <div className="flex py-3 gap-3 justify-between">
            <h2 className="text-lg text-nowrap text-black">07:30 AM</h2>
            <h2 className="text-lg text-right text-black">Check-in</h2>
          </div>
          <div className="flex py-3 gap-3 justify-between">
            <h2 className="text-lg text-nowrap text-black">08:30 AM</h2>
            <h2 className="text-lg text-right text-black">Opening Ceremony</h2>
          </div>
          <div className="flex py-3 gap-3 justify-between">
            <h2 className="text-lg text-nowrap text-black">09:00 AM</h2>
            <h2 className="text-lg text-right text-black">Hacking Begins</h2>
          </div>
          <div className="flex py-3 gap-3 justify-between">
            <h2 className="text-lg text-nowrap text-black">09:30 AM</h2>
            <h2 className="text-lg text-right text-black">Beginner Frontend Workshop</h2>
          </div>
          <div className="flex py-3 gap-3 justify-between">
            <h2 className="text-lg text-nowrap text-black">10:15 AM</h2>
            <h2 className="text-lg text-right text-black">Intermediate React Workshop</h2>
          </div>
          <div className="flex py-3 gap-3 justify-between">
            <h2 className="text-lg text-nowrap text-black">10:30 AM</h2>
            <h2 className="text-lg text-right text-black">Expertise AI/ML Workshop</h2>
          </div>
          <div className="flex py-3 gap-3 justify-between">
            <h2 className="text-lg text-nowrap text-black">12:30 PM</h2>
            <h2 className="text-lg text-right text-black">Lunch</h2>
          </div>
          <div className="flex py-3 gap-3 justify-between">
            <h2 className="text-lg text-nowrap text-black">03:00 PM</h2>
            <h2 className="text-lg text-right text-black">Keynote Speaker #1</h2>
          </div>
          <div className="flex py-3 gap-3 justify-between">
            <h2 className="text-lg text-nowrap text-black">04:30 PM</h2>
            <h2 className="text-lg text-right text-black">Keynote Speaker #2</h2>
          </div>
          <div className="flex py-3 gap-3 justify-between">
            <h2 className="text-lg text-nowrap text-black">06:30 PM</h2>
            <h2 className="text-lg text-right text-black">Dinner</h2>
          </div>
          <div className="flex py-3 gap-3 justify-between">
            <h2 className="text-lg text-nowrap text-black">07:30 PM</h2>
            <h2 className="text-lg text-right text-black">Coding Ends</h2>
          </div>
          <div className="flex py-3 gap-3 justify-between">
            <h2 className="text-lg text-nowrap text-black">08:00 PM</h2>
            <h2 className="text-lg text-right text-black">Judging Begins</h2>
          </div>
          <div className="flex py-3 gap-3 justify-between">
            <h2 className="text-lg text-nowrap text-black">09:00 PM</h2>
            <h2 className="text-lg text-right text-black">Awards and Closing Ceremony</h2>
          </div>
        </div>
      </div>
      <h2 className="max-w-xl text-center text-lg">
        <a className="font-normal text-black">This schedule is </a>
        <a className="font-extrabold text-black">subject to change.</a>
        <a className="font-normal text-black">
          {" "}
          Please check back periodically or right before the day of the
          hackathon.
        </a>
      </h2>
    </div>
  );
};

export default Schedule;
