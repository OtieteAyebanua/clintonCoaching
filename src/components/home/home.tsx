import DisplayCard from "../displayCard";
import TeacherCard from "../homePageTeacherList";
import Layout from "../layout";
import Header from "./header";
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
    image: "https://example.com/anne.jpg",
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
    ambassador: true,
    image: "https://example.com/philip.jpg",
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
    image: "https://example.com/alexandra.jpg",
  },
];
const HomePage = () => {
  return (
    <Layout>
      <DisplayCard
        borderRadius="40px"
        background="linear-gradient(to bottom, #ffffff 10%, #ffcaca 90%)"
      >
        <Header />
      </DisplayCard>
      <DisplayCard>
        <TeacherCard />
      </DisplayCard>
    </Layout>
  );
};

export default HomePage;
