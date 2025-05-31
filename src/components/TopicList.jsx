import React, { useState } from "react";
import { Button } from "@/components/ui/button";

const TopicList = ({
  topics,
  completedTopics,
  onCompleteTopic,
  activeTopicId,
  onSelectTopic,
  depth = 0,
  findParentId,
  topicsData, // Accept topicsData as a prop
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
          <div key={topic.id} className="mb-2">
            <div
              className="flex items-center justify-between bg-blue-50 p-2 rounded-md cursor-pointer hover:bg-blue-100"
              style={{ paddingLeft: `${depth * 1.5}rem` }}
              onClick={() =>
                topic.children ? toggleTopic(topic.id) : onSelectTopic(topic.id)
              }
            >
              <h4
                className={`font-semibold text-lg ${
                  !findParentId(topicsData, topic.id) ||
                  completedTopics.includes(findParentId(topicsData, topic.id))
                    ? "text-gray-800"
                    : "text-gray-500"
                }`}
              >
                {topic.title}
              </h4>
              {topic.children && (
                <span className="text-gray-600 font-semibold">
                  {expandedTopics[topic.id] ? "-" : "+"}
                </span>
              )}
              {!topic.children && (
                <div className="flex items-center">
                  {!(
                    !findParentId(topicsData, topic.id) ||
                    completedTopics.includes(findParentId(topicsData, topic.id))
                  ) && (
                    <span className="ml-2 text-sm text-gray-600">(Locked)</span>
                  )}
                  {(!findParentId(topicsData, topic.id) ||
                    completedTopics.includes(
                      findParentId(topicsData, topic.id)
                    )) &&
                    !completedTopics.includes(topic.id) && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onCompleteTopic(topic.id);
                        }}
                        className="px-2 py-1 bg-green-500 text-white rounded-md text-sm hover:bg-green-600 transition-colors duration-200 ml-2"
                      >
                        Complete
                      </button>
                    )}
                  {completedTopics.includes(topic.id) && (
                    <span className="ml-2 text-sm text-green-600">
                      (Completed)
                    </span>
                  )}
                </div>
              )}
            </div>
            {topic.children && expandedTopics[topic.id] && (
              <div className="ml-4">
                {/* Render the children directly here */}
                {topic.children.map((child) => (
                  <div
                    key={child.id}
                    className="flex items-center justify-between bg-blue-50 p-2 rounded-md cursor-pointer hover:bg-blue-100 mb-2"
                    style={{ paddingLeft: `${(depth + 1) * 1.5}rem` }}
                    onClick={() =>
                      child.children
                        ? toggleTopic(child.id)
                        : onSelectTopic(child.id)
                    }
                  >
                    <h4
                      className={`font-semibold text-lg ${
                        !findParentId(topicsData, child.id) ||
                        completedTopics.includes(
                          findParentId(topicsData, child.id)
                        )
                          ? "text-gray-800"
                          : "text-gray-500"
                      }`}
                    >
                      {child.title}
                    </h4>
                    {child.children && (
                      <span className="text-gray-600 font-semibold">
                        {expandedTopics[child.id] ? "-" : "+"}
                      </span>
                    )}
                    {!child.children && (
                      <div className="flex items-center">
                        {!(
                          !findParentId(topicsData, child.id) ||
                          completedTopics.includes(
                            findParentId(topicsData, child.id)
                          )
                        ) && (
                          <span className="ml-2 text-sm text-gray-600">
                            (Locked)
                          </span>
                        )}
                        {(!findParentId(topicsData, child.id) ||
                          completedTopics.includes(
                            findParentId(topicsData, child.id)
                          )) &&
                          !completedTopics.includes(child.id) && (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                onCompleteTopic(child.id);
                              }}
                              className="px-2 py-1 bg-green-500 text-white rounded-md text-sm hover:bg-green-600 transition-colors duration-200 ml-2"
                            >
                              Complete
                            </button>
                          )}
                        {completedTopics.includes(child.id) && (
                          <span className="ml-2 text-sm text-green-600">
                            (Completed)
                          </span>
                        )}
                      </div>
                    )}
                    {child.children && expandedTopics[child.id] && (
                      <div className="ml-4">
                        {/* You would need to handle deeper nesting here if required */}
                        {child.children.map((grandchild) => (
                          <div
                            key={grandchild.id}
                            className="flex items-center justify-between bg-blue-50 p-2 rounded-md cursor-pointer hover:bg-blue-100 mb-2"
                            style={{ paddingLeft: `${(depth + 2) * 1.5}rem` }}
                            onClick={() => onSelectTopic(grandchild.id)}
                          >
                            <h4
                              className={`font-semibold text-lg ${
                                !findParentId(topicsData, grandchild.id) ||
                                completedTopics.includes(
                                  findParentId(topicsData, grandchild.id)
                                )
                                  ? "text-gray-800"
                                  : "text-gray-500"
                              }`}
                            >
                              {grandchild.title}
                            </h4>
                            <div className="flex items-center">
                              {!(
                                !findParentId(topicsData, grandchild.id) ||
                                completedTopics.includes(
                                  findParentId(topicsData, grandchild.id)
                                )
                              ) && (
                                <span className="ml-2 text-sm text-gray-600">
                                  (Locked)
                                </span>
                              )}
                              {(!findParentId(topicsData, grandchild.id) ||
                                completedTopics.includes(
                                  findParentId(topicsData, grandchild.id)
                                )) &&
                                !completedTopics.includes(grandchild.id) && (
                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      onCompleteTopic(grandchild.id);
                                    }}
                                    className="px-2 py-1 bg-green-500 text-white rounded-md text-sm hover:bg-green-600 transition-colors duration-200 ml-2"
                                  >
                                    Complete
                                  </button>
                                )}
                              {completedTopics.includes(grandchild.id) && (
                                <span className="ml-2 text-sm text-green-600">
                                  (Completed)
                                </span>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
    </div>
  );
};

export default TopicList;
