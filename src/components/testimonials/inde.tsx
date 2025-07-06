import { FaRegStar, FaStar } from "react-icons/fa";
import "./style.css";
export const testimonials = [
  {
    name: "Emma Ellzabeth",
    role: "Assistant Teacher",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    stars: 4,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore consequatur eius molestias expedita earum esse.",
  },
  {
    name: "David Johnson",
    role: "Senior Instructor",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    stars: 5,
    text: "Absolutely fantastic mentor! Highly recommended for anyone serious about learning.",
  },
  {
    name: "Lisa Brown",
    role: "Math Tutor",
    image: "https://randomuser.me/api/portraits/women/50.jpg",
    stars: 3,
    text: "Good teacher but the pace was a bit fast for me.",
  },
  {
    name: "Lisa Brown",
    role: "Math Tutor",
    image: "https://randomuser.me/api/portraits/women/50.jpg",
    stars: 3,
    text: "Good teacher but the pace was a bit fast for me.",
  },
  {
    name: "Lisa Brown",
    role: "Math Tutor",
    image: "https://randomuser.me/api/portraits/women/50.jpg",
    stars: 3,
    text: "Good teacher but the pace was a bit fast for me.",
  },
];
const Testimonies = () => {
  return (
    <div style={{marginTop:"5%",marginBottom:"3%"}}>
      <h3 className="VofC">Voices of Our Community</h3>
      <div className="testimonial-container">
        {testimonials.map((t, index) => (
          <div key={index} className="testimonial-card">
            <div className="stars">
              {[...Array(5)].map((_, i) =>
                i < t.stars ? <FaStar key={i} /> : <FaRegStar key={i} />
              )}
            </div>
            <p className="testimonial-text">{t.text}</p>

            <div className="author">
              <img src={t.image} alt={t.name} className="author-img" />
              <div className="author-info">
                <div className="author-name">{t.name}</div>
                <div className="author-title">{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="testimonial-container">
        {testimonials.map((t, index) => (
          <div key={index} className="testimonial-card2">
            <div className="stars">
              {[...Array(5)].map((_, i) =>
                i < t.stars ? <FaStar key={i} /> : <FaRegStar key={i} />
              )}
            </div>
            <p className="testimonial-text">{t.text}</p>

            <div className="author">
              <img src={t.image} alt={t.name} className="author-img" />
              <div className="author-info">
                <div className="author-name">{t.name}</div>
                <div className="author-title">{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonies;
