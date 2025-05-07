import React from "react";

interface AgentBubbleProps {
  name: string;
  role: string;
  image: string;
  style?: React.CSSProperties;
  color?: string; // Tailwind class for background color
}

const AgentBubble: React.FC<AgentBubbleProps> = ({
  name,
  role,
  image,
  style,
  color = "bg-gray-100",
}) => {
  return (
    <div
      className={`absolute flex items-center gap-1 rounded-2xl px-4 py-2 w-52 ${color}`} // Changed gap-3 to gap-1
      style={style}
    >
      <img
        src={image}
        alt={name}
        className="w-10 h-10 rounded-full object-cover border-2 border-white"
      />
      <div>
        <div className="text-[10.25px] font-plus-jakarta font-medium text-gray-900 leading-[15.94px] mb-0.5">
          {name}
        </div>
        <div className="text-[11.38px] font-plus-jakarta font-extrabold text-gray-900 leading-[17.08px]">
          {role}
        </div>
      </div>
    </div>
  );
};

export default AgentBubble;
