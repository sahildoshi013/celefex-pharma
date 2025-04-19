export interface Product {
  id: string;
  name: string;
  image: string;
  category: string;
  dosageForm: string;
  description?: string;
  uses?: string[];
  dosage?: string;
  sideEffects?: string[];
  precautions?: string[];
  storage?: string;
  packing?: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Bacillus clausii Spores",
    image: "https://placehold.co/400x400/e2e8f0/475569?text=Bacillus",
    category: "anti-infectives",
    dosageForm: "powder",
    description: "Bacillus clausii spores suspension is a probiotic supplement that helps maintain a healthy gut flora and supports digestive system disorders.",
    uses: [
      "Support digestive system disorders like diarrhea, constipation, gastric ulcers",
      "Help fight against pathogenic bacteria, viruses, and yeast",
      "Reduce allergic reactions caused by lactose consumption",
      "Promote healthy gut flora balance"
    ],
    dosage: "For infants: 1-2 mini bottles per day\nFor children: 1-2 mini bottles a day\nFor adults: 2-3 mini bottles a day",
    sideEffects: [
      "Bloating",
      "Gas",
      "Stomach discomfort",
      "Nausea",
      "Vomiting",
      "Allergic reactions like rashes and itching"
    ],
    precautions: [
      "Do not take if allergic to any of its components",
      "Do not exceed the recommended daily dose",
      "Check other supplements for similar ingredients"
    ],
    storage: "Store at a temperature not exceeding 25°C in a dry place. Keep out of reach of children.",
    packing: "5ml x 10 mini bottles in a carton with a pack insert"
  },
  {
    id: "2",
    name: "Healthy Bones",
    image: "https://placehold.co/400x400/e2e8f0/475569?text=Healthy+Bones",
    category: "antiarthritis",
    dosageForm: "powder",
    description: "A comprehensive bone health supplement designed to support bone strength and joint health.",
    uses: [
      "Support bone density and strength",
      "Promote joint health and mobility",
      "Aid in calcium absorption",
      "Support overall bone health"
    ],
    dosage: "Take one sachet daily with water or as directed by your physician",
    sideEffects: [
      "Mild stomach upset",
      "Constipation",
      "Nausea"
    ],
    precautions: [
      "Consult your doctor if you have kidney problems",
      "Do not exceed recommended dosage",
      "Take with food if stomach upset occurs"
    ],
    storage: "Store in a cool, dry place away from direct sunlight",
    packing: "10 sachets per box"
  },
  {
    id: "3",
    name: "Solmac",
    image: "https://placehold.co/400x400/e2e8f0/475569?text=Solmac",
    category: "antiemetic",
    dosageForm: "drops",
    description: "An effective antiemetic solution for the prevention and treatment of nausea and vomiting.",
    uses: [
      "Prevention and treatment of nausea",
      "Control of vomiting",
      "Motion sickness relief",
      "Post-operative nausea management"
    ],
    dosage: "Adults: 10-20 drops as needed\nChildren: 5-10 drops as needed",
    sideEffects: [
      "Drowsiness",
      "Dry mouth",
      "Blurred vision",
      "Constipation"
    ],
    precautions: [
      "Do not operate heavy machinery after taking",
      "Avoid alcohol consumption",
      "Consult doctor if pregnant or breastfeeding"
    ],
    storage: "Store at room temperature, protect from light",
    packing: "30ml bottle with dropper"
  }
]; 