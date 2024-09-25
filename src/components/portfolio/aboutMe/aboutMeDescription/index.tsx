import { paragraph } from "@styles/index";
import { aboutMeDescription } from "@json/data.json";

export const AboutMeDescription = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {aboutMeDescription.map((item) => (
        <p key={item.id} className={paragraph({ sections: "aboutMe" })}>
          {item.text}
        </p>
      ))}
    </div>
  );
};
