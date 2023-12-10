export const Categories = {
  Food: "Food",
  Transportation: "Transportation",
  Utilities: "Utilities",
  Housing: "Housing",
  Healthcare: "Healthcare",
  Education: "Education",
  Travel: "Travel",
  Savings: "Savings",
  Debt: "Debt",
  Miscellaneous: "Miscellaneous",
} as const

export type Category = keyof typeof Categories
