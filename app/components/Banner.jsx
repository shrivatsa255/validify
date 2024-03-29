
const Banner = ({ parentStyles, childStyles, name }) => (
  <div className={`relative w-full flex items-center z-0 overflow-hidden  bg-indigo-700 shadow-xl ${parentStyles}`}>
    <p className={`font-bold font-poppins leading-70 text-5xl text-white ${childStyles}`}>{name}</p>
    <div className="absolute w-48 h-48 sm:w-32 sm:h-32 rounded-full white-bg -top-9 -left-16 -z-5" />
    <div className="absolute w-72 h-72 sm:w-56 sm:h-56 rounded-full white-bg -bottom-24 -right-14 -z-5" />
  </div>
);

export default Banner;
