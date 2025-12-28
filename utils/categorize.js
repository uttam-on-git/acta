const categoryRules = {
  "Food & Dining": [
    "restaurant",
    "cafe",
    "starbucks",
    "mcdonald",
    "pizza",
    "burger",
    "food",
    "dining",
    "doordash",
    "ubereats",
    "grubhub",
  ],
  Transportation: [
    "uber",
    "lyft",
    "taxi",
    "gas",
    "fuel",
    "parking",
    "metro",
    "transit",
    "bus",
  ],
  Shopping: ["amazon", "walmart", "target", "shop", "store", "mall"],
  Entertainment: [
    "netflix",
    "spotify",
    "hulu",
    "disney",
    "movie",
    "theater",
    "game",
    "steam",
  ],
  Groceries: [
    "grocery",
    "supermarket",
    "whole foods",
    "trader joe",
    "safeway",
    "kroger",
  ],
  "Bills & Utilities": [
    "electric",
    "water",
    "internet",
    "phone",
    "at&t",
    "verizon",
    "comcast",
  ],
  Healthcare: ["pharmacy", "doctor", "hospital", "medical", "cvs", "walgreens"],
  Income: ["salary", "deposit", "paycheck", "income", "transfer in"],
};

export function categorizeTransaction(description) {
  const lowerDesc = description.toLowerCase();

  for (const category in categoryRules) {
    const keywords = categoryRules[category];

    for (const word of keywords) {
      if (lowerDesc.includes(word)) {
        return category;
      }
    }
  }

  return "Other";
}

export function processTransactions(transactions) {
  return transactions.map((t) => ({
    ...t,
    category: categorizeTransaction(t.description),
    amount: parseFloat(t.amount),
  }));
}
