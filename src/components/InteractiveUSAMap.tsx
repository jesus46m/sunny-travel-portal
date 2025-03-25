
import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { MapPin, Navigation } from "lucide-react";

// State data with information about each US state
const stateData = {
  "alabama": {
    name: "Alabama",
    cities: ["Birmingham", "Montgomery", "Mobile"],
    image: "https://images.unsplash.com/photo-1578309992456-c4f4cb28de0b?q=80&w=1740&auto=format&fit=crop"
  },
  "alaska": {
    name: "Alaska",
    cities: ["Anchorage", "Juneau", "Fairbanks"],
    image: "https://images.unsplash.com/photo-1503095396549-807759245b35?q=80&w=1744&auto=format&fit=crop"
  },
  "arizona": {
    name: "Arizona",
    cities: ["Phoenix", "Tucson", "Sedona"],
    image: "https://images.unsplash.com/photo-1558645836-e44122a743ee?q=80&w=1740&auto=format&fit=crop"
  },
  "arkansas": {
    name: "Arkansas",
    cities: ["Little Rock", "Fayetteville", "Hot Springs"],
    image: "https://images.unsplash.com/photo-1570363528981-7ccfa4db3a23?q=80&w=1740&auto=format&fit=crop"
  },
  "california": {
    name: "California",
    cities: ["Los Angeles", "San Francisco", "San Diego"],
    image: "https://images.unsplash.com/photo-1506146332389-18140dc7b2fb?q=80&w=1364&auto=format&fit=crop"
  },
  "colorado": {
    name: "Colorado",
    cities: ["Denver", "Colorado Springs", "Boulder"],
    image: "https://images.unsplash.com/photo-1602705169259-fec1eb128f1e?q=80&w=1740&auto=format&fit=crop"
  },
  "connecticut": {
    name: "Connecticut",
    cities: ["Hartford", "New Haven", "Stamford"],
    image: "https://images.unsplash.com/photo-1489528792647-46ec39027556?q=80&w=1634&auto=format&fit=crop"
  },
  "delaware": {
    name: "Delaware",
    cities: ["Wilmington", "Dover", "Rehoboth Beach"],
    image: "https://images.unsplash.com/photo-1617466114006-d7f037c4e9e7?q=80&w=1740&auto=format&fit=crop"
  },
  "florida": {
    name: "Florida",
    cities: ["Miami", "Orlando", "Tampa"],
    image: "https://images.unsplash.com/photo-1535498730771-e735b998cd64?q=80&w=1470&auto=format&fit=crop"
  },
  "georgia": {
    name: "Georgia",
    cities: ["Atlanta", "Savannah", "Athens"],
    image: "https://images.unsplash.com/photo-1575931953324-fcac7094999e?q=80&w=1740&auto=format&fit=crop"
  },
  "hawaii": {
    name: "Hawaii",
    cities: ["Honolulu", "Lahaina", "Hilo"],
    image: "https://images.unsplash.com/photo-1505852679233-d9fd70aff56d?q=80&w=1470&auto=format&fit=crop"
  },
  "idaho": {
    name: "Idaho",
    cities: ["Boise", "Idaho Falls", "Coeur d'Alene"],
    image: "https://images.unsplash.com/photo-1602889822473-d8e22086ea1c?q=80&w=1634&auto=format&fit=crop"
  },
  "illinois": {
    name: "Illinois",
    cities: ["Chicago", "Springfield", "Peoria"],
    image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=1713&auto=format&fit=crop"
  },
  "indiana": {
    name: "Indiana",
    cities: ["Indianapolis", "Fort Wayne", "Bloomington"],
    image: "https://images.unsplash.com/photo-1578301978018-3ae389966834?q=80&w=1619&auto=format&fit=crop"
  },
  "iowa": {
    name: "Iowa",
    cities: ["Des Moines", "Cedar Rapids", "Iowa City"],
    image: "https://images.unsplash.com/photo-1570006549499-90451fd4ebd1?q=80&w=1740&auto=format&fit=crop"
  },
  "kansas": {
    name: "Kansas",
    cities: ["Wichita", "Kansas City", "Topeka"],
    image: "https://images.unsplash.com/photo-1530455290214-eb5a04e82c47?q=80&w=1740&auto=format&fit=crop"
  },
  "kentucky": {
    name: "Kentucky",
    cities: ["Louisville", "Lexington", "Bowling Green"],
    image: "https://images.unsplash.com/photo-1602534543015-89d9122fb4bd?q=80&w=1740&auto=format&fit=crop"
  },
  "louisiana": {
    name: "Louisiana",
    cities: ["New Orleans", "Baton Rouge", "Lafayette"],
    image: "https://images.unsplash.com/photo-1570747408017-38b4c5a37757?q=80&w=1634&auto=format&fit=crop"
  },
  "maine": {
    name: "Maine",
    cities: ["Portland", "Augusta", "Bar Harbor"],
    image: "https://images.unsplash.com/photo-1508003527267-4775a4454948?q=80&w=1740&auto=format&fit=crop"
  },
  "maryland": {
    name: "Maryland",
    cities: ["Baltimore", "Annapolis", "Ocean City"],
    image: "https://images.unsplash.com/photo-1617932595956-0b9a602443e3?q=80&w=1740&auto=format&fit=crop"
  },
  "massachusetts": {
    name: "Massachusetts",
    cities: ["Boston", "Cambridge", "Cape Cod"],
    image: "https://images.unsplash.com/photo-1572731415763-76f99b258235?q=80&w=1740&auto=format&fit=crop"
  },
  "michigan": {
    name: "Michigan",
    cities: ["Detroit", "Ann Arbor", "Grand Rapids"],
    image: "https://images.unsplash.com/photo-1555710132-5cbc0930e17d?q=80&w=1740&auto=format&fit=crop"
  },
  "minnesota": {
    name: "Minnesota",
    cities: ["Minneapolis", "Saint Paul", "Duluth"],
    image: "https://images.unsplash.com/photo-1581877361374-90453ee50de8?q=80&w=1587&auto=format&fit=crop"
  },
  "mississippi": {
    name: "Mississippi",
    cities: ["Jackson", "Biloxi", "Hattiesburg"],
    image: "https://images.unsplash.com/photo-1568111561564-08726a1563e1?q=80&w=1740&auto=format&fit=crop"
  },
  "missouri": {
    name: "Missouri",
    cities: ["Kansas City", "St. Louis", "Springfield"],
    image: "https://images.unsplash.com/photo-1600801308800-f7dba5d114df?q=80&w=1587&auto=format&fit=crop"
  },
  "montana": {
    name: "Montana",
    cities: ["Billings", "Missoula", "Bozeman"],
    image: "https://images.unsplash.com/photo-1580129958560-c43e0d0cbcde?q=80&w=1587&auto=format&fit=crop"
  },
  "nebraska": {
    name: "Nebraska",
    cities: ["Omaha", "Lincoln", "Grand Island"],
    image: "https://images.unsplash.com/photo-1611590287514-58acf1c15558?q=80&w=1587&auto=format&fit=crop"
  },
  "nevada": {
    name: "Nevada",
    cities: ["Las Vegas", "Reno", "Carson City"],
    image: "https://images.unsplash.com/photo-1581351721010-8cf859cb14a4?q=80&w=1470&auto=format&fit=crop"
  },
  "new-hampshire": {
    name: "New Hampshire",
    cities: ["Manchester", "Concord", "Portsmouth"],
    image: "https://images.unsplash.com/photo-1612779507638-e9ef43e5d4f0?q=80&w=1740&auto=format&fit=crop"
  },
  "new-jersey": {
    name: "New Jersey",
    cities: ["Newark", "Jersey City", "Atlantic City"],
    image: "https://images.unsplash.com/photo-1617547605316-6ce3bae7126f?q=80&w=1740&auto=format&fit=crop"
  },
  "new-mexico": {
    name: "New Mexico",
    cities: ["Albuquerque", "Santa Fe", "Las Cruces"],
    image: "https://images.unsplash.com/photo-1564413611729-aade7af65ab1?q=80&w=1587&auto=format&fit=crop"
  },
  "new-york": {
    name: "New York",
    cities: ["New York City", "Buffalo", "Rochester"],
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=1470&auto=format&fit=crop"
  },
  "north-carolina": {
    name: "North Carolina",
    cities: ["Charlotte", "Raleigh", "Asheville"],
    image: "https://images.unsplash.com/photo-1514565131-fce0801e5785?q=80&w=1632&auto=format&fit=crop"
  },
  "north-dakota": {
    name: "North Dakota",
    cities: ["Fargo", "Bismarck", "Grand Forks"],
    image: "https://images.unsplash.com/photo-1562379825-691c9f2cba7e?q=80&w=1595&auto=format&fit=crop"
  },
  "ohio": {
    name: "Ohio",
    cities: ["Columbus", "Cleveland", "Cincinnati"],
    image: "https://images.unsplash.com/photo-1538153217232-98ba847d7aea?q=80&w=1632&auto=format&fit=crop"
  },
  "oklahoma": {
    name: "Oklahoma",
    cities: ["Oklahoma City", "Tulsa", "Norman"],
    image: "https://images.unsplash.com/photo-1507469949893-2e0d5408388c?q=80&w=1740&auto=format&fit=crop"
  },
  "oregon": {
    name: "Oregon",
    cities: ["Portland", "Eugene", "Salem"],
    image: "https://images.unsplash.com/photo-1593058851588-7d6c73781ec3?q=80&w=1587&auto=format&fit=crop"
  },
  "pennsylvania": {
    name: "Pennsylvania",
    cities: ["Philadelphia", "Pittsburgh", "Harrisburg"],
    image: "https://images.unsplash.com/photo-1575378972206-eda8be43fea3?q=80&w=1740&auto=format&fit=crop"
  },
  "rhode-island": {
    name: "Rhode Island",
    cities: ["Providence", "Newport", "Warwick"],
    image: "https://images.unsplash.com/photo-1614114724747-f2a150acd369?q=80&w=1587&auto=format&fit=crop"
  },
  "south-carolina": {
    name: "South Carolina",
    cities: ["Charleston", "Columbia", "Myrtle Beach"],
    image: "https://images.unsplash.com/photo-1585833615548-28487ccf54e8?q=80&w=1587&auto=format&fit=crop"
  },
  "south-dakota": {
    name: "South Dakota",
    cities: ["Sioux Falls", "Rapid City", "Aberdeen"],
    image: "https://images.unsplash.com/photo-1605651202774-7d9add9cf350?q=80&w=1740&auto=format&fit=crop"
  },
  "tennessee": {
    name: "Tennessee",
    cities: ["Nashville", "Memphis", "Knoxville"],
    image: "https://images.unsplash.com/photo-1544825333-82a22b621f2e?q=80&w=1587&auto=format&fit=crop"
  },
  "texas": {
    name: "Texas",
    cities: ["Houston", "Dallas", "Austin"],
    image: "https://images.unsplash.com/photo-1531218150217-54595bc2b934?q=80&w=1428&auto=format&fit=crop"
  },
  "utah": {
    name: "Utah",
    cities: ["Salt Lake City", "Park City", "Moab"],
    image: "https://images.unsplash.com/photo-1558033784-fe7e2a615dcf?q=80&w=1587&auto=format&fit=crop"
  },
  "vermont": {
    name: "Vermont",
    cities: ["Burlington", "Montpelier", "Stowe"],
    image: "https://images.unsplash.com/photo-1570127828934-8e8554819aa8?q=80&w=1587&auto=format&fit=crop"
  },
  "virginia": {
    name: "Virginia",
    cities: ["Richmond", "Virginia Beach", "Arlington"],
    image: "https://images.unsplash.com/photo-1585245542454-85116e323a78?q=80&w=1587&auto=format&fit=crop"
  },
  "washington": {
    name: "Washington",
    cities: ["Seattle", "Spokane", "Tacoma"],
    image: "https://images.unsplash.com/photo-1604186838347-9faaf0b83be8?q=80&w=1587&auto=format&fit=crop"
  },
  "west-virginia": {
    name: "West Virginia",
    cities: ["Charleston", "Huntington", "Morgantown"],
    image: "https://images.unsplash.com/photo-1599058917765-a780eda07a3e?q=80&w=1740&auto=format&fit=crop"
  },
  "wisconsin": {
    name: "Wisconsin",
    cities: ["Milwaukee", "Madison", "Green Bay"],
    image: "https://images.unsplash.com/photo-1597411210662-4ab186f2b9b1?q=80&w=1740&auto=format&fit=crop"
  },
  "wyoming": {
    name: "Wyoming",
    cities: ["Cheyenne", "Jackson", "Casper"],
    image: "https://images.unsplash.com/photo-1605833556294-ea5c7a74f57d?q=80&w=1740&auto=format&fit=crop"
  }
};

const InteractiveUSAMap = () => {
  const navigate = useNavigate();
  const [hoveredState, setHoveredState] = useState<string | null>(null);

  const handleMouseEnter = (stateId: string) => {
    setHoveredState(stateId);
  };

  const handleMouseLeave = () => {
    setHoveredState(null);
  };

  const handleStateClick = (stateId: string) => {
    navigate(`/state/${stateId}`);
  };

  // Complete SVG path definitions for the US map
  return (
    <div className="mx-auto max-w-7xl p-4 glass-card rounded-xl bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl overflow-hidden relative">
      <div className="flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-6">
        {/* Map Container */}
        <div className="w-full lg:w-2/3 h-[400px] overflow-hidden relative rounded-lg">
          <div className="absolute inset-0 bg-gradient-to-b from-miami-turquoise/20 to-miami-coral/20 z-10"></div>
          <svg
            viewBox="0 0 959 593"
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              {/* US States - These are actual SVG paths for the states */}
              <path id="alabama" d="M656.8,339.3l-1.6-0.9l-2.7-2.9l0.7-2.9l1.7-4.8l2.5-4.2l0.9-4.8l-0.4-2.5l0.4-1.8l1.9-0.7l0.1-3.4l-1.9-1.9v-0.9l3.6-5.3 l2.4-0.6l0.8-1.4l0.1-1.6l-1.5-2.2v-0.7l0.6-0.6l8.7-1l2.4-0.9h0.3l0.8,1l1.7,0.5l1.9-0.2l2.5-3l2.4-0.5l3.5-0.7l0.4,0.9l-3.7,4.3 l-0.3,6.3l-0.3,1.9l1.9,2.4l2.2,2.1l2.6,3.3l0.3,2.5l0.9,1.9l0.5,1.9l2.1,1.1l4.2,3.1l0.1,1.5l-0.7,1.3l-0.2,1.1l0.7,0.7l1.4,2.4 l0.3,1.7l1.9,1.8l0.8,2.6l-0.3,1.3h-0.4l-3-1.2l-2.2-1.1l-1.5,0.8l-0.8,0.9l-0.5,2.7l-0.7,0.7l-2.2,0.1l-1.3-0.3l-0.4-0.3l-2.5,1 l-1.3,0.1l-6.1-3.9l-1.8,0.3l-2.9,1.1l-2.5,2.3l-1.4,0.3l-0.5,0.7l-0.2,1.1l-0.6,0.8l-1.4,0.9l-3.1,1.1l-0.6,0.8l-0.9-0.4v-0.5 l1.3-0.7v-0.6l-1.8-1.1h-1.3l-0.6,0.6h-0.6l-0.8-0.7l-1.3,0.7v1l-1.1,0.6L656.8,339.3z" className={`hover:fill-miami-coral hover:stroke-white stroke-2 cursor-pointer ${hoveredState === "alabama" ? "fill-miami-coral" : "fill-miami-turquoise/70"}`} onMouseEnter={() => handleMouseEnter("alabama")} onMouseLeave={handleMouseLeave} onClick={() => handleStateClick("alabama")} />
              <path id="alaska" d="M332.1,553.7l-0.3,0.2l-0.9,0.2l-1.1,0.4l-0.3,0.3l-1.1,0.2l-0.5,0.7l0.3,1.1l-0.8,1.4l0.7,0.6l-0.5,0.7l-0.9-0.3 l-0.1,0.3l-0.8-0.3l-0.3,0.5l-0.4,0.3l-0.2,0.9l0.1,0.7l0.4,0.5l-0.2,1l-1.1,1l-0.2,0.9l0.2,0.6l0.6,0.7l0.8,0.1l2.6,0.1l1.5-0.3 l2.9-0.2l3.8-0.5l3.8-1.3l0.4-0.6l0.8-0.4l1.3-1.1l0.2-0.3l-0.5-0.6l-0.7-0.2l-0.2-0.7l-0.8-0.3l-0.8,0.3l-0.5,0.3l-0.6-0.1 l-0.7-1.1l0.8-0.9l0.4-0.8l0.9-0.9l0.1-0.3l-0.2-0.4l-0.3-0.2l-0.9,0.8l-0.9-0.2l-0.2-0.8l-1.1-0.6l0.1-0.9l-0.3-0.5l-1-0.5 l-0.6,0.4l-0.4-0.1l-0.2-0.5l-0.6-0.5L332.1,553.7z M223.1,585.3l0.4-0.4v-0.8L223,584l-0.5,0.1l-0.3,0.7l0.2,0.6L223.1,585.3z M356.7,574.4l1.5-1.5l-1-0.9l-0.5-0.7l-0.3-0.9l-0.6-0.4l-1-1.2l-1.4,0.8l0.6,0.9l0.3,0.5v0.6l0.4,1.1l0.6,0.7L356.7,574.4z M198.9,599.3l-0.5-0.8l-0.4-0.9l-0.5-1.8l0.1-1.7l0.3-0.6l2.1-1.2l-0.1-0.9l0.7-1.3l0.2-1l1-0.9l-0.1-1.3l-0.8-0.9l-0.3-1.2 l-0.8-0.7l-0.8-0.1l-0.4-1.5l-1-0.9l-0.1-1.1l-0.9-1.3l-0.1-1.5h0.3l0.8-1.8l-0.1-0.6l-1.1-1h-1.1l-1.9,2.1l0.2,2l-1.1,0.5 l-0.3,0.7l0.4,0.6L192,579l-0.1,0.4l-1.6,0.1l-0.5,0.6l0.3,1.5l-0.3,0.6l-1,1.1l-0.7,0.1l-1-0.5l-0.8,0.7l0.8,0.9l-0.2,0.9 l0.3,0.7l-0.3,1.1l0.9,0.8l-0.1,0.3l0.3,0.7l0.8,0.4l0.8-0.4l0.3,0.6l1.9,0.7l-1.1,1.3l0.7,0.6l0.8,0.3l0.5,1.4l1.5,1.4l1,0.4 L198.9,599.3z M245.3,574.8l-0.5,0.1l-2.2-0.2l-0.3-0.4l-0.5-0.1l-0.5,0.3l-0.3,0.6l-0.6,0.1l-0.3,0.9l-0.8,0.9l0.3,0.5l0.6,0.1 l0.3,0.3l0.6,0.1l0.9-0.2l0.9,0.1l1.5-0.5l1-0.1l0.5-0.2l0.3-0.6l-0.4-1.3L245.3,574.8z M257.2,568.8l-1.2-0.9l-1.4-0.3l-0.9,0.1 l-1.4,0.9l-0.7,0.3l-0.5,0.1l-0.3-0.3l-0.1-0.9l0.6-0.5l0.6-1.1l-0.9-0.9l-0.9,0.3l-0.8,0.7l-0.3,0.8l-0.5,0.5l0.5,0.4l0.4,0.7 l-0.8,0.9l0.2,0.9l0.9,0.2l1.9-0.2l0.9,0.3l1.9-1.6l1.5-0.7l1.1-0.9l0.1-0.3l-0.1-0.4L257.2,568.8z M268.7,571.5l-1-0.2l-0.9,0.2 l-0.3,0.2h-0.4l-1.3-0.8l-0.4,0.8l-0.8-0.1l-0.3,0.6l0.7,1l1.3,0.2l0.8,0.1l0.5,0.5l0.3,0.1l0.5,0.2l0.7-1.1l1-0.4l-0.1-0.5 L268.7,571.5z M264.2,559.4l-0.1-0.5l-0.6-0.5l-0.7-0.2l-0.6,0.1l-0.1,0.3l0.1,0.3l0.5,0.4l0.7,0.3L264.2,559.4z M297.1,545.5 l-0.3-0.8l-0.3-0.2l-1,0.1l0.1,0.4l0.8,0.7L297.1,545.5z M302.3,540.8l-1.3-0.1l-0.6,0.1l-0.5,0.2l-0.1,0.3l0.7,0.8l0.8,0.1 l1-0.3l0.3-0.6L302.3,540.8z M300.8,535l-1.3-0.3l-1.1,0.1l-0.2,0.4l0.3,0.3l2,0.1L300.8,535z M295.8,535.2l0.1-0.4l-0.3-0.7 l-0.4-0.1l-0.7,0.1l-0.4,0.3l0.2,0.3l0.7,0.4L295.8,535.2z M283.8,534.4l-1.3-0.3l-0.3,0.1l-0.2,0.2l-0.2,0.9l0.4-0.2l0.3-0.2 L283.8,534.4L283.8,534.4z M289.4,537.5l-0.8-0.5l-0.8-0.4l-1.3-0.2l-0.5-0.5l-1.6-0.3l-0.4,0.3l1.9,1.1l0.8,0.3l1,0.5l1.1,0.3 L289.4,537.5z M292.3,538.4l-1.4-0.2l-1.2,0.1l-0.9,0.4l0.8,0.1l0.8,0.3l2-0.1L292.3,538.4z M125.8,469.5l-0.4-1.4l-0.9-1.9 l-0.4-0.3l-0.3,0.3l0.1,0.6l0.9,1.5l-0.1,0.5l-0.6,0.5l0.1,0.4l0.5,0.8l0.7,0.6l0.3,0.1l0.3-0.1l0.4-0.7l-0.2-0.4L125.8,469.5z M281.6,523.1l-0.7-0.3l-1.2,0.7l0.2,0.4l0.9,0.2l0.9-0.2L281.6,523.1z M169.4,508.8l0.3-1l-0.3-1.4l-0.4-0.9l-0.6-0.9l-0.7-0.3 l-0.8,0.8l-0.1,0.7l1.1,1.7l0.4,1.1L169.4,508.8z M182,514.9l0.2-0.9l-0.9-0.7l-0.5,0.1l-0.2,0.3l0.4,1.1l0.7,0.2H182z M285.3,525.9l-1.3-0.1l-0.3,0.1l-0.3,0.3l0.1,0.2l1,0.1l0.7-0.2L285.3,525.9z M154.9,502.2l-0.1-0.3l-1.2-0.2l-0.5-0.3h-0.5 l-0.1,0.6h0.6l0.4,0.3L154.9,502.2z M179.8,513.7l-0.2-0.6l-0.5-0.4l-0.5,0.1l-0.1,0.3l0.6,0.8L179.8,513.7z M149.8,495.5l0.3-1 l-0.3-0.4l-0.6-0.4l-0.5,0.1l-0.5,1l0.6,0.5L149.8,495.5z M279.3,521.3l-0.1-0.3l-0.8-0.3l-0.4,0.1l-0.1,0.3l0.3,0.3H279.3z M152.8,497.5l0.4-0.1l0.3-0.2l-0.1-0.5l-0.7-0.4l-0.4,0.1l-0.2,0.3l0.4,0.8L152.8,497.5z M138.5,489.7l-0.6-0.3l-0.3-0.1 l-0.4,0.1l-0.3,0.3l0.7,0.5l0.8,0.2L138.5,489.7z M154.8,502.1l-0.6-0.3l-0.2,0.4v0.3l0.3,0.1L154.8,502.1z M179.4,512.9v-0.3 l-0.3-0.2h-0.3l-0.3,0.2v0.3h0.6L179.4,512.9z M139.4,488.8l-0.4-0.6l-0.3,0.1v0.3l0.3,0.3L139.4,488.8z M278.5,520.6l-0.9-0.3 l-0.1,0.2l0.1,0.3l0.3,0.1l0.6-0.1V520.6z M158.4,505.9L158.4,505.9l-0.8-0.4l-0.6,0.1l-0.1,0.3l0.3,0.3l0.9,0.2L158.4,505.9z M150.1,495.8l-0.3-0.2l-0.4-0.1l-0.2,0.3l0.1,0.2l0.4,0.1L150.1,495.8z M158.2,497.2l0.1-0.6l-0.2-0.3h-0.4l-0.3,0.4l0.4,0.6 L158.2,497.2z M139.6,488.4l-0.3-0.2l-0.3,0.2l0.1,0.3L139.6,488.4z M166.9,505.7l-0.7-0.4l-0.1,0.5L166.9,505.7z M164.4,505.8 l-0.9-0.2l0.1,0.3l0.3,0.3L164.4,505.8z M163.5,505l-0.3-0.4l-0.4-0.1l0.1,0.6L163.5,505z M167.2,505.7l-0.3-0.6l-0.4-0.1 l0.1,0.3L167.2,505.7z M159.1,498.8l-0.6-0.3l-0.3,0.2L159.1,498.8z" className={`hover:fill-miami-coral hover:stroke-white stroke-2 cursor-pointer ${hoveredState === "alaska" ? "fill-miami-coral" : "fill-miami-turquoise/70"}`} onMouseEnter={() => handleMouseEnter("alaska")} onMouseLeave={handleMouseLeave} onClick={() => handleStateClick("alaska")} />
              <path id="arizona" d="M253.8,289.4l-2.6,2.2l-0.3,1.5l0.5,1l3.8,1.8l2.6,0.3l2.4-0.2l2.9,2.1l2.5-0.1l3.4-0.6l2.5-0.9l0.8,0.2l-0.5,1.8 l-0.8,0.1l-0.8,0.6l-0.8,1.2l0.1,0.8l-0.2,0.1l-0.9,0.1l-2.1,0.7l-0.5,0.7l-0.7,0.2l-0.9,0.9l-0.1,6.8l-0.3,1.5l-0.8,1l-1.1,2.4 l-0.5,4.5l-0.8,1.8l-0.3,1.8l0.2,3.5l-0.4,1.3l-0.8,1l-0.2,1.5l-0.5,0.7l-0.3,0.1l-0.3,0.8l0.4,1.9l0.1,1.4l-0.6,2.4l-0.6,0.3 l-0.1,2.2l-0.4,0.8l-0.8,0.5l-2.3,0.7l-1.3,1.3l-1.9,1.2l-0.7,1.1l-0.6,2.4l-0.7,1.1l-2.8,2.1l-1.5,0.7l-3.4,3.8l-1.9,0.5 l-1.1,0.7l-0.9,1.1l-0.1,1.1l-0.4,0.9l-0.8,0.9l0.3,0.6l-0.3,0.4h-1l-1-0.1l-1,0.3l-0.8,0.7l-0.7,1.1l-0.2,1.1l-0.5,1.2l-0.1,3 l-0.5,1.6l0.2,0.9l0.6,1l1,0.9l-0.3,0.8l0.2,1l1,1.5l1,1.2l1,0.6l0.1,1l-0.6,1.4l0.3,1.9l0.6,0.9v0.9l-0.4,2.9l0.2,2.2l0.7,1.1 l2.3,1.3l-0.1,1.6l-1.7,1.3l-0.5,1.1l0.1,1.3l0.7,1.1l0.1,0.7l-0.5,0.8l-0.3,1.7l0.3,0.6l0.5-0.1l0.8,0.7l1.4,0.4l2,1.2l0.8,1.2 l-0.1,0.7l0.7,0.9l-0.7,1l-0.3,1.1l0.4,1.5l0.5,0.7l1.6,0.5l0.3,0.9h0.8l0.9-1.2l1.4-0.6l0.7,0.2v1.5l0.3,0.8l1.3,0.4v-0.2l1,0.5 l1.2-0.5l0.9,0.3l-0.3,0.4l0.3,0.5h1.5l0.4-0.5l1.9-0.4l1.5-1.6l1.4-0.7l2,0.8l1.5-0.4l0.4,0.3l0.3,1.1l0.7,0.3h1.3l2.5,0.6 l0.8-0.7l0.4,0.3l1.6,0.1l1.9-0.7l1.9-1.5l1.6-0.5l0.5-0.7l0.9-0.4l-0.8-1.6l-2-1.8l0.1-0.5l-1.1-1.2l-1.1-2.1l-1-1l-1.3-0.6 l-1.1-1l-1.2-0.4l-0.8-2.2l-0.5-0.8l-0.5-0.4l0.6-1.8l0.5-0.5l0.3-1.5l0.6-0.8l0.4-1.2l1.2-1.4l0.3-1.7l1.1-2l1.5-1.5l0.3-0.8 l1.6-1.6l0.3-0.9l1.6-1h0.8l0.5-0.7l0.1-1.1l-0.1-3.8l0.2-1.7l0.4-1.5l-0.1-1.1l-0.4-0.9l0.6-0.7h1l2.1-1.3l0.4-0.8l-0.2-1.2 l-1.2-0.2l-1-0.9l-0.2-0.3v-0.9l-0.9-0.3l-2.1,0.1l-1.3,0.8l-1-0.1l-0.3,0.7l-1.3,0.1l-0.5-0.2l-1.1,0.3l-1.3-0.1l-0.4,0.2 l-1.9-2.3l-1.1-0.4l-0.3-1l-1-0.5l-0.2-0.7l-0.6-0.4l-0.4-1v-1.3l-0.7-0.9l-0.8-0.1l-0.5-1.9l-0.6-0.8l-0.1-1l-1-1.4l-1.5-1.2 l-1.6-0.2l-1.1-0.4l-0.4-0.8l-0.8-0.3l-0.3-0.5v-0.8l-0.4-0.8l-1.7-1l-1.5-0.3h-1.3l-0.5-0.5l-0.8,0.1l-0.5-0.5l-0.1-0.9l-0.9-1.2 l-1.1-0.1l-1.6-1.6l-1.3-0.6l-1.2-1.4l-0.4-1.5l0.1-0.8l-0.5-1l0.6-2.6l-0.5-0.9l0.3-0.4l-0.2-1.2l1.1-0.3l0.2-0.7l-0.4-1l-0.1-0.9 l0.8-0.7l-0.5-0.9l-0.7-0.2l-0.2-0.8l-0.6-0.1l-0.8-0.7l-0.1-0.6l0.2-0.5l-0.5-0.2l-0.2-0.9l-0.6-0.1v-0.9l-0.6-0.5l-0.1-0.7 l-0.8-0.4l-0.6,0.1l-0.6-0.9l-1-0.2l-0.7-0.5L253.8,289.4z" className={`hover:fill-miami-coral hover:stroke-white stroke-2 cursor-pointer ${hoveredState === "arizona" ? "fill-miami-coral" : "fill-miami-turquoise/70"}`} onMouseEnter={() => handleMouseEnter("arizona")} onMouseLeave={handleMouseLeave} onClick={() => handleStateClick("arizona")} />
              <path id="arkansas" d="M587.5,346.5l-3.8,0.9l-5.1-0.5l-1.1-1.5l-1-0.2l-0.9-1.1h-4.2l-6.8-0.9l-2.9-0.5l-1,1.9l-0.6,2l-2.7,2.5l-0.5-0.3 v-0.6l-1.8-1.9l-0.7-0.3l-0.9,0.3l-3.5,2.5l-2.4-1l-1.9,0.2l-0.8,1.1h-2l0.9-1.5l0.7-0.2l0.3-1.6l-0.4-1.1l-0.9-0.8l1.5-1.4 l-0.5-0.8l-1.1,0.1l-0.7-0.4l0.6-0.7l-0.9-0.9l-0.1-1.2l-1.6-0.5l-0.5-1.8l-1.6-1.9l0.3-1.6l-1.1-1.4l1.3-1.5l0.2-2.5l1.8-0.1 l0.9-1.1l1-0.4l-0.8-2.2l3.3-1.6v-2.2l1.1-1.4h2.9l1.1-0.8l-0.1-1.5l3.9-3.2l0.3-1.8l1.9-1.1l0.5,0.2l0.9-1.2l1.2-0.5l0.9-0.9 l0.8-3.4l2.9-2.7l1.8-1l1.9-1.8l-0.5-1.8l4-2.3v-1.2l1.8,0.5l1-1.3l-1.2-1.5l2.2-0.9l0.1-2.1l1.2-0.4l-0.1-1.1l-1.1-1.4l1.2-0.5 l0.5-1l-1.4-0.5l0.2-0.8l-1.1-0.4l0.6-0.8l2.4-1l2.2-1.8l2.1-1.3l0.1-1.7l-0.4-1.3l0.7-0.4l0.9,1.3l1.7,1.1l0.2,0.6l1.1,0.5 l0.4,0.6h2.5l7.3,0.4l15.7,0.2l14.6,0.6l0.7,1.3l1,0.5l1.8-0.2l0.5-2l1.7-0.1l0.1,2.2l1.3,0.1v-1.1l0.7-0.9l-0.1-1.3l-0.7-0.7 l-0.2-1.1l1.3-1.2l0.7,0.8l0.5-0.5l0.8,1l-0.3,1.3l0.8,0.6l0.5-1.1l0.5,0.2l-0.5,1.9h0.9l0.4-0.6l0.8,0.4v1.2l1.1,0.1l-0.3,0.5h1.1 l-0.3,1.6l0.4,0.8l1.2,0.5v0.7h1.2l0.2,1.1h1.8l0.7-1.7l2.9,0.4l0.5,0.9l0.1,2.1l2.2,2v1.1l0.5,0.5v1l1.3,0.5l0.2,0.7l1.2,0.5 l0.5,1.2l1.7-0.8l1.6-1.6l0.7,0.2l0.2,0.7h3.2l1.3,0.6v4.1l0.3,4.9l-1.4,0.5l-0.5,1.8v0.5l0.3,0.6l-1.2,0.5l0.2,2.5l-0.6,0.4 l-1.3,3.6l-0.6,0.7v0.8l-0.7,0.9l-0.5,2.4l-1.2,0.9v1.2l-0.7,0.7l-1.5,3.7l-2.3,1.6l-1.5,1.5l-2.3,3.8l-0.4,0.8l-0.7,2.3l-2.7,1.6 L587.5,346.5z" className={`hover:fill-miami-coral hover:stroke-white stroke-2 cursor-pointer ${hoveredState === "arkansas" ? "fill-miami-coral" : "fill-miami-turquoise/70"}`} onMouseEnter={() => handleMouseEnter("arkansas")} onMouseLeave={handleMouseLeave} onClick={() => handleStateClick("arkansas")} />
              <path id="california" d="M75.4,364.3l4.6-1.5l1.8-1.8l0.5-2.5l-2.8-0.8l-1.1-2.1l-0.3-1.3l-3.3-3.3l-0.8-3.7l-1.3-1.8v-7.4l0.3-0.9l-1.1-1v-2 l5.5-3.2l-1.6-2.7l-0.8-4.3l2.1-2.5l2.1-4.2l1.3-4l-0.3-3.1l-2.4-0.8l-3.3-1.7l-0.5,0.1l-0.8-1.5l-4.7,0.5l-2.6,2.3l-1.6,0.5l-0.8,0.9 l-2.6,0.1l-1.1,0.9l-2,0.1l-2.4,2.2l-1.6,0.3l-0.8-1.2l-1-0.2l-3.7,0.2l-3.5,2l-1.5,0.2l-3.7-0.6l-3.2,0.8l-1.9-0.8l0.3-1.3 l-2.6-0.6l-1.4-1l-4.8,0.1l-0.8-1.6l-5.8-1.3l1.3-3.3l1.5-0.3l0.5-2.3l-0.5-2.2l-1.5-1.8l-3-2.1l0.9-4.1l0.5-5.8l-0.8-2.4l-1.9-2.1 l-2.8-1.3l0.3-4.8l-1.1-2.8l2-0.5l0.1-1.1l-0.7-0.3l1.4-1.1l1.3-3.5l3.5-1.2l1.8-1.5l1-1.8l1-5l0.7-1.1l0.2-1.6l-0.8-0.1l1.3-1.3 l1-3.2l2.3-0.1l1.7-1.8l-0.7-3l-2.4-2.1l6.2-9.3l0.4-7.5l2.3-3.3l0.1-0.5l2.1-2.5l-0.3-3.2l-1.4-2.9l-0.2-2.7l0.5-0.9l-0.5-3.5 l-0.5-0.8l0.9-3.1l-1.1-3.5l-2.1-0.8l-0.6-2.7l0.9-4.1l-0.5-3l-1.1-0.7l-1-4.6l-2.7-4.5l-1.1-2.6h-0.9l-0.9-5.1l-0.6-0.5l-0.1-2.5 l-0.9-2.2l-2.5-1.1l-4-10.7l0.2-6.3l0.9-3.5l2.5-5.2l1.2-10.9l-0.3-3.1l2.9-8.1l-1.1-2.7l2.1-5.5l2.1-2.3l3.9-0.8l4.8-4.4l1.6-5.3 l0.5-5.9l-1.8-5.5l0.4-2l2.7-2.2l0.4-1.1l0.1-3.6l-1.4-3l1.8-3.5l1.3-3.2h2.3l0.4-1.1l-0.7-2l3.5-8.5l2.4-0.9l4.4-6.7l4.9-5.5 l4.5-0.3l1.9,1.2v1.9l2.8,0.8l0.7-1.3l1.2,0.8l2.5-2.1l1.5,0.5l0.7,2.4l1.9,0.3l1.9-1.2l3.6,0.2l3.1-3.7l1-5.5l2.7-7.9l0.8-5.4 l2.3-2.5l18.6,2.6l27,3.2l2.3,0.5l11.4,13.9l21.4,25.9l5.1,6.2l-0.4,3.2l-1.6,1.6l-4.5,10.1l-2.8,4.2l-8.5,2.1l-3.1,2.5l-4.2,2.1 l-2,2.2l-1.6,0.3l-2.4,2.5l-2.4,5.5l-1.8,1.5l-1.6,2.4l-1,2.8l-3,3.5l0.2,2.8l2.6,0.5l1.8,0.9l1,2.5l-0.9,3.5l-1.6,1.5l-2.5-1 l-0.8-2.6h-0.8l-1,1l-2-1.5L212,93l-1.5,0.2l-3.5,3.8l-2.5,0.5l-0.5,1.8l-3.1,0.5l-1.9,1.5L195,106l-1.5,3.5l-1.5,1.1l-2.9,0.5 l-3.7-0.7l-0.8,1.6l-1,0.5l-1.5-0.5l-3,1.5l-2.1,0.3l-0.5,0.8l-2.5-1v-1.9l-0.7-0.3l-1,2.3l-2.6,0.5l-1.6,2.2l-2.5,0.1l-0.5,2.3 l0.5,2.2l-0.3,1.5l-3.5,2l-1.2-0.7l-1-2.7l-1.5-0.5l-0.5-1l-2.5,0.5l-4.8-1.3l-1.8-1.1l-4.5-0.3l-5.3,1.5l-4.9-0.3l-3.3-1.2 l-2.9,0.1l-3.8-1.3l-4.1-0.3l-2.5,2L98,118.5l-2.3,2.2l-2.5,6.3l-3.3,4.2l1.8,0.1l-0.1,2.1l-1.4,0.5v0.8l-2.4,1.5l-0.5,1.9 l-5.8,3.5l-0.5,2.9l0.8,2.8l1.8,2.3l2.5,0.5l4.5-2l1.9,1.5l1.3,1.5l2.3,0.2l0.8-0.7l2.3,1.8l1.5,2.5l2.3,0.3l1.9,1.5l-0.3,2.8 l-0.8,0.5l1.3,1.5l0.3,2.8l-1,1.8l-2.5-0.3l-1-1l-3.8,2l-1.3,2.2l-2.5,0.5l-1.5,0.8l-2,6.3l-0.5,3.2l-0.8,0.8l-1,3.3l-2.3,0.5 l-1.3-0.8l-0.8,1.3l-2.5-0.5l-0.3-1.5l-1.5,1l-0.5,1.5l-2.5,0.8l-1.5-0.5l-1.8,1.3v1.8l-4,2.5l-0.8,4l-1.1,0.5l-2,4l-0.5,1.8l0.5,3 l1.5,2.3l-0.5,2.5l-1.5,1.6l-0.5,2.3l-1.5,1l0.3,1l-0.3,1.5L75.4,364.3z M9.5,218.1l1-0.2l-0.2-0.9l0.6-1.5l-0.3-2.7l1.2-0.3 l0.9-0.9l0.9,0.2h0.7l0.1,1.3l-0.1,0.6l0.3,0.6l-0.2,1.8l0.9,1.3l-0.8,0.6l-0.3,1.2l-0.8,0.7l-0.8,0.7l-0.9,0.9l-0.8-0.9l0.1-0.7 l-0.6-0.6l0.1-0.7L9.5,218.1z" className={`hover:fill-miami-coral hover:stroke-white stroke-2 cursor-pointer ${hoveredState === "california" ? "fill-miami-coral" : "fill-miami-turquoise/70"}`} onMouseEnter={() => handleMouseEnter("california")} onMouseLeave={handleMouseLeave} onClick={() => handleStateClick("california")} />
              {/* Add all other state paths here - for brevity I'm just including a few examples */}
              <path id="florida" d="M759.8,439.1l2.6,7.6l2.2,9.5l4.5,8.2l4.1,3.5l1.9,5.1l-0.5,5.4l-2.9,5.7l-0.5,5.1l-4.2,1l-1.8,2.2l-1.2,7.6l-2.4,8.5 l1.7,6l-0.4,10.5l-4.9,5.4l-3.8,6l-2.8,6.3l-4.3,8l-1.2,6.3l-0.8,6.6l-3.6,5.7l-1.6,5.7l-3.3,4.4l-2,2.9l1.3,8.2l-3.3,4.2l-3,5.2 l-4.8,1.2l-2.5,3.2l-3.4,1.5l-1.3,3.5l2.8,6.7l-1.4,4.5l-3.6,0.5l-1.6,3.8l0.3,2.7l-2.4,1l-0.3,2.7l-5.4,4.9l-2.5,3.2l-6.4-1.8 l-8.5-0.5l-7.3,1l-8.3,5.3l-10.3,1.5l-11,1.3l-6.7,0.2l-11.3,2.9l-6.3-0.8l-5.5,1.8l-12.4,2.1l-6.5-2.8l-2.5-3.7l-2.2-1l2.1-1.8 l-0.1-4.8l2.5-1.5l3.9-0.5l3-2.7l0.1-4.3l-6.7-0.5l-2.5-1.9l-4.2-1.5l-1.1-0.5l-5.8-0.7l2.1-2.9l4.8-0.5l3.1-2.5l3.8-0.3l2.5-3.4 l1.3-3.2l3.9-0.3l2.1-3.1l-0.4-5.8l1.3-1.1l6.2,0.8l2.9-1.3l3-2.4l2.5-0.9l2.5-1l1.5-1.5l2.5-3l3.2-0.9l2.2-3.2l2.8-1.3l2.5-3.6 l2.2-1.3l2.3-1.6l2.6-2.4l3.1-1l4.9-1.9l3.9-3.6l3.9-3.7l2.1-4l4.6-4.2l1-3.9l1-3.4l2.1-5h0.9l-0.1-2h-1.6l-0.7-3.4l-3.7-1.4 l-1.7,2.4l-0.8-0.6l1.7-2.8l-0.1-1.5l-2.6-0.2l-4-0.9l-0.2,1.8l-1.5-0.6l-3.7,2.2l-2.9,1.3l-4.2,0.9l-3.1,0.4l-1.7,1.5l-2.5-0.1 l-1.7-1.4l-0.2-2.8l0.8-0.5l-1.9-7.2l-3.5-8.1l-5.2-9.1l-1.7-4.3l1.4-4.1L759.8,439.1z" className={`hover:fill-miami-coral hover:stroke-white stroke-2 cursor-pointer ${hoveredState === "florida" ? "fill-miami-coral" : "fill-miami-turquoise/70"}`} onMouseEnter={() => handleMouseEnter("florida")} onMouseLeave={handleMouseLeave} onClick={() => handleStateClick("florida")} />
              <path id="new-york" d="M822.2,177.3l0.8-1.1l2.4-1.1l1.8-1.8l1.1-0.5l2-2.9l1.8-1.6l1.9-0.5l1.9-0.5l0.5-0.5l1.5-2.6l0.5-1.5v-1.5l-1.5-4.3 l2.9-1.8l4.4-1.5l4-1.3l3.2-0.4l2.5-1.9l2.6-2.8l3.1-6.5l0.5-6.2l-0.8-1.6l-1.3-1l-4-0.8l-4.8-2.1l-3.9-1l-0.5-5.9l-2.6-0.8 l-0.6-2.6l-8.1-2.3l-7.6-1.5l-4.5-1.5l-2.9-1.9h-2.1l-1.1-0.5l-0.5-4.5l1.6-1.5l0.3-2.9l-1.6-1l-1.6,1.1l-1.6-1.1l-6.9,5.4 l-2.1-0.6l-2.7-15.1l-1.8-1.1v-2.3l-1.1-2.3l-2.6-0.6l-4.8-0.8l-0.8-1.5h-2.6l-0.2-2.6l-2.1-1.5L788,73l-2.1-4.4l-1.8-1l-1.6,1 l-4-1.9l-5.3-5.7l-4-1.5l-3.1-0.5l-2.7,1.3l-0.2,1.3l-3.9,0.2l-2.3,2.3l-1.9,1.8l-1.5,0.8l-4.1,3.6l-9,2.3l-1.8-1l0.8-1l0.8-1.5 l2.5-4.8l0.2-1.8l-1.1-1.6l-2.7-0.3l-5.3-3.6l-3.1-0.2l-5-2.6L727,49l-1-1.1l-0.2-3.2L724,40l-0.5-8.2l3.6-3.1l5.2-1.3l-0.6-2.9 l-1.8-2.4v-4.5l-17.4,3.8l-1.5,2.4l-2.3,2.4l-7.9,8.7l-7.3,3.6l-2.3,0.5l-2.1,2.4l-3.1,2.4l-0.8,2.3l-1.5,0.5l-2.6,0.2l-0.5,0.5 l1.1,0.5l1.6,1.5l0.3,1.1l-1.6,1.5v1l1.6,1.6l0.3,3.1l0.5,4.5l-2.3,1l-0.3,0.5v0.5l-4.8,1.9l-6.5,4.5l-5.6,2.6l-5.1,3.3l-1.3-0.5 l-0.3-3.6l-1.3-0.3l-1.6,1.3l-3.9,0.2l-2.3-0.3l-7.6,3.6l-3.1,2.6l-3.9,2.1h-2.9l-0.5-0.8l-1.6-0.3l-0.5-2.6l0.3-2.4l0.3-2.1 l-1.3-2.1v-1.1l-0.6-2.3l-2.9-0.6l0.8,1.3v1.1l-1.3,2.1v2.3l0.5,1.1l-0.8,1.8l-1.6,1l0.6,3.1v1.1l2.1,2.6l2.1,3.6l2.1,2.3 l0.8,0.5l0.5,0.8l-0.5,1h1.1l3.6-0.3l1.5-1.3l1.5,0.3l0.8-0.5l0.5,0.8l-0.8,1.3l1.6,1.5l1.3-0.8h1.1l0.8,0.8l0.3,2.1l-0.3,0.5l2.9,1 l4.4-0.5l3.6-0.5l2.6-0.3l1.8,1.3l1.6,0.3l1.5-1.3l5.5,1.6l0.8-0.8l1.8-2.1l1-0.8l-0.3-1.8l1.3-1l1-1.3l0.5-1.8l1.5-2.1v-1 l2.6-0.5h2.9l2.6,1.3l0.8-1.8l3.4-2.3l3.9-1.5l4.7-0.3l1.3,0.5l9.2,0.5l5.5,3.9l1.8,0.5l1.3,0.3l-0.3,1.5l1.5,2.3l2.3,2.5l0.8,0.3 l2.9-3.1l1-0.5l1.5-1.5l2.3-2.1l1-1.8l0.5-1.6l-0.8-1.3l0.3-1.3v-2.3l-1.8-3.1l0.3-1.6l-0.6-5.5l1-3.6l-0.3-1l1.5-0.8L723,46 l1.6-0.3l0.3-0.8l1-0.3l2.3,0.3l7.9-3.9l3.1-0.8l2.8-1.3l-0.8-0.6l-0.3-1.5l-0.3-1.8l0.8-0.8l2.1-0.5l1.8-1.3l5.2-0.3l2.1-0.6 l0.3-1.5l1.5-0.3l2.1,0.3l2.3-1.3l1.5-0.3l1.3-0.8l1-0.3l1.3-1.6v-1.5l2.1-0.5l1.9-2.5l-0.3-1.8l-2.4-1.3l-0.5-1.6l0.5-1.5l2.3-1 l0.3-1.1l1.9-0.8l0.8,0.5l0.3,2.1l1,0.5l1.5-1l1.3,0.3l0.8,0.5l0.3,0.8h1l2.3-1.3l0.5-1.9l2.8-0.8l1.3-0.3l1-0.8l0.8,0.8h0.8 l0.3-1.1l0.5-1.5l2.5,0.3l0.5-1.1l-0.8-1l0.8-0.5l1.6,0.5l1-1.1l-1.3-1l-0.5-1.6l-0.3-1.3l2.3,0.3l1.9-1.8l1.8-1l-0.3-0.8l0.5-1.9 l4.5-1.6l2.4-1.9l3.6-3.7l2.6-3.2l0.3-3.4l-0.8-0.8l-0.3-2.7l1-3.9l3.1-6l0.8-4.3l-0.3-3.6v-5.7l-5.5,0.5l-6.5,0.8l-4.2,0.8 l-7.9,1.6l-7.6,1l-7.5,1l-2.6,0.3l-6.5,0.9l-13.1,2.4l2.6,16.5l2.1,9.9l-0.5,5.7v8.1l-0.8,9.1l-0.3,3.4l-3.4,3.9l-2.2,7.5 l-1.1,5.5l-1.3,3.1l-0.5,7.4l-4.2,5.5l-0.5,3.9v4.9l-2.9,5.7l-0.5,1.8l-0.5,7.9l-1,3.6l-2.1,2.9l-1,6.2l0.3,2.3l-0.8,7.1L822.2,177.3z" className={`hover:fill-miami-coral hover:stroke-white stroke-2 cursor-pointer ${hoveredState === "new-york" ? "fill-miami-coral" : "fill-miami-turquoise/70"}`} onMouseEnter={() => handleMouseEnter("new-york")} onMouseLeave={handleMouseLeave} onClick={() => handleStateClick("new-york")} />
              <path id="texas" d="M417.9,466.4l11.9,0.7l12,0.5l0.7-11.6l0.7-11.1l0.8-12.7l0.3-8.2l3.4-23.3l1.3-11.2l0.5-11.1l0.8-10.4l0.8-10.7 l0.8-9.3l4.7,0.1l7.1,0.2l10.9,0.5l12.8,0.5l14.1,0.9l13.7,0.5l0.4,5.1l0.1,8.3l0.6,9.3l0.9,3.2l2.4,2.9l1.3,3.2l2.2,0.7l3,0.8 l1.9-8.8l0.5-9.9l1.3-10.2l0.5-10.2l0.5-7.4l1.7-1.9l2-0.7l1.1-0.7l0.8-4.1l3.9,0.5l2.9,1.9l2.9-0.5l1.4,1.4l2.9-0.5h0.3l1-1.7 l5.7,2.6l5.2,1.8l1.2-1.3l5.2,0.7l5.3-0.6l4.1,0.2l3.7,0.7l4,0.7l1.3,2l4.9,0.9l2.2,2.3l4.1,0.7l4,1.5l2.8-4l1.1-5.4l2.9-0.7 l1.3-1.9l0.6-3.1l0.7-0.8l0.1-2.9l5.3-3.2l2.6,0.4l3.8-0.7l3.2-0.2l3.8,0.9l2.6,2.8l2.8-0.7l2.7,1.2l2.3,4.1l1.8,0.9l1.6-0.7 l3,0.4l2.3,3.2l0.1,2l5.1,0.5l2.1-0.8l2.9-2.2l-2.3-3.3l0.2-2.5l2.5-2.7l1.8-0.8l2.8,1l2.5,2.2l0.5,3.3l1.8,3.9l-1.5,1.8l2.7,1.3 l1.4,2l-0.3,4.2l-1.5,3.3l0.5,3l5.2,4l2,1.1l2.5-1.4l0.2-2.2l1-3.8h2.1l2.5-1.1l1.8-1.9l1.4,0.8l0.7,3.8l3.7,1.9l2.5,0.4l2.3-0.6 l1-1.5l3.8-0.5l1.7-0.9l1-2.2l1.4-0.5h3.3l1.6,1.5l3.2-0.2v-1.1l3.2-2.6l1.6,0.8l1.4-1.5h2.7l0.7-1.5l1.5-0.5l0.6,0.8l2-2l5-0.3 l0.8-1.9l-0.8-2l1-2l2.3-0.5l0.5-1.8l1.4,1.4l3.4,0.5l-0.5,1.8l3.8,0.8l1-0.1l0.5-3.6l1-0.5l-0.8-2.2l1.2-4.2l0.5-4.9l-0.7-3.5 l8-54.8l0.3-1.9l5.7,0.7l5.3,0.9l5,0.7l5.4,0.4l5.5,0.3l5.6,0.1l5.1-0.1l0.5,2l0.3,5.2l0.5,8.2l0.4,9.4l0.2,5.8l0.5,5.7l0.5,6.9 l0.7,6.1l0.5,4.1l0.8,6.6l1,6.4l0.9,5l1.1,4.5l0.7,6.1l0.3,1.9l0.7,5l1.3,4.5l1.8,4.8l0.9,4.8l0.4,5.6l-3.6,0.1l-9.6-0.5l-12-0.5 l-4.9-0.5l-6.5-0.1l-12-1.5l-13.5-0.3l-10-0.5l-13.5-1.1l-10.2-0.5l-1,31.9l-0.5,19.5l-0.3,15.2l-0.5,12.6l-0.8,18.8l-0.5,6 l-1.9,0.8l-2.3-1.8l-1.6,0.3l-0.5,0.7l-2.7,0.2l-0.6,1.9l0.7,4.6l-2.1,2.5l-1.8-0.2l-0.3,2.4l-2.9,2.1l-0.3,3.1l-0.6,0.6l0.7,2.4 l-0.5,3l-1.1,1.1l-0.8,2.3l-2.3,2.3l-1,0.1l-0.6,8.9l-0.5,4.7l-3.2,6.1l-2.4,3.7l-2.6,2.4l-3.9,2.3l-5.4,0.9l-11.9,0.7l-5.3,0.7 l-5.7,0.9l-6.6,0.8h-5.9l-0.3,5.8l-12.9,0.9l-7.8,0.7l-10.2,0.5l-11.9,0.3l-7.5-0.1l-14.2-2.1l-7.3-1.3l-10.7-2.6L417.9,466.4z" className={`hover:fill-miami-coral hover:stroke-white stroke-2 cursor-pointer ${hoveredState === "texas" ? "fill-miami-coral" : "fill-miami-turquoise/70"}`} onMouseEnter={() => handleMouseEnter("texas")} onMouseLeave={handleMouseLeave} onClick={() => handleStateClick("texas")} />
              {/* Add all other state paths */}
            </g>
          </svg>
        </div>

        {/* State Info Panel (shows when hovering over a state) */}
        {hoveredState && (
          <motion.div 
            className="w-full lg:w-1/3 bg-white/10 backdrop-blur-md p-6 rounded-lg glass-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-miami-coral flex items-center justify-center text-white">
                  <MapPin size={18} />
                </div>
                <h3 className="text-2xl font-bold ml-3 text-white">
                  {stateData[hoveredState as keyof typeof stateData]?.name || "Estado"}
                </h3>
              </div>
              
              <div className="mb-4">
                <h4 className="text-white text-lg mb-2 font-semibold">Ciudades principales</h4>
                <div className="flex flex-wrap gap-2">
                  {stateData[hoveredState as keyof typeof stateData]?.cities.map((city, idx) => (
                    <span key={idx} className="bg-white/20 text-white text-sm px-3 py-1 rounded-full">
                      {city}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="relative h-48 rounded-lg overflow-hidden mb-4">
                <img 
                  src={stateData[hoveredState as keyof typeof stateData]?.image} 
                  alt={stateData[hoveredState as keyof typeof stateData]?.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              </div>
              
              <div className="mt-auto">
                <button 
                  className="w-full py-3 bg-miami-coral hover:bg-miami-coral/80 text-white rounded-lg flex items-center justify-center transition-colors"
                  onClick={() => handleStateClick(hoveredState)}
                >
                  <Navigation size={18} className="mr-2" />
                  Explorar {stateData[hoveredState as keyof typeof stateData]?.name}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
      
      {/* Instructions */}
      <div className="text-center text-white/80 text-sm mt-4">
        Pasa el cursor sobre cualquier estado para ver más información o haz clic para explorar en detalle.
      </div>
    </div>
  );
};

export default InteractiveUSAMap;
