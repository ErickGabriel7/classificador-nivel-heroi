const levels = {
  0: 'Ferro',
  1: 'Bronze',
  2: 'Prata',
  3: 'Prata',
  4: 'Prata',
  5: 'Ouro',
  6: 'Ouro',
  7: 'Platina',
  8: 'Ascendente',
  9: 'Imortal',
};

function classifyXP(xp) {
  if (xp == 0) return levels[xp];

  let level = Math.floor((xp - 1) / 1000);
  return levels[level] || 'Radiante';
}

module.exports = classifyXP;
