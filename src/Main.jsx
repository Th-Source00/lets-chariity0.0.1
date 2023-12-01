import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CharityHome from "./Containers/charity/CharityHome.jsx";
import Gallery from "./Containers/pages/Gallery/Gallery.jsx";
import Shop from "./Containers/pages/Shop/Shop.jsx";
import Contact from "./Containers/pages/Contact/Contact.jsx";
import MissonVision from "./Containers/pages/About us/Mission&Vison/MissonVision.jsx";
import Rescue from "./Containers/pages/What we do/Rescue/Rescue.jsx";
import Recovery from "./Containers/pages/What we do/recovery/Recovery.jsx";
import Community from "./Containers/pages/Our Impact/Community Empowerment/Community.jsx";
import Preserve from "./Containers/pages/What we do/preservation/Preserve.jsx";
import Advocate from "./Containers/pages/What we do/Advocacy/Advocate.jsx";
import BecomeVolunteer from "./Containers/pages/What we do/BecomeAVolunteer/BecomeVolunteer.jsx";
import Blog from "./Containers/pages/Blog/Blog.jsx";
import Events from "./Containers/pages/Join Us/Events/Events.jsx";
import FundRaise from "./Containers/pages/Join Us/FundRaising/FundRaise.jsx";
import Sponsor from "./Containers/pages/Join Us/SponsorAChild/Sponsor.jsx";
import Internship from "./Containers/pages/Join Us/VirtalInternship/Internship.jsx";
import Volunteer from "./Containers/pages/Join Us/Volunteer/Volunteer.jsx";
import EduEne from "./Containers/pages/Our Impact/Educ&Energy/EduEne.jsx";
import Gender from "./Containers/pages/Our Impact/Gender Equality/Gender.jsx";
import HealthNutrition from "./Containers/pages/Our Impact/Health&Nutrition/HealthNutrition.jsx";
import Welfare from "./Containers/pages/Our Impact/Wellfare Conversation/Welfare.jsx";
import OurResources from "./Containers/pages/About us/OurResources/OurResources.jsx";
import OurTeam from "./Containers/pages/About us/OurTeam/OurTeam.jsx";
import WhoWeAre from "./Containers/pages/About us/Who We are/WhoWeAre.jsx";

export default function Main() {
  // 


  return (
    <div className="App">

      <div>
        <Router>
          <Routes>
            <Route path="*" element={<CharityHome />} />
            <Route path="/" element={<CharityHome />} />
            <Route path="/home" element={<CharityHome />} />

            {/* ABOUT US ROUTES */}
            <Route path="/Misson & Vision" element={<MissonVision />} />
            <Route path="/Our Resources" element={<OurResources />} />
            <Route path="/Our Team" element={<OurTeam />} />
            <Route path="/Who We Are" element={<WhoWeAre />} />
          

            {/* JOIN US ROUTES */}
            <Route path="/Events" element={<Events />} />
            <Route path="/FundRaising" element={<FundRaise />} />
            <Route path="/Sponsor a child" element={<Sponsor />} />
            <Route path="/Virtual Intenship" element={<Internship />} />
            <Route path="/Volunteer" element={<Volunteer />} />

            {/* OUR IMPACT ROUTES */}
            <Route path="/Community Empowerment" element={<Community />} />
            <Route path="/Education & Energy" element={<EduEne />} />
            <Route path="/Gender Equality" element={<Gender />} />
            <Route path="/Health & Nutrition" element={<HealthNutrition />} />
            <Route path="/Welfare Conversations" element={<Welfare />} />


            {/* WHAT WE DO ROUTES  */}
            <Route path="/Advocacy" element={<Advocate />} />
            <Route path="/Become A Volunteer" element={<BecomeVolunteer />} />
            <Route path="/Preserve" element={<Preserve />} />
            <Route path="/Rescue" element={<Rescue />} />
            <Route path="/Recovery" element={<Recovery />} />


            {/* Shop Routes */}
            <Route path="/Shop" element={<Shop />} />

            {/* Blog Routes */}
            <Route path="/Blog" element={<Blog />} />

            {/* Gallery Routes */}
            <Route path="/Gallery" element={<Gallery />} />

            {/* Contact Routes */}
            <Route path="/Contact Us" element={<Contact />} />

          </Routes>
        </Router>

      </div>
      {/* }  */}
    </div>
  );
};
