
import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

// Map data for US states with coordinates for SVG path
const stateData = {
  "alabama": {
    name: "Alabama",
    cities: ["Birmingham", "Montgomery", "Mobile"],
    images: [
      "https://images.unsplash.com/photo-1578309992456-c4f4cb28de0b?q=80&w=1740&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1630964245787-763d1debfa1c?q=80&w=1740&auto=format&fit=crop"
    ]
  },
  "alaska": {
    name: "Alaska",
    cities: ["Anchorage", "Juneau", "Fairbanks"],
    images: [
      "https://images.unsplash.com/photo-1503095396549-807759245b35?q=80&w=1744&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1564633936883-3d63c27484cd?q=80&w=1740&auto=format&fit=crop"
    ]
  },
  "arizona": {
    name: "Arizona",
    cities: ["Phoenix", "Tucson", "Sedona"],
    images: [
      "https://images.unsplash.com/photo-1558645836-e44122a743ee?q=80&w=1740&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1602088693770-867518e50a9b?q=80&w=1617&auto=format&fit=crop"
    ]
  },
  "arkansas": {
    name: "Arkansas",
    cities: ["Little Rock", "Fayetteville", "Hot Springs"],
    images: [
      "https://images.unsplash.com/photo-1570363528981-7ccfa4db3a23?q=80&w=1740&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1639069853542-28213be2307c?q=80&w=1740&auto=format&fit=crop"
    ]
  },
  "california": {
    name: "California",
    cities: ["Los Angeles", "San Francisco", "San Diego"],
    images: [
      "https://images.unsplash.com/photo-1506146332389-18140dc7b2fb?q=80&w=1364&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1575846150018-9ce5f377d992?q=80&w=1740&auto=format&fit=crop"
    ]
  },
  "colorado": {
    name: "Colorado",
    cities: ["Denver", "Colorado Springs", "Boulder"],
    images: [
      "https://images.unsplash.com/photo-1602705169259-fec1eb128f1e?q=80&w=1740&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600007283728-22abc97b9318?q=80&w=1587&auto=format&fit=crop"
    ]
  },
  "connecticut": {
    name: "Connecticut",
    cities: ["Hartford", "New Haven", "Stamford"],
    images: [
      "https://images.unsplash.com/photo-1489528792647-46ec39027556?q=80&w=1634&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1596393209175-d917c6aa5058?q=80&w=1740&auto=format&fit=crop"
    ]
  },
  "delaware": {
    name: "Delaware",
    cities: ["Wilmington", "Dover", "Rehoboth Beach"],
    images: [
      "https://images.unsplash.com/photo-1617466114006-d7f037c4e9e7?q=80&w=1740&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1588602933249-a5f95ae69c31?q=80&w=1740&auto=format&fit=crop"
    ]
  },
  "florida": {
    name: "Florida",
    cities: ["Miami", "Orlando", "Tampa"],
    images: [
      "https://images.unsplash.com/photo-1535498730771-e735b998cd64?q=80&w=1470&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1575089776834-8be34696ffb9?q=80&w=1374&auto=format&fit=crop"
    ]
  },
  "georgia": {
    name: "Georgia",
    cities: ["Atlanta", "Savannah", "Athens"],
    images: [
      "https://images.unsplash.com/photo-1575931953324-fcac7094999e?q=80&w=1740&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1609183480237-eb21631a7db4?q=80&w=1587&auto=format&fit=crop"
    ]
  },
  "hawaii": {
    name: "Hawaii",
    cities: ["Honolulu", "Lahaina", "Hilo"],
    images: [
      "https://images.unsplash.com/photo-1505852679233-d9fd70aff56d?q=80&w=1470&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1573991458006-3701997c6d8f?q=80&w=1587&auto=format&fit=crop"
    ]
  },
  "idaho": {
    name: "Idaho",
    cities: ["Boise", "Idaho Falls", "Coeur d'Alene"],
    images: [
      "https://images.unsplash.com/photo-1602889822473-d8e22086ea1c?q=80&w=1634&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1588309464835-5e69634d4f2d?q=80&w=1740&auto=format&fit=crop"
    ]
  },
  "illinois": {
    name: "Illinois",
    cities: ["Chicago", "Springfield", "Peoria"],
    images: [
      "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=1713&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503532899220-c678a6808a63?q=80&w=1587&auto=format&fit=crop"
    ]
  },
  "indiana": {
    name: "Indiana",
    cities: ["Indianapolis", "Fort Wayne", "Bloomington"],
    images: [
      "https://images.unsplash.com/photo-1578301978018-3ae389966834?q=80&w=1619&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1635030134524-58544147ebb5?q=80&w=1740&auto=format&fit=crop"
    ]
  },
  "iowa": {
    name: "Iowa",
    cities: ["Des Moines", "Cedar Rapids", "Iowa City"],
    images: [
      "https://images.unsplash.com/photo-1570006549499-90451fd4ebd1?q=80&w=1740&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1613756241969-01f7b1a12551?q=80&w=1587&auto=format&fit=crop"
    ]
  },
  "kansas": {
    name: "Kansas",
    cities: ["Wichita", "Kansas City", "Topeka"],
    images: [
      "https://images.unsplash.com/photo-1530455290214-eb5a04e82c47?q=80&w=1740&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1623970584468-5347bd386df4?q=80&w=1587&auto=format&fit=crop"
    ]
  },
  "kentucky": {
    name: "Kentucky",
    cities: ["Louisville", "Lexington", "Bowling Green"],
    images: [
      "https://images.unsplash.com/photo-1602534543015-89d9122fb4bd?q=80&w=1740&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1555949367-e1ed32a880db?q=80&w=1587&auto=format&fit=crop"
    ]
  },
  "louisiana": {
    name: "Louisiana",
    cities: ["New Orleans", "Baton Rouge", "Lafayette"],
    images: [
      "https://images.unsplash.com/photo-1570747408017-38b4c5a37757?q=80&w=1634&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1571318915068-46dd3d307443?q=80&w=1740&auto=format&fit=crop"
    ]
  },
  "maine": {
    name: "Maine",
    cities: ["Portland", "Augusta", "Bar Harbor"],
    images: [
      "https://images.unsplash.com/photo-1508003527267-4775a4454948?q=80&w=1740&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1549040085-ce7c5d037a5f?q=80&w=1587&auto=format&fit=crop"
    ]
  },
  "maryland": {
    name: "Maryland",
    cities: ["Baltimore", "Annapolis", "Ocean City"],
    images: [
      "https://images.unsplash.com/photo-1617932595956-0b9a602443e3?q=80&w=1740&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1605214136326-fba06f56b693?q=80&w=1740&auto=format&fit=crop"
    ]
  },
  "massachusetts": {
    name: "Massachusetts",
    cities: ["Boston", "Cambridge", "Cape Cod"],
    images: [
      "https://images.unsplash.com/photo-1572731415763-76f99b258235?q=80&w=1740&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1617993952657-52fd85c54a24?q=80&w=1740&auto=format&fit=crop"
    ]
  },
  "michigan": {
    name: "Michigan",
    cities: ["Detroit", "Ann Arbor", "Grand Rapids"],
    images: [
      "https://images.unsplash.com/photo-1555710132-5cbc0930e17d?q=80&w=1740&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1552669741-77955ba3424e?q=80&w=1587&auto=format&fit=crop"
    ]
  },
  "minnesota": {
    name: "Minnesota",
    cities: ["Minneapolis", "Saint Paul", "Duluth"],
    images: [
      "https://images.unsplash.com/photo-1581877361374-90453ee50de8?q=80&w=1587&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1601820505695-0ff19bf7a3d5?q=80&w=1740&auto=format&fit=crop"
    ]
  },
  "mississippi": {
    name: "Mississippi",
    cities: ["Jackson", "Biloxi", "Hattiesburg"],
    images: [
      "https://images.unsplash.com/photo-1568111561564-08726a1563e1?q=80&w=1740&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1618248693591-f50b92bee46c?q=80&w=1740&auto=format&fit=crop"
    ]
  },
  "missouri": {
    name: "Missouri",
    cities: ["Kansas City", "St. Louis", "Springfield"],
    images: [
      "https://images.unsplash.com/photo-1600801308800-f7dba5d114df?q=80&w=1587&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1599590984817-0c15f31b1fa4?q=80&w=1587&auto=format&fit=crop"
    ]
  },
  "montana": {
    name: "Montana",
    cities: ["Billings", "Missoula", "Bozeman"],
    images: [
      "https://images.unsplash.com/photo-1580129958560-c43e0d0cbcde?q=80&w=1587&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=1587&auto=format&fit=crop"
    ]
  },
  "nebraska": {
    name: "Nebraska",
    cities: ["Omaha", "Lincoln", "Grand Island"],
    images: [
      "https://images.unsplash.com/photo-1611590287514-58acf1c15558?q=80&w=1587&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1534876760257-b96aeb8ecb8a?q=80&w=1587&auto=format&fit=crop"
    ]
  },
  "nevada": {
    name: "Nevada",
    cities: ["Las Vegas", "Reno", "Carson City"],
    images: [
      "https://images.unsplash.com/photo-1581351721010-8cf859cb14a4?q=80&w=1470&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1605833556294-ea5c7a74f57d?q=80&w=1740&auto=format&fit=crop"
    ]
  },
  "new-hampshire": {
    name: "New Hampshire",
    cities: ["Manchester", "Concord", "Portsmouth"],
    images: [
      "https://images.unsplash.com/photo-1612779507638-e9ef43e5d4f0?q=80&w=1740&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1516302350523-4c29d47b89e1?q=80&w=1613&auto=format&fit=crop"
    ]
  },
  "new-jersey": {
    name: "New Jersey",
    cities: ["Newark", "Jersey City", "Atlantic City"],
    images: [
      "https://images.unsplash.com/photo-1617547605316-6ce3bae7126f?q=80&w=1740&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1529300889797-e91b1413109c?q=80&w=1587&auto=format&fit=crop"
    ]
  },
  "new-mexico": {
    name: "New Mexico",
    cities: ["Albuquerque", "Santa Fe", "Las Cruces"],
    images: [
      "https://images.unsplash.com/photo-1564413611729-aade7af65ab1?q=80&w=1587&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1637328048949-4b63d3a9dd3c?q=80&w=1740&auto=format&fit=crop"
    ]
  },
  "new-york": {
    name: "New York",
    cities: ["New York City", "Buffalo", "Rochester"],
    images: [
      "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=1470&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1534270804882-6b5048b1c1fc?q=80&w=1742&auto=format&fit=crop"
    ]
  },
  "north-carolina": {
    name: "North Carolina",
    cities: ["Charlotte", "Raleigh", "Asheville"],
    images: [
      "https://images.unsplash.com/photo-1514565131-fce0801e5785?q=80&w=1632&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1608739879755-a4ef7b17b64d?q=80&w=1740&auto=format&fit=crop"
    ]
  },
  "north-dakota": {
    name: "North Dakota",
    cities: ["Fargo", "Bismarck", "Grand Forks"],
    images: [
      "https://images.unsplash.com/photo-1562379825-691c9f2cba7e?q=80&w=1595&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1534603630273-c58c538ffd9c?q=80&w=1587&auto=format&fit=crop"
    ]
  },
  "ohio": {
    name: "Ohio",
    cities: ["Columbus", "Cleveland", "Cincinnati"],
    images: [
      "https://images.unsplash.com/photo-1538153217232-98ba847d7aea?q=80&w=1632&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1579041727288-b6eb0ac61da3?q=80&w=1587&auto=format&fit=crop"
    ]
  },
  "oklahoma": {
    name: "Oklahoma",
    cities: ["Oklahoma City", "Tulsa", "Norman"],
    images: [
      "https://images.unsplash.com/photo-1507469949893-2e0d5408388c?q=80&w=1740&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600211524529-dfa0aa2687c5?q=80&w=1587&auto=format&fit=crop"
    ]
  },
  "oregon": {
    name: "Oregon",
    cities: ["Portland", "Eugene", "Salem"],
    images: [
      "https://images.unsplash.com/photo-1593058851588-7d6c73781ec3?q=80&w=1587&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1654196489253-74e564a0f783?q=80&w=1740&auto=format&fit=crop"
    ]
  },
  "pennsylvania": {
    name: "Pennsylvania",
    cities: ["Philadelphia", "Pittsburgh", "Harrisburg"],
    images: [
      "https://images.unsplash.com/photo-1575378972206-eda8be43fea3?q=80&w=1740&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1595885100565-e61cc8b07215?q=80&w=1587&auto=format&fit=crop"
    ]
  },
  "rhode-island": {
    name: "Rhode Island",
    cities: ["Providence", "Newport", "Warwick"],
    images: [
      "https://images.unsplash.com/photo-1614114724747-f2a150acd369?q=80&w=1587&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1629112933052-a6c0e51a2b6c?q=80&w=1740&auto=format&fit=crop"
    ]
  },
  "south-carolina": {
    name: "South Carolina",
    cities: ["Charleston", "Columbia", "Myrtle Beach"],
    images: [
      "https://images.unsplash.com/photo-1585833615548-28487ccf54e8?q=80&w=1587&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1585833615548-28487ccf54e8?q=80&w=1587&auto=format&fit=crop"
    ]
  },
  "south-dakota": {
    name: "South Dakota",
    cities: ["Sioux Falls", "Rapid City", "Aberdeen"],
    images: [
      "https://images.unsplash.com/photo-1605651202774-7d9add9cf350?q=80&w=1740&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1567349308584-a33a4545a1c1?q=80&w=1587&auto=format&fit=crop"
    ]
  },
  "tennessee": {
    name: "Tennessee",
    cities: ["Nashville", "Memphis", "Knoxville"],
    images: [
      "https://images.unsplash.com/photo-1544825333-82a22b621f2e?q=80&w=1587&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1578681041175-9e85511bb233?q=80&w=1740&auto=format&fit=crop"
    ]
  },
  "texas": {
    name: "Texas",
    cities: ["Houston", "Dallas", "Austin"],
    images: [
      "https://images.unsplash.com/photo-1531218150217-54595bc2b934?q=80&w=1428&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600320515908-d4e50dc55753?q=80&w=1587&auto=format&fit=crop"
    ]
  },
  "utah": {
    name: "Utah",
    cities: ["Salt Lake City", "Park City", "Moab"],
    images: [
      "https://images.unsplash.com/photo-1558033784-fe7e2a615dcf?q=80&w=1587&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1534217114297-30cf33433cuf?q=80&w=1587&auto=format&fit=crop"
    ]
  },
  "vermont": {
    name: "Vermont",
    cities: ["Burlington", "Montpelier", "Stowe"],
    images: [
      "https://images.unsplash.com/photo-1570127828934-8e8554819aa8?q=80&w=1587&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1584980561025-51659eea6cc9?q=80&w=1587&auto=format&fit=crop"
    ]
  },
  "virginia": {
    name: "Virginia",
    cities: ["Richmond", "Virginia Beach", "Arlington"],
    images: [
      "https://images.unsplash.com/photo-1585245542454-85116e323a78?q=80&w=1587&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1589286310313-7e3501bafe34?q=80&w=1587&auto=format&fit=crop"
    ]
  },
  "washington": {
    name: "Washington",
    cities: ["Seattle", "Spokane", "Tacoma"],
    images: [
      "https://images.unsplash.com/photo-1604186838347-9faaf0b83be8?q=80&w=1587&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503785640985-f62e3aeee448?q=80&w=1740&auto=format&fit=crop"
    ]
  },
  "west-virginia": {
    name: "West Virginia",
    cities: ["Charleston", "Huntington", "Morgantown"],
    images: [
      "https://images.unsplash.com/photo-1599058917765-a780eda07a3e?q=80&w=1740&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1613183350979-8398e4f6950b?q=80&w=1740&auto=format&fit=crop"
    ]
  },
  "wisconsin": {
    name: "Wisconsin",
    cities: ["Milwaukee", "Madison", "Green Bay"],
    images: [
      "https://images.unsplash.com/photo-1597411210662-4ab186f2b9b1?q=80&w=1740&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1590835192697-ea2b23c57a4f?q=80&w=1587&auto=format&fit=crop"
    ]
  },
  "wyoming": {
    name: "Wyoming",
    cities: ["Cheyenne", "Jackson", "Casper"],
    images: [
      "https://images.unsplash.com/photo-1605833556294-ea5c7a74f57d?q=80&w=1740&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1608236465624-a9fcfd7f7595?q=80&w=1587&auto=format&fit=crop"
    ]
  }
};

const USAMap = () => {
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

  return (
    <div className="relative w-full h-[600px] mb-12 glass-card overflow-hidden rounded-xl">
      <div className="absolute inset-0 flex justify-center items-center p-4">
        <svg
          viewBox="0 0 960 600"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* USA Map SVG Paths will be included here */}
          {/* For simplicity, I'm only including a few representative states */}
          <g>
            {/* Florida */}
            <path
              d="M759.8,439.1l2.6,7.6l2.2,9.5l4.5,8.2l4.1,3.5l1.9,5.1l-0.5,5.4l-2.9,5.7l-0.5,5.1l-4.2,1l-1.8,2.2l-1.2,7.6l-2.4,8.5 l1.7,6l-0.4,10.5l-4.9,5.4l-3.8,6l-2.8,6.3l-4.3,8l-1.2,6.3l-0.8,6.6l-3.6,5.7l-1.6,5.7l-3.3,4.4l-2,2.9l1.3,8.2l-3.3,4.2l-3,5.2 l-4.8,1.2l-2.5,3.2l-3.4,1.5l-1.3,3.5l2.8,6.7l-1.4,4.5l-3.6,0.5l-1.6,3.8l0.3,2.7l-2.4,1l-0.3,2.7l-5.4,4.9l-2.5,3.2l-6.4-1.8 l-8.5-0.5l-7.3,1l-8.3,5.3l-10.3,1.5l-11,1.3l-6.7,0.2l-11.3,2.9l-6.3-0.8l-5.5,1.8l-12.4,2.1l-6.5-2.8l-2.5-3.7l-2.2-1l2.1-1.8 l-0.1-4.8l2.5-1.5l3.9-0.5l3-2.7l0.1-4.3l-6.7-0.5l-2.5-1.9l-4.2-1.5l-1.1-0.5l-5.8-0.7l2.1-2.9l4.8-0.5l3.1-2.5l3.8-0.3l2.5-3.4 l1.3-3.2l3.9-0.3l2.1-3.1l-0.4-5.8l1.3-1.1l6.2,0.8l2.9-1.3l3-2.4l2.5-0.9l2.5-1l1.5-1.5l2.5-3l3.2-0.9l2.2-3.2l2.8-1.3l2.5-3.6 l2.2-1.3l2.3-1.6l2.6-2.4l3.1-1l4.9-1.9l3.9-3.6l3.9-3.7l2.1-4l4.6-4.2l1-3.9l1-3.4l2.1-5h0.9l-0.1-2h-1.6l-0.7-3.4l-3.7-1.4 l-1.7,2.4l-0.8-0.6l1.7-2.8l-0.1-1.5l-2.6-0.2l-4-0.9l-0.2,1.8l-1.5-0.6l-3.7,2.2l-2.9,1.3l-4.2,0.9l-3.1,0.4l-1.7,1.5l-2.5-0.1 l-1.7-1.4l-0.2-2.8l0.8-0.5l-1.9-7.2l-3.5-8.1l-5.2-9.1l-1.7-4.3l1.4-4.1L759.8,439.1z"
              className={`hover:fill-miami-coral hover:stroke-white stroke-2 cursor-pointer ${hoveredState === "florida" ? "fill-miami-coral" : "fill-miami-turquoise/70"}`}
              onMouseEnter={() => handleMouseEnter("florida")}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleStateClick("florida")}
            />
            
            {/* Texas */}
            <path
              d="M417.9,466.4l11.9,0.7l12,0.5l0.7-11.6l0.7-11.1l0.8-12.7l0.3-8.2l3.4-23.3l1.3-11.2l0.5-11.1l0.8-10.4l0.8-10.7 l0.8-9.3l4.7,0.1l7.1,0.2l10.9,0.5l12.8,0.5l14.1,0.9l13.7,0.5l0.4,5.1l0.1,8.3l0.6,9.3l0.9,3.2l2.4,2.9l1.3,3.2l2.2,0.7l3,0.8 l1.9-8.8l0.5-9.9l1.3-10.2l0.5-10.2l0.5-7.4l1.7-1.9l2-0.7l1.1-0.7l0.8-4.1l3.9,0.5l2.9,1.9l2.9-0.5l1.4,1.4l2.9-0.5h0.3l1-1.7 l5.7,2.6l5.2,1.8l1.2-1.3l5.2,0.7l5.3-0.6l4.1,0.2l3.7,0.7l4,0.7l1.3,2l4.9,0.9l2.2,2.3l4.1,0.7l4,1.5l2.8-4l1.1-5.4l2.9-0.7 l1.3-1.9l0.6-3.1l0.7-0.8l0.1-2.9l5.3-3.2l2.6,0.4l3.8-0.7l3.2-0.2l3.8,0.9l2.6,2.8l2.8-0.7l2.7,1.2l2.3,4.1l1.8,0.9l1.6-0.7 l3,0.4l2.3,3.2l0.1,2l5.1,0.5l2.1-0.8l2.9-2.2l-2.3-3.3l0.2-2.5l2.5-2.7l1.8-0.8l2.8,1l2.5,2.2l0.5,3.3l1.8,3.9l-1.5,1.8l2.7,1.3 l1.4,2l-0.3,4.2l-1.5,3.3l0.5,3l5.2,4l2,1.1l2.5-1.4l0.2-2.2l1-3.8h2.1l2.5-1.1l1.8-1.9l1.4,0.8l0.7,3.8l3.7,1.9l2.5,0.4l2.3-0.6 l1-1.5l3.8-0.5l1.7-0.9l1-2.2l1.4-0.5h3.3l1.6,1.5l3.2-0.2v-1.1l3.2-2.6l1.6,0.8l1.4-1.5h2.7l0.7-1.5l1.5-0.5l0.6,0.8l2-2l5-0.3 l0.8-1.9l-0.8-2l1-2l2.3-0.5l0.5-1.8l1.4,1.4l3.4,0.5l-0.5,1.8l3.8,0.8l1-0.1l0.5-3.6l1-0.5l-0.8-2.2l1.2-4.2l0.5-4.9l-0.7-3.5 l8-54.8l0.3-1.9l5.7,0.7l5.3,0.9l5,0.7l5.4,0.4l5.5,0.3l5.6,0.1l5.1-0.1l0.5,2l0.3,5.2l0.5,8.2l0.4,9.4l0.2,5.8l0.5,5.7l0.5,6.9 l0.7,6.1l0.5,4.1l0.8,6.6l1,6.4l0.9,5l1.1,4.5l0.7,6.1l0.3,1.9l0.7,5l1.3,4.5l1.8,4.8l0.9,4.8l0.4,5.6l-3.6,0.1l-9.6-0.5l-12-0.5 l-4.9-0.5l-6.5-0.1l-12-1.5l-13.5-0.3l-10-0.5l-13.5-1.1l-10.2-0.5l-1,31.9l-0.5,19.5l-0.3,15.2l-0.5,12.6l-0.8,18.8l-0.5,6 l-1.9,0.8l-2.3-1.8l-1.6,0.3l-0.5,0.7l-2.7,0.2l-0.6,1.9l0.7,4.6l-2.1,2.5l-1.8-0.2l-0.3,2.4l-2.9,2.1l-0.3,3.1l-0.6,0.6l0.7,2.4 l-0.5,3l-1.1,1.1l-0.8,2.3l-2.3,2.3l-1,0.1l-0.6,8.9l-0.5,4.7l-3.2,6.1l-2.4,3.7l-2.6,2.4l-3.9,2.3l-5.4,0.9l-11.9,0.7l-5.3,0.7 l-5.7,0.9l-6.6,0.8h-5.9l-0.3,5.8l-12.9,0.9l-7.8,0.7l-10.2,0.5l-11.9,0.3l-7.5-0.1l-14.2-2.1l-7.3-1.3l-10.7-2.6L417.9,466.4z"
              className={`hover:fill-miami-coral hover:stroke-white stroke-2 cursor-pointer ${hoveredState === "texas" ? "fill-miami-coral" : "fill-miami-turquoise/70"}`}
              onMouseEnter={() => handleMouseEnter("texas")}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleStateClick("texas")}
            />
            
            {/* California */}
            <path
              d="M139.4,386.8l3.3-0.9l3-2.2l0.3-7l0.5-2.1l0.3-2.5l-2.1-1l-1.6-2.2l-2.1-3.7l-2.2-4.8l-2.8-4.8l-1.3-3.9l-0.5-4.8 l-0.9-3.5l-2.9-5.5l-1.1-5.5l-0.3-4.9l1.3-3.8l7-10.2l7.5-8.4l5.3-7.5l1.1-1.3l4.7-8.5l7.3-8.1l5.1-3.3l0.8,0.1l2.1-1.3l-0.9-1 l2.9-3.7l3.5-1.9l0.9-1.6l0.5-2.5l-0.8-2.1l-1.5-0.8l-0.9-2.5l0.5-2.5l1.7-1l3.3-0.5l2.4-1.1l0.3-1.6l-2-3.2l-2.7-2.1l0.5-6.2 l-3.5-2.5l-1.7-2.8l-5.7-15.6l-3.2-7.8l-1-7.6l1.8-6.8l0.5-2.9l-0.6-3.3l0.7-3.2l1.7-4.9l7.5-10.4l1-5.3l1.6-8.5l0.5-3.1l3.5-5.2 l1.1-5.2v-9.5l0.7-1.8l-1-2.5l-5.7-2.1l-3.2-2.6l-3.2-3.5l-4.1-3.5l-3.2-5.7l-4.8-10.3l-2.5-7.9l-2.2-3.9l-5.1-7.1l-3.1-6.5 l-2.2-2.5l-2.5-1.5l-0.5-2.2l1.1-3.6l-0.2-3.5l-1.5-2.7l-5.1-4.9l-10.3-10.4l-7.6-6.2l-2.5-2.3l-6.5-8.2l-8.5-3.5l-1.3-2.3L85,58 l-1.5-4.2l-13.8,4.1l-21.9,8.5L36,72.7L25.4,78L16,82.8l-4.6,0.5l-12.1,1.3l-10.3,2.2L0,147.2l0.5,12.4l1,7.2l2.7,12.3L5,184v3 l-1.3,1l-0.2,2.2l-1,3.5l-3.9,5.6l-1.9,0.2l-1.9,7.3l-0.5,4.2l0.2,3.5l-1.1,2.8l1.6,3.5l2.9,3l3.5,1.8l2.2,4.3l0.4,3.2l-0.4,6.5 l0.3,8.2l7,31.6l24.8,35.6L139.4,386.8z"
              className={`hover:fill-miami-coral hover:stroke-white stroke-2 cursor-pointer ${hoveredState === "california" ? "fill-miami-coral" : "fill-miami-turquoise/70"}`}
              onMouseEnter={() => handleMouseEnter("california")}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleStateClick("california")}
            />
            
            {/* New York */}
            <path
              d="M822.2,177.3l0.8-1.1l2.4-1.1l1.8-1.8l1.1-0.5l2-2.9l1.8-1.6l1.9-0.5l1.9-0.5l0.5-0.5l1.5-2.6l0.5-1.5v-1.5l-1.5-4.3 l2.9-1.8l4.4-1.5l4-1.3l3.2-0.4l2.5-1.9l2.6-2.8l3.1-6.5l0.5-6.2l-0.8-1.6l-1.3-1l-4-0.8l-4.8-2.1l-3.9-1l-0.5-5.9l-2.6-0.8 l-0.6-2.6l-8.1-2.3l-7.6-1.5l-4.5-1.5l-2.9-1.9h-2.1l-1.1-0.5l-0.5-4.5l1.6-1.5l0.3-2.9l-1.6-1l-1.6,1.1l-1.6-1.1l-6.9,5.4 l-2.1-0.6l-2.7-15.1l-1.8-1.1v-2.3l-1.1-2.3l-2.6-0.6l-4.8-0.8l-0.8-1.5h-2.6l-0.2-2.6l-2.1-1.5L788,73l-2.1-4.4l-1.8-1l-1.6,1 l-4-1.9l-5.3-5.7l-4-1.5l-3.1-0.5l-2.7,1.3l-0.2,1.3l-3.9,0.2l-2.3,2.3l-1.9,1.8l-1.5,0.8l-4.1,3.6l-9,2.3l-1.8-1l0.8-1l0.8-1.5 l2.5-4.8l0.2-1.8l-1.1-1.6l-2.7-0.3l-5.3-3.6l-3.1-0.2l-5-2.6L727,49l-1-1.1l-0.2-3.2L724,40l-0.5-8.2l3.6-3.1l5.2-1.3l-0.6-2.9 l-1.8-2.4v-4.5l-17.4,3.8l-1.5,2.4l-2.3,2.4l-7.9,8.7l-7.3,3.6l-2.3,0.5l-2.1,2.4l-3.1,2.4l-0.8,2.3l-1.5,0.5l-2.6,0.2l-0.5,0.5 l1.1,0.5l1.6,1.5l0.3,1.1l-1.6,1.5v1l1.6,1.6l0.3,3.1l0.5,4.5l-2.3,1l-0.3,0.5v0.5l-4.8,1.9l-6.5,4.5l-5.6,2.6l-5.1,3.3l-1.3-0.5 l-0.3-3.6l-1.3-0.3l-1.6,1.3l-3.9,0.2l-2.3-0.3l-7.6,3.6l-3.1,2.6l-3.9,2.1h-2.9l-0.5-0.8l-1.6-0.3l-0.5-2.6l0.3-2.4l0.3-2.1 l-1.3-2.1v-1.1l-0.6-2.3l-2.9-0.6l0.8,1.3v1.1l-1.3,2.1v2.3l0.5,1.1l-0.8,1.8l-1.6,1l0.6,3.1v1.1l2.1,2.6l2.1,3.6l2.1,2.3 l0.8,0.5l0.5,0.8l-0.5,1h1.1l3.6-0.3l1.5-1.3l1.5,0.3l0.8-0.5l0.5,0.8l-0.8,1.3l1.6,1.5l1.3-0.8h1.1l0.8,0.8l0.3,2.1l-0.3,0.5l2.9,1 l4.4-0.5l3.6-0.5l2.6-0.3l1.8,1.3l1.6,0.3l1.5-1.3l5.5,1.6l0.8-0.8l1.8-2.1l1-0.8l-0.3-1.8l1.3-1l1-1.3l0.5-1.8l1.5-2.1v-1 l2.6-0.5h2.9l2.6,1.3l0.8-1.8l3.4-2.3l3.9-1.5l4.7-0.3l1.3,0.5l9.2,0.5l5.5,3.9l1.8,0.5l1.3,0.3l-0.3,1.5l1.5,2.3l2.3,2.5l0.8,0.3 l2.9-3.1l1-0.5l1.5-1.5l2.3-2.1l1-1.8l0.5-1.6l-0.8-1.3l0.3-1.3v-2.3l-1.8-3.1l0.3-1.6l-0.6-5.5l1-3.6l-0.3-1l1.5-0.8L723,46 l1.6-0.3l0.3-0.8l1-0.3l2.3,0.3l7.9-3.9l3.1-0.8l2.8-1.3l-0.8-0.6l-0.3-1.5l-0.3-1.8l0.8-0.8l2.1-0.5l1.8-1.3l5.2-0.3l2.1-0.6 l0.3-1.5l1.5-0.3l2.1,0.3l2.3-1.3l1.5-0.3l1.3-0.8l1-0.3l1.3-1.6v-1.5l2.1-0.5l1.9-2.5l-0.3-1.8l-2.4-1.3l-0.5-1.6l0.5-1.5l2.3-1 l0.3-1.1l1.9-0.8l0.8,0.5l0.3,2.1l1,0.5l1.5-1l1.3,0.3l0.8,0.5l0.3,0.8h1l2.3-1.3l0.5-1.9l2.8-0.8l1.3-0.3l1-0.8l0.8,0.8h0.8 l0.3-1.1l0.5-1.5l2.5,0.3l0.5-1.1l-0.8-1l0.8-0.5l1.6,0.5l1-1.1l-1.3-1l-0.5-1.6l-0.3-1.3l2.3,0.3l1.9-1.8l1.8-1l-0.3-0.8l0.5-1.9 l4.5-1.6l2.4-1.9l3.6-3.7l2.6-3.2l0.3-3.4l-0.8-0.8l-0.3-2.7l1-3.9l3.1-6l0.8-4.3l-0.3-3.6v-5.7l-5.5,0.5l-6.5,0.8l-4.2,0.8 l-7.9,1.6l-7.6,1l-7.5,1l-2.6,0.3l-6.5,0.9l-13.1,2.4l2.6,16.5l2.1,9.9l-0.5,5.7v8.1l-0.8,9.1l-0.3,3.4l-3.4,3.9l-2.2,7.5 l-1.1,5.5l-1.3,3.1l-0.5,7.4l-4.2,5.5l-0.5,3.9v4.9l-2.9,5.7l-0.5,1.8l-0.5,7.9l-1,3.6l-2.1,2.9l-1,6.2l0.3,2.3l-0.8,7.1 L822.2,177.3z"
              className={`hover:fill-miami-coral hover:stroke-white stroke-2 cursor-pointer ${hoveredState === "new-york" ? "fill-miami-coral" : "fill-miami-turquoise/70"}`}
              onMouseEnter={() => handleMouseEnter("new-york")}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleStateClick("new-york")}
            />
            
            {/* Add more state paths as needed */}
          </g>
        </svg>
      </div>
      
      {/* Hover Preview Panel */}
      {hoveredState && stateData[hoveredState as keyof typeof stateData] && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute top-10 right-10 glass-card p-4 rounded-lg shadow-xl w-64"
        >
          <h3 className="text-xl font-bold mb-2 text-white">{stateData[hoveredState as keyof typeof stateData].name}</h3>
          <div className="mb-3">
            <p className="text-white/90 text-sm mb-2">Ciudades principales:</p>
            <div className="flex flex-wrap gap-1">
              {stateData[hoveredState as keyof typeof stateData].cities.map((city, idx) => (
                <span key={idx} className="bg-white/20 text-white text-xs px-2 py-1 rounded-full">{city}</span>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-3">
            {stateData[hoveredState as keyof typeof stateData].images.map((img, idx) => (
              <img 
                key={idx} 
                src={img} 
                alt={`${stateData[hoveredState as keyof typeof stateData].name} ${idx+1}`}
                className="w-full h-20 object-cover rounded-md"
              />
            ))}
          </div>
          <button 
            className="mt-3 w-full bg-miami-coral hover:bg-white hover:text-miami-coral text-white py-1 px-3 rounded transition-colors text-sm"
            onClick={() => handleStateClick(hoveredState)}
          >
            Explorar {stateData[hoveredState as keyof typeof stateData].name}
          </button>
        </motion.div>
      )}
      
      {/* State Selection Instructions */}
      <div className="absolute bottom-8 left-8 glass-card p-4 rounded-lg shadow-xl max-w-md">
        <h3 className="text-xl font-bold mb-2 text-white">Explora Estados Unidos</h3>
        <p className="text-white/90 text-sm">
          Pasa el cursor sobre cualquier estado para ver información y haz clic para explorar en detalle.
          Descubre las ciudades, atracciones y experiencias únicas que cada estado tiene para ofrecer.
        </p>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-6 left-6">
        <div className="w-12 h-12 rounded-full bg-miami-coral pulse-glow flex items-center justify-center">
          <span className="text-white text-xl font-bold">USA</span>
        </div>
      </div>
    </div>
  );
};

export default USAMap;
