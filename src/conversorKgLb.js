export const convToKg = (...lb) => lb.map(lb => (lb / 2.20462).toFixed(3))

export const convToLb = (...kg) => kg.map(kg => (kg * 2.20462).toFixed(3))
