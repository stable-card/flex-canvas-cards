import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PerkBuilder } from "@/components/PerkBuilder";

export const PerkWizard = () => {
  const [step, setStep] = useState<1 | 2>(1);
  const [selected, setSelected] = useState<string[]>([]);
  const [input, setInput] = useState("I want extra rewards for coffee shops and tech purchases");

  if (step === 2) {
    return (
      <div className="container mx-auto px-6 py-24">
        <div className="mb-8 text-sm text-muted-foreground cursor-pointer" onClick={() => setStep(1)}>
          ← Back
        </div>
        <PerkBuilder initialCategories={selected} />
      </div>
    );
  }

  // Step 1 simple placeholder AI suggestion list
  const suggestions = ["Dining", "Tech", "Travel", "Coffee"];

  const toggle = (cat: string) => {
    setSelected((prev) => (prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]));
  };

  return (
    <div className="container mx-auto px-6 py-24">
      <h2 className="text-4xl font-bold mb-6 text-center">1. Choose Your Categories</h2>
      <Card className="p-8 card-premium space-y-6 max-w-xl mx-auto">
        <div className="space-y-4">
          <label className="text-sm font-medium">Describe your ideal rewards:</label>
          <textarea value={input} onChange={(e) => setInput(e.target.value)} className="w-full h-24 border rounded-md p-2 text-sm" />
        </div>
        <div className="space-y-2">
          <div className="text-sm font-medium mb-2">AI Suggestions</div>
          {suggestions.map((s) => (
            <div key={s} className="flex items-center gap-2">
              <input type="checkbox" checked={selected.includes(s)} onChange={() => toggle(s)} id={s} />
              <label htmlFor={s} className="text-sm">{s}</label>
            </div>
          ))}
        </div>
        <Button disabled={selected.length === 0} className="w-full btn-glow" onClick={() => setStep(2)}>
          Next
        </Button>
      </Card>
    </div>
  );
};
