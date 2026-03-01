"use client"; // Needed for state and interactivity

import { useState } from "react";

// Define the data for your features
const featureData = [
  {
    id: 1,
    title: "Accelerate development with AI-powered assistance",
    description:
      "Switch between GPT, Claude, and Gemini from a unified interface with seamless provider switching.",
    testimonial: {
      quote: "Looks really good. Did you design in code or Figma first?",
      author: "Shadcn",
      title: "Creator of Shadcn UI",
    },
  },
  // Add more features here based on the original design
  {
    id: 2,
    title: "Another expandable feature title",
    description:
      "Short description for the collapsed state. Click to expand and see more.",
    // Optionally include a testimonial or other content for the expanded state
  },
];

export function FeaturesFive() {
  const [expandedId, setExpandedId] = useState<number | null>(1); // Start with first expanded

  return (
    <section className="py-24 px-4 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="mb-16">
        <span className="text-sm font-mono text-gray-500">[ 0.1 ]</span>
        <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">Features</h2>
        <p className="text-xl text-gray-600 max-w-2xl">
          Build faster with that adapt to your workflow, and let handle the
          rest.
        </p>
      </div>

      {/* Expandable Features Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {featureData.map((feature) => (
          <FeatureCard
            key={feature.id}
            feature={feature}
            isExpanded={expandedId === feature.id}
            onToggle={() =>
              setExpandedId(expandedId === feature.id ? null : feature.id)
            }
          />
        ))}
      </div>
    </section>
  );
}
interface FeatureCardProps {
  feature: {
    id: number;
    title: string;
    description: string;
    testimonial?: {
      quote: string;
      author: string;
      title: string;
    };
  };
  isExpanded: boolean;
  onToggle: () => void;
}

export default function FeatureCard({
  feature,
  isExpanded,
  onToggle,
}: FeatureCardProps) {
  return (
    <div
      onClick={onToggle}
      className={`cursor-pointer rounded-2xl border p-6 transition-all duration-300 ease-in-out ${
        isExpanded
          ? "col-span-2 row-span-2 bg-gray-50 shadow-lg scale-105" // Example expanded styles
          : "bg-white hover:shadow-md"
      }`}>
      {/* Card Content - adapt based on expanded state */}
      <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
      <p className="text-gray-600 text-sm">{feature.description}</p>

      {/* Expanded Content */}
      {isExpanded && feature.testimonial && (
        <div className="mt-6 pt-6 border-t">
          <p className="italic text-gray-700">"{feature.testimonial.quote}"</p>
          <p className="mt-2 font-medium">{feature.testimonial.author}</p>
          <p className="text-sm text-gray-500">{feature.testimonial.title}</p>
        </div>
      )}

      {/* Visual indicator for expand/collapse */}
      <div className="mt-4 text-xs font-medium text-blue-600">
        {isExpanded ? "Show less" : "Learn more"}
      </div>
    </div>
  );
}
