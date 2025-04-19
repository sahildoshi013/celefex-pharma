export interface Category {
  id: string;
  name: string;
}

export interface DosageForm {
  id: string;
  name: string;
}

export const therapeuticCategories: Category[] = [
  { id: "anti-infectives", name: "Anti-Infectives" },
  { id: "antiarthritis", name: "Antiarthritis" },
  { id: "antidiabetic", name: "Antidiabetic" },
  { id: "antiemetic", name: "Antiemetic" },
  { id: "antihistamines", name: "Antihistamines" },
  { id: "antivirals", name: "Antivirals" },
  { id: "cardiovascular", name: "Cardiovascular" },
  { id: "cns", name: "CNS" },
  { id: "gastrointestinals", name: "Gastrointestinals" },
  { id: "respiratory", name: "Respiratory" },
  { id: "supplements", name: "Supplements" },
  { id: "urology", name: "Urology" }
];

export const dosageForms: DosageForm[] = [
  { id: "powder", name: "Powder" },
  { id: "drops", name: "Drops" },
  { id: "nasal-solution", name: "Nasal Solution" },
  { id: "lozenges", name: "Lozenges" },
  { id: "passaries", name: "Passaries" },
  { id: "oral-spray", name: "Oral Spray" },
  { id: "tablets", name: "Tablets" },
  { id: "capsules", name: "Capsules" },
  { id: "syrup", name: "Syrup" },
  { id: "injection", name: "Injection" },
  { id: "cream", name: "Cream" },
  { id: "ointment", name: "Ointment" }
]; 