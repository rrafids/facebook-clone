import StoryCard from "./StoryCard";

const stories = [
  {
    name: "Raihan Rafid",
    src: "https://links.papareact.com/kxka",
    profile: "https://links.papareact.com/kxk",
  },
  {
    name: "Raihan Rafid",
    src: "https://links.papareact.com/kxka",
    profile: "https://links.papareact.com/kxk",
  },
  {
    name: "Raihan Rafid",
    src: "https://links.papareact.com/kxka",
    profile: "https://links.papareact.com/kxk",
  },
  {
    name: "Raihan Rafid",
    src: "https://links.papareact.com/kxka",
    profile: "https://links.papareact.com/kxk",
  },
  {
    name: "Raihan Rafid",
    src: "https://links.papareact.com/kxka",
    profile: "https://links.papareact.com/kxk",
  },
];

function Stories() {
  return (
    <div className="flex justify-center space-x-3 mx-auto">
      {stories.map((story) => (
        <StoryCard
          key={story.src}
          name={story.name}
          src={story.src}
          profile={story.profile}
        />
      ))}
    </div>
  );
}

export default Stories;
