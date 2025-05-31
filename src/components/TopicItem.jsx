import React from "react";
import { Button } from "@/components/ui/button";

const TopicItem = ({
  topic,
  isUnlocked,
  onCompleteTopic,
  isActive,
  onSelectTopic,
  depth = 0,
}) => {
  const isCompleted =
    isUnlocked && localStorage.getItem("completedTopics")?.includes(topic.id);
  const paddingLeft = `${depth * 1.5}rem`;

  return (
    <div
      className={`
        mb-2 p-3 rounded-md cursor-pointer transition-all duration-200
        ${
          isUnlocked
            ? "bg-blue-50 hover:bg-blue-100 border border-blue-200 shadow-sm"
            : "bg-gray-100 text-gray-500 border border-gray-300 cursor-not-allowed locked"
        }
        ${isActive ? "border-blue-500 border-2" : ""}
        ${isCompleted ? "opacity-70 completed" : ""}
      `}
      style={{ paddingLeft }}
      onClick={() => isUnlocked && onSelectTopic(topic.id)}
    >
      <div className="flex items-center justify-between">
        <h4
          className={`font-semibold text-lg ${
            isUnlocked ? "text-gray-800" : "text-gray-500"
          }`}
        >
          {topic.title}
        </h4>
        <div className="flex items-center">
          {!isUnlocked && (
            <span className="ml-2 text-sm text-gray-600 locked-text">
              (Locked)
            </span>
          )}
          {isCompleted && isUnlocked && (
            <span className="ml-2 text-sm text-green-600 completed-text">
              (Completed)
            </span>
          )}
          {isUnlocked && !isCompleted && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onCompleteTopic(topic.id);
              }}
              className="px-3 py-1.5 bg-green-500 text-white rounded-md text-sm hover:bg-green-600 transition-colors duration-200 ml-2"
            >
              Complete
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopicItem;
