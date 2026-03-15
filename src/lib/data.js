// lib/data.js
export function getCategoryEmoji(category) {
  const map = {
    Beef: "🥩",
    Breakfast: "🍳",
    Chicken: "🍗",
    Dessert: "🍰",
    Goat: "🐐",
    Lamb: "🫕",
    Miscellaneous: "🍽️",
    Pasta: "🍝",
    Pork: "🥓",
    Seafood: "🐟",
    Side: "🥗",
    Starter: "🥨",
    Vegan: "🌿",
    Vegetarian: "🥦",
  };
  return map[category] || "🍴";
}

export function getCountryCode(area) {
  const map = {
    American: "US",
    British: "GB",
    Canadian: "CA",
    Chinese: "CN",
    Croatian: "HR",
    Dutch: "NL",
    Egyptian: "EG",
    Filipino: "PH",
    French: "FR",
    Greek: "GR",
    Indian: "IN",
    Irish: "IE",
    Italian: "IT",
    Jamaican: "JM",
    Japanese: "JP",
    Kenyan: "KE",
    Malaysian: "MY",
    Mexican: "MX",
    Moroccan: "MA",
    Polish: "PL",
    Portuguese: "PT",
    Russian: "RU",
    Spanish: "ES",
    Thai: "TH",
    Tunisian: "TN",
    Turkish: "TR",
    Ukrainian: "UA",
    Uruguayan: "UY",
    Vietnamese: "VN",
  };
  return map[area] || "UN";
}
