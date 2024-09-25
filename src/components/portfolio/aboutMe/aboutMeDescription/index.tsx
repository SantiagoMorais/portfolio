import { paragraph } from "@styles/index";
import { aboutMeDescription } from "@json/data.json";

export const AboutMeDescription = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {aboutMeDescription.map((item) => (
        <p key={item.id} className={paragraph({ border: "basic", className: "text-small text-textColor" })}>
          {item.text}
        </p>
      ))}
    </div>
  );
};
