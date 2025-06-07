import React, { useState } from "react";

const TopicList = ({
  topics,
  completedTopics,
  onCompleteTopic,
  activeTopicId,
  onSelectTopic,
  depth = 0,
}) => {
  const [expandedTopics, setExpandedTopics] = useState({});

  const toggleTopic = (topicId) => {
    setExpandedTopics((prev) => ({
      ...prev,
      [topicId]: !prev[topicId],
    }));
  };

  return (
    <div>
      {topics.map((topic) => (
        <div key={topic.id} className="mb-1">
          <div
            className="flex items-center justify-between rounded-md cursor-pointer hover:bg-gray-100 transition-colors duration-200"
            style={{ paddingLeft: `${depth * 1.5}rem`, padding: "0.75rem" }}
            onClick={() =>
              topic.children ? toggleTopic(topic.id) : onSelectTopic(topic.id)
            }
          >
            <h4
              className={`font-semibold text-sm sm:text-base ${
                topic.isUnlocked !== false ? "text-gray-800" : "text-gray-400"
              }`}
            >
              {topic.title}
            </h4>
            <div className="flex items-center">
              {topic.children && (
                <span className="text-gray-600 font-semibold text-sm mr-2">
                  {expandedTopics[topic.id] ? "-" : "+"}
                </span>
              )}
              {!topic.children && (
                <button
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent parent click
                    onCompleteTopic(
                      topic.id,
                      !completedTopics.includes(topic.id)
                    );
                  }}
                  className={`px-3 py-1 text-sm font-medium rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 ${
                    completedTopics.includes(topic.id)
                      ? "bg-green-100 text-green-700 hover:bg-green-200"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {completedTopics.includes(topic.id)
                    ? "✅ Completed"
                    : "🔘 Mark Complete"}
                </button>
              )}
            </div>
          </div>

          {/* Recursively render children if expanded */}
          {topic.children && expandedTopics[topic.id] && (
            <div className="ml-4">
              <TopicList
                topics={topic.children}
                completedTopics={completedTopics}
                onCompleteTopic={onCompleteTopic}
                activeTopicId={activeTopicId}
                onSelectTopic={onSelectTopic}
                depth={depth + 1}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default TopicList;
