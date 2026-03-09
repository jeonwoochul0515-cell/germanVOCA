const { createCanvas } = require('@napi-rs/canvas');
const fs = require('fs');

function generateIcon(size) {
  const canvas = createCanvas(size, size);
  const ctx = canvas.getContext('2d');

  // Background gradient
  const grad = ctx.createLinearGradient(0, 0, size, size);
  grad.addColorStop(0, '#4f46e5');
  grad.addColorStop(1, '#7c3aed');
  ctx.fillStyle = grad;

  // Rounded rect
  const r = size * 0.15;
  ctx.beginPath();
  ctx.moveTo(r, 0);
  ctx.lineTo(size - r, 0);
  ctx.quadraticCurveTo(size, 0, size, r);
  ctx.lineTo(size, size - r);
  ctx.quadraticCurveTo(size, size, size - r, size);
  ctx.lineTo(r, size);
  ctx.quadraticCurveTo(0, size, 0, size - r);
  ctx.lineTo(0, r);
  ctx.quadraticCurveTo(0, 0, r, 0);
  ctx.closePath();
  ctx.fill();

  // German flag stripe (subtle at bottom)
  const stripeH = size * 0.06;
  const stripeY = size * 0.82;
  ctx.fillStyle = '#000000';
  ctx.fillRect(size * 0.15, stripeY, size * 0.7, stripeH);
  ctx.fillStyle = '#DD0000';
  ctx.fillRect(size * 0.15, stripeY + stripeH, size * 0.7, stripeH);
  ctx.fillStyle = '#FFCC00';
  ctx.fillRect(size * 0.15, stripeY + stripeH * 2, size * 0.7, stripeH);

  // "DE" text
  ctx.fillStyle = '#ffffff';
  ctx.font = `bold ${size * 0.35}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('DE', size / 2, size * 0.38);

  // Small subtitle
  ctx.font = `${size * 0.09}px sans-serif`;
  ctx.fillText('Vokabeln', size / 2, size * 0.58);

  return canvas.toBuffer('image/png');
}

fs.writeFileSync('icons/icon-192.png', generateIcon(192));
fs.writeFileSync('icons/icon-512.png', generateIcon(512));
console.log('Icons generated!');
