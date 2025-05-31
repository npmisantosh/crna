import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

const TopicList = ({
  topics,
  completedTopics,
  onCompleteTopic,
  activeTopicId,
  onSelectTopic,
  depth = 0,
  findParentId,
  topicsData,
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
      {topics &&
        topics.map((topic) => (
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
                  topic.isUnlocked ? "text-gray-800" : "text-gray-500"
                }`}
              >
                {topic.title}
              </h4>
              <div className="flex items-center">
                {topic.children && (
                  <span className="text-gray-600 font-semibold text-sm">
                    {expandedTopics[topic.id] ? "-" : "+"}
                  </span>
                )}
                {!topic.children && (
                  <>
                    <Checkbox
                      id={`topic-${topic.id}`}
                      checked={completedTopics.includes(topic.id)}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          onCompleteTopic(topic.id);
                        } else {
                          // Implement logic to un-complete if needed
                        }
                      }}
                      disabled={!topic.isUnlocked}
                      className="mr-2"
                    />
                    <label
                      htmlFor={`topic-${topic.id}`}
                      className={`text-sm text-gray-600 cursor-pointer ${
                        topic.isUnlocked ? "" : "opacity-50"
                      }`}
                    >
                      Complete
                    </label>
                  </>
                )}
              </div>
            </div>
            {topic.children && expandedTopics[topic.id] && (
              <div className="ml-4">
                <TopicList // Recursive call
                  topics={topic.children} // Pass children, not [child]
                  completedTopics={completedTopics}
                  onCompleteTopic={onCompleteTopic}
                  activeTopicId={activeTopicId}
                  onSelectTopic={onSelectTopic}
                  depth={depth + 1}
                  findParentId={findParentId}
                  topicsData={topicsData}
                />
              </div>
            )}
          </div>
        ))}
    </div>
  );
};

export default TopicList;
