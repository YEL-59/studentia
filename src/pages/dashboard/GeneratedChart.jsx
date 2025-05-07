import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Card } from "@/components/ui/card";

const data = [
  { month: "Jan", words: 4000, images: 0 },
  { month: "Feb", words: 3000, images: 100 },
  { month: "Mar", words: 3000, images: 300 },
  { month: "Apr", words: 5000, images: 500 },
  { month: "May", words: 4000, images: 700 },
  { month: "Jun", words: 1000, images: 1000 },
  { month: "Jul", words: 0, images: 100 },
  { month: "Aug", words: 500, images: 100 },
  { month: "Sep", words: 500, images: 100 },
  { month: "Oct", words: 100, images: 100 },
  { month: "Nov", words: 1000, images: 500 },
  { month: "Dec", words: 1000, images: 500 },
];

export default function GeneratedChart() {
  const [activeLines, setActiveLines] = useState(["words", "images"]);

  const handleToggle = (value) => {
    setActiveLines(value);
  };

  return (
    <Card className="p-4 bg-gradient-to-br from-[#1c1c28] to-[#1e1b33] rounded-xl shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-white text-sm font-medium">
          Word And Image generated
        </h2>
        <ToggleGroup
          type="multiple"
          value={activeLines}
          onValueChange={handleToggle}
          className="space-x-2"
        >
          <ToggleGroupItem value="words">Words</ToggleGroupItem>
          <ToggleGroupItem value="images">Image</ToggleGroupItem>
        </ToggleGroup>
      </div>

      <div className="w-full h-72">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#2a2a3b" />
            <XAxis dataKey="month" stroke="#aaa" />
            <YAxis stroke="#aaa" />
            <Tooltip />
            {activeLines.includes("words") && (
              <Line
                type="monotone"
                dataKey="words"
                stroke="#00c2c2"
                strokeWidth={2}
                dot={false}
              />
            )}
            {activeLines.includes("images") && (
              <Line
                type="monotone"
                dataKey="images"
                stroke="#f5b942"
                strokeWidth={2}
                dot={false}
              />
            )}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
