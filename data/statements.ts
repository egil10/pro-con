export interface Argument {
  id: string;
  text: string;
  votes: number;
}

export interface Statement {
  id: string;
  title: string;
  pros: Argument[];
  cons: Argument[];
}

export const statements: Statement[] = [
  {
    id: "1",
    title: "Should Norway join the European Union?",
    pros: [
      { id: "p1-1", text: "Improves access to the single market.", votes: 48 },
      { id: "p1-2", text: "Gives Norway direct influence over EU regulations.", votes: 31 },
      { id: "p1-3", text: "May strengthen security cooperation.", votes: 22 },
      { id: "p1-4", text: "Could increase labor mobility and talent inflow.", votes: 17 },
      { id: "p1-5", text: "Aligns with long-term economic integration trends in Europe.", votes: 11 },
    ],
    cons: [
      { id: "c1-1", text: "Reduces Norway's sovereignty over key policies.", votes: 44 },
      { id: "c1-2", text: "Threatens control of fisheries and natural resources.", votes: 33 },
      { id: "c1-3", text: "Does not guarantee better economic performance.", votes: 19 },
      { id: "c1-4", text: "May increase bureaucracy and compliance costs.", votes: 14 },
      { id: "c1-5", text: "Public opinion is not strongly in favor.", votes: 7 },
    ],
  },
  {
    id: "2",
    title: "Should cryptocurrencies be regulated as securities?",
    pros: [
      { id: "p2-1", text: "Protects investors from fraudulent projects.", votes: 67 },
      { id: "p2-2", text: "Brings regulatory clarity to the industry.", votes: 55 },
      { id: "p2-3", text: "Reduces systemic risk in crypto markets.", votes: 41 },
      { id: "p2-4", text: "Increases institutional adoption.", votes: 29 },
      { id: "p2-5", text: "Makes exchanges safer and more compliant.", votes: 22 },
    ],
    cons: [
      { id: "c2-1", text: "Could stifle innovation.", votes: 51 },
      { id: "c2-2", text: "Overregulation may push companies offshore.", votes: 39 },
      { id: "c2-3", text: "Classification as securities is often unclear.", votes: 28 },
      { id: "c2-4", text: "May reduce retail access.", votes: 17 },
      { id: "c2-5", text: "Doesn't fully prevent scams.", votes: 12 },
    ],
  },
  {
    id: "3",
    title: "Should AI-generated content require mandatory labeling?",
    pros: [
      { id: "p3-1", text: "Prevents misinformation and deepfake misuse.", votes: 92 },
      { id: "p3-2", text: "Improves transparency for consumers.", votes: 73 },
      { id: "p3-3", text: "Helps protect artists and creators.", votes: 51 },
      { id: "p3-4", text: "Makes platform moderation easier.", votes: 33 },
      { id: "p3-5", text: "Supports digital literacy efforts.", votes: 19 },
    ],
    cons: [
      { id: "c3-1", text: "Labeling may be technically difficult to enforce.", votes: 61 },
      { id: "c3-2", text: "Raises privacy concerns.", votes: 46 },
      { id: "c3-3", text: "Could slow down creative AI workflows.", votes: 29 },
      { id: "c3-4", text: "Regulations may vary by jurisdiction.", votes: 18 },
      { id: "c3-5", text: "Labels might be ignored by users.", votes: 9 },
    ],
  },
  {
    id: "4",
    title: "Should countries adopt a 4-day workweek?",
    pros: [
      { id: "p4-1", text: "Improves work–life balance.", votes: 84 },
      { id: "p4-2", text: "Increases productivity per hour.", votes: 66 },
      { id: "p4-3", text: "Boosts job satisfaction and retention.", votes: 49 },
      { id: "p4-4", text: "Reduces burnout.", votes: 37 },
      { id: "p4-5", text: "Can reduce carbon emissions.", votes: 21 },
    ],
    cons: [
      { id: "c4-1", text: "Challenging for customer-facing industries.", votes: 52 },
      { id: "c4-2", text: "May reduce total output in manufacturing.", votes: 39 },
      { id: "c4-3", text: "Harder to coordinate across global teams.", votes: 23 },
      { id: "c4-4", text: "Requires large organizational adjustments.", votes: 18 },
      { id: "c4-5", text: "Workers might still work overtime.", votes: 10 },
    ],
  },
  {
    id: "5",
    title: "Should universal basic income (UBI) be implemented?",
    pros: [
      { id: "p5-1", text: "Provides financial stability to all citizens.", votes: 102 },
      { id: "p5-2", text: "Reduces poverty and inequality.", votes: 81 },
      { id: "p5-3", text: "Simplifies welfare administration.", votes: 57 },
      { id: "p5-4", text: "Helps people pursue education or entrepreneurship.", votes: 46 },
      { id: "p5-5", text: "Reduces stress and improves mental health.", votes: 33 },
    ],
    cons: [
      { id: "c5-1", text: "Very expensive for governments to fund.", votes: 88 },
      { id: "c5-2", text: "May reduce incentives to work.", votes: 63 },
      { id: "c5-3", text: "Risk of inflationary pressures.", votes: 47 },
      { id: "c5-4", text: "May divert funds from targeted welfare programs.", votes: 29 },
      { id: "c5-5", text: "Difficult to implement fairly at scale.", votes: 17 },
    ],
  },
];

