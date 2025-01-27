document.getElementById('seoForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const websiteSize = document.getElementById('websiteSize').value;
  const industry = document.getElementById('industry').value;
  const keywords = parseInt(document.getElementById('keywords').value);

  let baseCost = 0;

  // Base cost based on website size
  switch (websiteSize) {
    case 'small':
      baseCost = 500;
      break;
    case 'medium':
      baseCost = 1000;
      break;
    case 'large':
      baseCost = 2000;
      break;
  }

  // Industry multiplier
  let industryMultiplier = 1;
  if (industry === 'ecommerce') industryMultiplier = 1.5;
  if (industry === 'healthcare') industryMultiplier = 1.2;
  if (industry === 'tech') industryMultiplier = 1.3;

  // Keyword multiplier
  const keywordMultiplier = keywords * 10;

  // Total cost
  const totalCost = (baseCost * industryMultiplier) + keywordMultiplier;

  // Display result
  document.getElementById('costResult').innerHTML = `
    <strong>Estimated Monthly Cost:</strong> $${totalCost.toLocaleString()} 💰<br>
    <small>(Includes one-time setup fee and ongoing optimization)</small>
  `;
});
