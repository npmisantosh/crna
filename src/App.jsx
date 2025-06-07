import React, { useState, useEffect, useRef } from "react";
import TopicList from "./components/TopicList";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

import topicsData from "./data/topicsData";

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

export default function App() {
  // Load completed topics from localStorage
  const [completedTopics, setCompletedTopics] = useState(() => {
    try {
      const stored = localStorage.getItem("completedTopics");
      return stored ? JSON.parse(stored) : [];
    } catch (e) {
      console.error("Failed to load completedTopics", e);
      return [];
    }
  });

  // Active topic state
  const [activeTopicId, setActiveTopicId] = useState(null);
  const [activeTopicContent, setActiveTopicContent] = useState(
    "Select a topic to view its content."
  );

  // Notes per topic
  const [topicNotes, setTopicNotes] = useState(() => {
    try {
      const stored = localStorage.getItem("topicNotes");
      return stored ? JSON.parse(stored) : {};
    } catch (e) {
      console.error("Failed to load topicNotes", e);
      return {};
    }
  });

  const notesChanged = useRef(false);

  // Save completed topics
  useEffect(() => {
    try {
      localStorage.setItem("completedTopics", JSON.stringify(completedTopics));
    } catch (e) {
      console.error("Failed to save completedTopics", e);
    }
  }, [completedTopics]);

  // Save notes only when changed
  useEffect(() => {
    if (notesChanged.current) {
      try {
        localStorage.setItem("topicNotes", JSON.stringify(topicNotes));
        notesChanged.current = false;
      } catch (e) {
        console.error("Failed to save topicNotes", e);
      }
    }
  }, [topicNotes]);

  // Update active topic content when selected
  useEffect(() => {
    if (activeTopicId) {
      const topic = findTopicById(topicsData, activeTopicId);
      setActiveTopicContent(topic?.content || "No content available.");
    } else {
      setActiveTopicContent("Select a topic to view its content.");
    }
  }, [activeTopicId]);

  const handleCompleteTopic = (topicId, isChecked) => {
    if (isChecked) {
      setCompletedTopics((prev) =>
        prev.includes(topicId) ? prev : [...prev, topicId]
      );
    } else {
      setCompletedTopics((prev) => prev.filter((id) => id !== topicId));
    }
  };

  const handleSelectTopic = (topicId) => {
    setActiveTopicId(topicId);
  };

  const handleNotesChange = (e) => {
    const value = e.target.value;
    setTopicNotes((prev) => ({
      ...prev,
      [activeTopicId]: value,
    }));
    notesChanged.current = true;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 font-sans text-gray-900 p-4 flex flex-col lg:flex-row gap-4">
      {/* Left Sidebar - Topics */}
      <div className="w-full lg:w-1/2 p-4 bg-white rounded-lg shadow-lg overflow-y-auto h-[calc(100vh-4rem)]">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Topics</h2>
        <Accordion type="single" collapsible className="w-full">
          {topicsData.map((phase) => (
            <AccordionItem key={phase.id} value={phase.id}>
              <AccordionTrigger className="text-xl font-semibold text-gray-700 py-4 hover:underline">
                {phase.title}
              </AccordionTrigger>
              <AccordionContent>
                <TopicList
                  topics={phase.children}
                  completedTopics={completedTopics}
                  onCompleteTopic={handleCompleteTopic}
                  activeTopicId={activeTopicId}
                  onSelectTopic={handleSelectTopic}
                  depth={1}
                />
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* Right Panel - Content & Notes */}
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
