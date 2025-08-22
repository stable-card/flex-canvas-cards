import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { PageTransition } from "@/components/PageTransition";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { TargetingDemo } from "@/components/TargetingDemo";

export default function MerchantPage() {
  const data = [
    { name: "Week 1", sales: 1200, bonus: 60 },
    { name: "Week 2", sales: 1500, bonus: 75 },
    { name: "Week 3", sales: 1800, bonus: 90 },
    { name: "Week 4", sales: 2100, bonus: 105 },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <PageTransition>
        <div className="pt-24 space-y-24">
          {/* Hero */}
          <section className="text-center px-6">
            <h1 className="text-6xl font-bold mb-6">Real-time Rewards. Instant Settlement.</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Launch precision bonus campaigns that bill only on actual sales and get paid
              instantly in KRW-Stable.
            </p>
            <Button size="lg" className="btn-glow text-lg px-10 py-6">Request Demo</Button>
          </section>

          {/* Value Cards */}
          <section className="container mx-auto px-6 grid md:grid-cols-4 gap-6">
            {[
              {
                title: "Precision Targeting",
                desc: "Time, geo, segment based bonuses",
              },
              {
                title: "Pay on Real Sales",
                desc: "Costs occur only when a transaction happens",
              },
              {
                title: "Realtime Dashboard",
                desc: "New vs returning revenue attribution",
              },
              {
                title: "T+0 Settlement",
                desc: "Immediate KRW-Stable payout",
              },
            ].map((v) => (
              <Card key={v.title} className="p-6 space-y-4 card-premium text-center">
                <h3 className="text-xl font-semibold">{v.title}</h3>
                <p className="text-sm text-muted-foreground">{v.desc}</p>
              </Card>
            ))}
          </section>

          {/* Targeting Demo */}
          <section className="container mx-auto px-6">
            <TargetingDemo />
          </section>

          {/* Dashboard Preview */}
          <section className="container mx-auto px-6">
            <Card className="p-8 card-premium">
              <h3 className="text-2xl font-bold mb-6">Performance Snapshot</h3>
              <div className="w-full h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="sales" fill="hsl(var(--primary))" name="Sales" />
                    <Bar dataKey="bonus" fill="hsl(var(--accent))" name="Bonus Cost" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </Card>
          </section>

          {/* Comparison Table */}
          <section className="container mx-auto px-6">
            <Card className="p-8 card-premium overflow-x-auto">
              <h3 className="text-2xl font-bold mb-6">Traditional vs FlexPerks</h3>
              <table className="w-full text-sm border-collapse [&_td]:border [&_th]:border">
                <thead>
                  <tr className="bg-secondary/20">
                    <th className="p-3 text-left">Item</th>
                    <th className="p-3 text-left">Traditional Card</th>
                    <th className="p-3 text-left">FlexPerks</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Settlement Cycle", "T+2 ~ T+5", "T+0 KRW-Stable"],
                    ["Billing Model", "Prepaid Budget", "Pay-as-you-go (Real Sales)"],
                    ["Targeting", "BIN / MCC", "Time · Geo · Segment"],
                    ["Measurement", "Monthly CSV", "Realtime Dashboard"],
                  ].map((row) => (
                    <tr key={row[0] as string}>
                      {row.map((cell, i) => (
                        <td key={i} className="p-3">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </Card>
          </section>

          {/* FAQ */}
          <section className="container mx-auto px-6">
            <h3 className="text-2xl font-bold mb-6 text-center">FAQ</h3>
            <Accordion type="single" collapsible className="max-w-2xl mx-auto">
              <AccordionItem value="q1">
                <AccordionTrigger>How fast is settlement?</AccordionTrigger>
                <AccordionContent>
                  We settle to your KRW-Stable wallet instantly after each approved
                  transaction (minus processing fee).
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q2">
                <AccordionTrigger>Is KRW-Stable volatile?</AccordionTrigger>
                <AccordionContent>
                  KRW-Stable is fully backed 1:1 with cash &amp; short-term bonds, audited
                  monthly by XYZ CPA.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          {/* CTA */}
          <section className="py-24 bg-gradient-to-b from-primary/10 to-transparent text-center px-6">
            <h2 className="text-4xl font-bold mb-4">Ready to Boost Your Revenue?</h2>
            <p className="text-muted-foreground mb-8">Get access to the merchant dashboard in minutes.</p>
            <Button size="lg" className="btn-glow text-lg px-10 py-6">Get Started</Button>
          </section>
        </div>
      </PageTransition>

      {/* Footer (simple) */}
      <footer className="border-t border-border/50 py-12 mt-24">
        <div className="container mx-auto px-6 text-center text-sm text-muted-foreground">
          © 2024 FlexPerks. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
