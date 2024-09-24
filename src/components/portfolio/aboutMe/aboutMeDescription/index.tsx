import { paragraph } from "@styles/index";
import { aboutMeDescription } from "@json/data.json";

export const AboutMeDescription = () => {
  return (
    <div className="flex flex-2 flex-col gap-5 md:flex-row md:flex-wrap">
      {aboutMeDescription.map((item) => (
        <p key={item.id} className={paragraph({ border: "basic", className: "text-small text-textColor" })}>
          {item.text}
        </p>
      ))}
    </div>
  );
};
