import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";

export const TargetingDemo = () => {
  const [radius, setRadius] = useState(3);
  const [hour, setHour] = useState(18);
  const [segment, setSegment] = useState("Students");

  return (
    <Card className="p-8 card-premium space-y-6">
      <h3 className="text-2xl font-bold mb-4 text-center">Targeting Rule Builder (Demo)</h3>
      <div className="grid md:grid-cols-3 gap-6">
        {/* Geo radius */}
        <div className="space-y-2">
          <div className="text-sm font-medium">Geo Radius (km)</div>
          <Slider min={1} max={10} step={1} defaultValue={[radius]} onValueChange={(v) => setRadius(v[0])} />
          <div className="text-xs text-muted-foreground">Current: {radius} km</div>
        </div>
        {/* Time */}
        <div className="space-y-2">
          <div className="text-sm font-medium">Active Hour (24h)</div>
          <Slider min={0} max={23} step={1} defaultValue={[hour]} onValueChange={(v) => setHour(v[0])} />
          <div className="text-xs text-muted-foreground">Current: {hour}:00</div>
        </div>
        {/* Segment */}
        <div className="space-y-2">
          <div className="text-sm font-medium">Customer Segment</div>
          <select value={segment} onChange={(e) => setSegment(e.target.value)} className="border rounded-md px-3 py-2 w-full text-sm">
            {["Students", "Office Workers", "Travelers", "All"].map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="text-center text-sm mt-4">
        If a {segment.toLowerCase()} customer pays within {radius} km at {hour}:00, a bonus will apply.
      </div>
    </Card>
  );
};
