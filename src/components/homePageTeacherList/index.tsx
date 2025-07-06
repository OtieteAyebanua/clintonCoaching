import { FaMagic, FaRegStar, FaStar } from "react-icons/fa";
import "./style.css";
import { Grid } from "@mui/material";
import Testimonies from "../testimonials/inde";
export const teachers = [
  {
    name: "Anne",
    location: "Hamburg (face-to-face & online)",
    subject: "English",
    description:
      "Graduated English Art Mentor: The Arty Experience! Exclusive 1:1, Known from...",
    price: "100€/hour",
    rating: 5,
    reviews: 14,
    ambassador: true,
    image:
      "https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg",
  },
  {
    name: "Philip",
    location: "Erding (face-to-face & online)",
    subject: "Mathematics",
    description:
      "Mathematics tutoring / coaching at all levels from an experienced...",
    price: "60€/hour",
    freeHour: true,
    rating: 5,
    reviews: 33,
    ambassador: false,
    image:
      "https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg",
  },
  {
    name: "Alexandra",
    location: "Frankfurt am Main (Online)",
    subject: "Spanish",
    description:
      "Online lessons with a native Spanish speaker who graduated in Italy an...",
    price: "45€/hour",
    rating: 5,
    reviews: 62,
    ambassador: true,
    image:
      "https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg",
  },
  {
    name: "Alexandra",
    location: "Frankfurt am Main (Online)",
    subject: "Spanish",
    description:
      "Online lessons with a native Spanish speaker who graduated in Italy an...",
    price: "45€/hour",
    rating: 5,
    reviews: 62,
    ambassador: true,
    image:
      "https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg",
  },
  {
    name: "Alexandra",
    location: "Frankfurt am Main (Online)",
    subject: "Spanish",
    description:
      "Online lessons with a native Spanish speaker who graduated in Italy an...",
    price: "45€/hour",
    rating: 5,
    reviews: 62,
    ambassador: true,
    image:
      "https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg",
  },
  {
    name: "Alexandra",
    location: "Frankfurt am Main (Online)",
    subject: "Spanish",
    description:
      "Online lessons with a native Spanish speaker who graduated in Italy an...",
    price: "45€/hour",
    rating: 5,
    reviews: 62,
    ambassador: true,
    image:
      "https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg",
  },
];
const TeacherCard = () => {
  return (
    <div className="TMainCon" style={{ width: "67%", margin: "auto" }}>
      <p className="tutorListHeader">
        Get to know our expert team
        <FaStar style={{ width: 12, paddingLeft: 2, color: "#ff6363" }} />
        <FaStar style={{ width: 12, paddingLeft: 2, color: "#ff6363" }} />
        <FaStar style={{ width: 12, paddingLeft: 2, color: "#ff6363" }} />
        <FaStar style={{ width: 12, paddingLeft: 2, color: "#ff6363" }} />
        <FaStar style={{ width: 12, paddingLeft: 2, color: "#ff6363" }} />
      </p>
      <Grid container spacing={2} className="tutorCardContainer">
        {teachers.map((item) => (
          <Grid className="tutorCard">
            <div className="imgContainer">
              <img src={item.image} />
            </div>
            <div className="teacher-info">
              <div className="info-top">
                <span className="rating">
                  <FaStar className="star-icon" />5{" "}
                  <span className="reviews">(14 reviews)</span>
                </span>
                {item.ambassador ? (
                  <span className="ambassador">
                    <FaMagic className="ambassador-icon" />
                    Ambassador
                  </span>
                ) : null}
              </div>

              <div className="info-description">
                <strong style={{ fontWeight: 600 }}>English </strong>
                Graduated English Art Mentor: The Arty Experience! Exclusive
                1:1, Known from...
              </div>

              <div className="info-price">100€/hour</div>
            </div>
          </Grid>
        ))}
      </Grid>
      <Testimonies />
      <div className="cta-wrapper">
        <img
          src="https://c.superprof.com/style/images/home/v4/become-teacher.webp"
          alt="Teach drums"
          className="cta-image"
        />

        <div className="cta-card">
          <h2>
            Become an english teacher yourself !
          </h2>
          <p>
            Share your knowledge, live your passion and <br />
            become self-employed
          </p>
          <button className="cta-button">
            Learn more{" "}
            <div className="switching-star">
              <FaRegStar className="LS1" style={{ marginLeft: "8px",position:"absolute" }} />
               <FaRegStar className="LS2" style={{ marginLeft: "8px",position:"absolute" }} />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
export default TeacherCard;
