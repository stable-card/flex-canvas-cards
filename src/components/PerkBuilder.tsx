import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import * as Dialog from "@radix-ui/react-dialog";
import { Trash2 } from "lucide-react";
import * as AlertDialog from "@radix-ui/react-alert-dialog";

// dnd-kit
import {
  DndContext,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  useSortable,
  arrayMove,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { useState, useMemo } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

type RewardType = "discount" | "points" | "stable";

const basePerks = [
  { category: "Dining", reward: 5, color: "#ef4444", rewardType: "points" as RewardType },
  { category: "Tech", reward: 3, color: "#3b82f6", rewardType: "points" as RewardType },
  { category: "Travel", reward: 4, color: "#22c55e", rewardType: "points" as RewardType },
];

export const PerkBuilder = () => {
  const [inputValue, setInputValue] = useState(
    "I want extra rewards for coffee shops and tech purchases"
  );
  const [perks, setPerks] = useState(() => [
    ...basePerks,
    { category: "Coffee", reward: 5, color: "#eab308" },
  ]);

  const coffeeReward = useMemo(() => {
    const coffee = perks.find((p) => p.category === "Coffee");
    return coffee ? coffee.reward : 0;
  }, [perks]);

  const randomColor = () =>
    `hsl(${Math.floor(Math.random() * 360)} 80% 60%)`;

  const totalReward = perks.reduce((sum, p) => sum + p.reward, 0);

  const totals = perks.reduce(
    (acc, p) => {
      acc[p.rewardType] += p.reward;
      return acc;
    },
    { discount: 0, points: 0, stable: 0 } as Record<RewardType, number>
  );

  const MAX_TOTAL = 100;

  const updateReward = (cat: string, val: number) => {
    setPerks((prev) => {
      // replace target reward first
      const next = prev.map((p) =>
        p.category === cat ? { ...p, reward: val } : p
      );

      const total = next.reduce((s, p) => s + p.reward, 0);
      if (total <= MAX_TOTAL) return next;

      // exceed -> scale other categories proportionally
      const excess = total - MAX_TOTAL;
      const others = next.filter((p) => p.category !== cat);
      const otherTotal = others.reduce((s, p) => s + p.reward, 0);

      if (otherTotal === 0) return next; // cannot scale

      const scale = (otherTotal - excess) / otherTotal;

      const adjusted = next.map((p) =>
        p.category === cat
          ? p
          : { ...p, reward: Math.max(0, Math.round(p.reward * scale)) }
      );

      return adjusted;
    });
  };

  const updateRewardType = (cat: string, type: RewardType) => {
    setPerks((prev) => prev.map((p) => (p.category === cat ? { ...p, rewardType: type } : p)));
  };

  const updateCurrency = (cat: string, curr: string) => {
    setPerks((prev) => prev.map((p) => (p.category === cat ? { ...p, currency: curr } : p)));
  };

  const [autoFxSwap, setAutoFxSwap] = useState(false);

  // DnD sensors
  const sensors = useSensors(useSensor(PointerSensor));

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;
    const oldIndex = perks.findIndex((p) => p.category === active.id);
    const newIndex = perks.findIndex((p) => p.category === over.id);
    setPerks((prev) => arrayMove(prev, oldIndex, newIndex));
  };

  const SortableItem = ({ perk, idx }: { perk: typeof perks[number]; idx: number }) => {
    const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id: perk.category });
    const style: React.CSSProperties = {
      transform: CSS.Transform.toString(transform),
      transition,
      opacity: isDragging ? 0.5 : 1,
    };
    return (
      <div ref={setNodeRef} style={style} {...attributes} {...listeners} className="space-y-2">
        <div className="flex justify-between items-center text-sm font-medium cursor-grab">
          <span>:: {perk.category}</span>
          <div className="flex items-center gap-2">
            <span>{perk.reward}%</span>
            {/* delete */}
            <AlertDialog.Root>
              <AlertDialog.Trigger asChild>
                <button className="p-1 hover:text-destructive">
                  <Trash2 size={14} />
                </button>
              </AlertDialog.Trigger>
              <AlertDialog.Portal>
                <AlertDialog.Overlay className="fixed inset-0 bg-black/50" />
                <AlertDialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background p-6 rounded-lg shadow-lg space-y-4 w-80">
                  <AlertDialog.Title className="font-medium">Delete {perk.category}?</AlertDialog.Title>
                  <AlertDialog.Description className="text-sm text-muted-foreground">This action cannot be undone.</AlertDialog.Description>
                  <div className="flex justify-end gap-2">
                    <AlertDialog.Cancel className="px-3 py-1 text-sm border rounded-md">Cancel</AlertDialog.Cancel>
                    <AlertDialog.Action asChild>
                      <button onClick={() => deleteItem(idx)} className="px-3 py-1 text-sm bg-destructive text-destructive-foreground rounded-md">Delete</button>
                    </AlertDialog.Action>
                  </div>
                </AlertDialog.Content>
              </AlertDialog.Portal>
            </AlertDialog.Root>
          </div>
        </div>
        {/* Reward type radios */}
        <div className="flex gap-4 mb-1 text-xs">
          {([
            ["discount", "Discount"],
            ["points", "Points"],
            ["stable", "Stable"],
          ] as [RewardType, string][]).map(([val, label]) => (
            <label key={val} className="flex items-center gap-1 cursor-pointer">
              <input
                type="radio"
                name={`type-${perk.category}`}
                value={val}
                checked={perk.rewardType === val}
                onChange={() => updateRewardType(perk.category, val)}
              />
              {label}
            </label>
          ))}
        </div>
        {perk.rewardType === "stable" && (
          <div className="mb-1 text-xs flex items-center gap-2">
            <span>Currency:</span>
            <select
              value={perk.currency ?? "KRW"}
              onChange={(e) => updateCurrency(perk.category, e.target.value)}
              className="border px-1 py-0.5 rounded-md text-xs"
            >
              {[
                "KRW",
                "USD",
                "EUR",
                "JPY",
                "USDC",
                "USDT",
              ].map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
        )}
        <Slider
          defaultValue={[perk.reward]}
          max={10}
          step={1}
          min={0}
          onValueChange={(val) => updateReward(perk.category, val[0])}
        />
      </div>
    );
  };

  const deleteItem = (idx: number) => {
    setPerks((prev) => prev.filter((_, i) => i !== idx));
  };

  const handleGeneratePerks = () => {
    const keywordMap: Record<string, string> = {
      coffee: "Coffee",
      cafe: "Coffee",
      dining: "Dining",
      restaurant: "Dining",
      tech: "Tech",
      electronics: "Tech",
      travel: "Travel",
      trip: "Travel",
      grocery: "Groceries",
      groceries: "Groceries",
      gas: "Gas",
    };

    const lowered = inputValue.toLowerCase();
    const newCategories: string[] = [];
    Object.keys(keywordMap).forEach((kw) => {
      if (lowered.includes(kw)) {
        const cat = keywordMap[kw];
        if (!perks.some((p) => p.category === cat)) {
          newCategories.push(cat);
        }
      }
    });

    if (newCategories.length === 0) {
      toast({
        title: "No new perks detected",
        description: "Try mentioning coffee, travel, tech, etc.",
      });
      return;
    }

    setPerks((prev) => [
      ...prev,
      ...newCategories.map((cat) => ({
        category: cat,
        reward: Math.floor(Math.random() * 6) + 2, // 2~7%
        color: randomColor(),
      })),
    ]);

    toast({
      title: "Perks generated!",
      description: `Added: ${newCategories.join(", ")}`,
    });
  };

  // --- AI Recommend ---
  const [aiPrompt, setAiPrompt] = useState("I often shop groceries and pay gym membership");
  const [aiSuggestions, setAiSuggestions] = useState<typeof perks>([]);

  const handleAISubmit = () => {
    // mock AI: parse simple keywords
    const keywordMap: Record<string, string> = {
      grocery: "Groceries",
      groceries: "Groceries",
      gym: "Fitness",
      fitness: "Fitness",
      subscription: "Subscriptions",
      fuel: "Gas",
      gas: "Gas",
    };
    const lowered = aiPrompt.toLowerCase();
    const cats: string[] = [];
    Object.keys(keywordMap).forEach((kw) => {
      if (lowered.includes(kw)) cats.push(keywordMap[kw]);
    });
    if (cats.length === 0) cats.push("Everyday");
    const suggestions = cats.map((c) => ({
      category: c,
      reward: Math.floor(Math.random() * 5) + 2,
      color: randomColor(),
      rewardType: "points",
    }));
    setAiSuggestions(suggestions);
  };

  const applyAISuggestions = () => {
    setPerks((prev) => {
      const toAdd = aiSuggestions.filter((s) => !prev.some((p) => p.category === s.category));
      return [...prev, ...toAdd];
    });
    toast({ title: "AI perks added", description: aiSuggestions.map((s) => s.category).join(", ") });
    setAiSuggestions([]);
  };
  
  return (
    <section id="perk-builder" className="py-24 relative section-angled">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <Badge variant="outline" className="glass mb-4">
                Perk Builder
              </Badge>
              <h2 className="text-5xl font-bold mb-6">
                Speak Your Rewards Into <span className="text-gradient">Existence</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Just tell us what you want. Our AI creates smart contract policies 
                that automatically optimize your rewards based on your spending patterns.
              </p>
            </div>
            
            {/* Features */}
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                  <div className="w-3 h-3 rounded-full bg-primary animate-glow"></div>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Natural Language Processing</h4>
                  <p className="text-sm text-muted-foreground">Describe your ideal rewards in plain English</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                  <div className="w-3 h-3 rounded-full bg-primary animate-glow animation-delay-200"></div>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Smart Contract Automation</h4>
                  <p className="text-sm text-muted-foreground">Policies enforced by blockchain, not fine print</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                  <div className="w-3 h-3 rounded-full bg-primary animate-glow animation-delay-400"></div>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Real-time Optimization</h4>
                  <p className="text-sm text-muted-foreground">Your perks evolve with your spending habits</p>
                </div>
              </div>
            </div>
            
            <Button size="lg" className="btn-glow" onClick={() => toast({ title: "Perk Builder", description: "Perk Builder 데모 실행 (mock)" })}>
              Try Perk Builder
            </Button>
          </div>
          
          {/* Demo Interface */}
          <div className="space-y-6">
            {/* Input Interface */}
            <Card className="card-premium p-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 rounded-full bg-primary animate-glow"></div>
                  <span className="font-medium">Perk Builder</span>
                </div>
                
                <div className="space-y-3">
                  <label className="text-sm text-muted-foreground">Describe your ideal rewards:</label>
                  <Input 
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="glass border-primary/20 focus:border-primary"
                    placeholder="I want extra rewards for..."
                  />
                  <Button className="btn-glow w-full" onClick={handleGeneratePerks}>
                    Generate Perks
                  </Button>

                  {/* AI Recommend Button */}
                  <Dialog.Root>
                    <Dialog.Trigger asChild>
                      <Button variant="outline" className="w-full glass">AI Recommend</Button>
                    </Dialog.Trigger>
                    <Dialog.Portal>
                      <Dialog.Overlay className="fixed inset-0 bg-black/50" />
                      <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background p-6 rounded-lg w-96 space-y-4">
                        <Dialog.Title className="text-lg font-medium">AI Reward Suggestions</Dialog.Title>
                        <textarea value={aiPrompt} onChange={(e) => setAiPrompt(e.target.value)} className="w-full h-24 p-2 border rounded-md text-sm" />
                        <Button onClick={handleAISubmit} className="w-full">Generate Suggestions</Button>
                        {aiSuggestions.length > 0 && (
                          <div className="space-y-2">
                            <h4 className="font-medium">Suggestions</h4>
                            <ul className="list-disc pl-4 text-sm">
                              {aiSuggestions.map((s) => (
                                <li key={s.category}>{s.category} – {s.reward}%</li>
                              ))}
                            </ul>
                            <Button onClick={applyAISuggestions} className="w-full btn-glow">Apply to Perks</Button>
                          </div>
                        )}
                        <Dialog.Close asChild>
                          <button className="absolute top-2 right-2 text-xl">×</button>
                        </Dialog.Close>
                      </Dialog.Content>
                    </Dialog.Portal>
                  </Dialog.Root>
                </div>
              </div>
            </Card>
            
            {/* Dynamic reward sliders */}
            <Card className="card-premium p-6 space-y-6">
              <h4 className="font-semibold">Adjust Rewards (%)</h4>
              <div className="space-y-4 max-h-80 overflow-y-auto pr-2">
                <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
                  <SortableContext items={perks.map((p) => p.category)} strategy={verticalListSortingStrategy}>
                    {perks.map((perk, idx) => (
                      <SortableItem key={perk.category} perk={perk} idx={idx} />
                    ))}
                  </SortableContext>
                </DndContext>
              </div>
              <div className="grid grid-cols-3 gap-4 text-xs mt-2">
                <div className="text-center">
                  <span className="font-medium">Discount</span>
                  <div>{totals.discount}%</div>
                </div>
                <div className="text-center">
                  <span className="font-medium">Points</span>
                  <div>{totals.points}%</div>
                </div>
                <div className="text-center">
                  <span className="font-medium">Stable</span>
                  <div>{totals.stable}%</div>
                </div>
              </div>
              {/* Global Options */}
              <div className="flex items-center gap-2 text-xs mt-2">
                <input type="checkbox" id="fx" checked={autoFxSwap} onChange={(e) => setAutoFxSwap(e.target.checked)} />
                <label htmlFor="fx">Auto FX Swap for overseas payments</label>
              </div>
            </Card>

            {/* Rewards Bar Chart */}
            <Card className="card-premium p-6">
              <h4 className="font-semibold mb-4">Reward Breakdown</h4>
              <div className="w-full h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={perks}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="category" stroke="#888" />
                    <YAxis stroke="#888" />
                    <Tooltip />
                    <Bar dataKey="reward">
                      {perks.map((entry, index) => {
                        const typeColor =
                          entry.rewardType === "discount"
                            ? "#4ade80"
                            : entry.rewardType === "points"
                            ? "#a855f7"
                            : "#06b6d4";
                        return <Cell key={entry.category} fill={typeColor} />;
                      })}
                    </Bar>
                    <defs>
                      <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="hsl(var(--primary))" />
                        <stop offset="100%" stopColor="hsl(var(--accent))" />
                      </linearGradient>
                    </defs>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};