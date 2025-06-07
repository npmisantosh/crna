import React, { useState, useEffect, useRef } from "react";
import TopicList from "./components/TopicList";
import { Button } from "@/components/ui/button";
import topicsData from "./data/topicsData";
import { Textarea } from "@/components/ui/textarea";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

// Helper function to find a topic by ID in the nested structure
const findTopicById = (topics, id) => {
  for (const topic of topics) {
    if (topic.id === id) {
      return topic;
    }
    if (topic.children) {
      const found = findTopicById(topic.children, id);
      if (found) {
        return found;
      }
    }
  }
  return null;
};

// Helper function to find the parent ID of a topic
const findParentId = (topics, targetId, parentId = null) => {
  for (const topic of topics) {
    if (topic.id === targetId) {
      return parentId;
    }
    if (topic.children) {
      const foundParentId = findParentId(topic.children, targetId, topic.id);
      if (foundParentId) {
        return foundParentId;
      }
    }
  }
  return null;
};
export default function App() {
  const [completedTopics, setCompletedTopics] = useState(() => {
    try {
      const storedCompleted = localStorage.getItem("completedTopics");
      return storedCompleted ? JSON.parse(storedCompleted) : [];
    } catch (error) {
      console.error("Failed to parse completedTopics:", error);
      return [];
    }
  });

  const [activeTopicId, setActiveTopicId] = useState(null);
  const [activeTopicContent, setActiveTopicContent] = useState(
    "Select a topic to view its content."
  );
  const [topicNotes, setTopicNotes] = useState(() => {
    try {
      const storedNotes = localStorage.getItem("topicNotes");
      return storedNotes ? JSON.parse(storedNotes) : {};
    } catch (error) {
      console.error("Failed to parse topicNotes:", error);
      return {};
    }
  });

  const notesChanged = useRef(false); // Track if notes have changed

  useEffect(() => {
    try {
      localStorage.setItem("completedTopics", JSON.stringify(completedTopics));
    } catch (error) {
      console.error("Failed to save completedTopics to localStorage:", error);
    }
  }, [completedTopics]);

  useEffect(() => {
    if (notesChanged.current) {
      try {
        localStorage.setItem("topicNotes", JSON.stringify(topicNotes));
      } catch (error) {
        console.error("Failed to save topicNotes to localStorage:", error);
      }
    }
    notesChanged.current = false; // Reset the flag
  }, [topicNotes]);

  useEffect(() => {
    if (activeTopicId) {
      const topic = findTopicById(topicsData, activeTopicId);
      setActiveTopicContent(
        topic?.content || "No content available for this topic."
      );
      setTopicNotes((prevNotes) => prevNotes[activeTopicId] || "");
    } else {
      setActiveTopicContent("Select a topic to view its content.");
      // setTopicNotes({});  // Consider if you want to clear notes when no topic is selected
    }
  }, [activeTopicId]);

  const handleCompleteTopic = (topicId) => {
    if (!completedTopics.includes(topicId)) {
      setCompletedTopics((prev) => [...prev, topicId]);
    }
  };

  const handleSelectTopic = (topicId) => {
    setActiveTopicId(topicId);
  };

  const handleNotesChange = (event) => {
    const newNotes = event.target.value;
    setTopicNotes((prevNotes) => ({
      ...prevNotes,
      [activeTopicId]: newNotes,
    }));
    notesChanged.current = true; // Set the flag
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 font-sans text-gray-900 p-4 flex flex-col lg:flex-row gap-4">
      {/* Topic List Section */}
      <div className="w-full lg:w-1/2 p-4 bg-white rounded-lg shadow-lg overflow-y-auto h-[calc(100vh-4rem)]">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Topics</h2>
        <Accordion type="single" collapsible className="w-full">
          {topicsData.map((phase) => (
            <AccordionItem
              key={phase.id}
              value={phase.id}
              className="border-b last:border-b-0"
            >
              <AccordionTrigger className="text-xl font-semibold text-gray-700 py-4 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                {phase.title}
              </AccordionTrigger>
              <AccordionContent className="pb-4">
                <TopicList
                  topics={phase.children.map((child) => ({
                    ...child,
                    depth: 0,
                  }))}
                  completedTopics={completedTopics}
                  onCompleteTopic={handleCompleteTopic}
                  activeTopicId={activeTopicId}
                  onSelectTopic={handleSelectTopic}
                  depth={1}
                  findParentId={findParentId}
                  topicsData={topicsData}
                />
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* Topic Detail Section */}
      <div className="w-full lg:w-1/2 p-6 bg-white rounded-lg shadow-lg flex flex-col h-[calc(100vh-4rem)] border border-gray-200">
        <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">
          {activeTopicId
            ? findTopicById(topicsData, activeTopicId)?.title
            : "Topic Details"}
        </h2>
        <div className="flex-grow overflow-y-auto text-gray-700 leading-relaxed">
          {activeTopicContent}
        </div>
        <div className="mt-6 border-t pt-4 border-gray-200 flex flex-col gap-4">
          <div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Notes</h3>
            {activeTopicId ? (
              <Textarea
                value={topicNotes[activeTopicId] || ""}
                onChange={handleNotesChange}
                placeholder="Add your notes here..."
                className="w-full h-32 rounded-md border border-gray-300 focus-visible:ring-2 focus-visible:ring-ring shadow-sm"
              />
            ) : (
              <p className="text-gray-500">Select a topic to add notes.</p>
            )}
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">
              Future Features:
            </h3>
            <div className="flex flex-wrap gap-3">
              <Button variant="outline" disabled>
                Quiz Yourself
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
