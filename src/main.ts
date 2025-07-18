const draw = (ctx: CanvasRenderingContext2D, size: number, back = '#fff', front = '#000') => {
  const canvas = ctx.canvas;
  canvas.width = size;
  canvas.height = size;
  ctx.fillStyle = back;
  ctx.fillRect(0, 0, size, size);
  ctx.fillStyle = front;
  const o = size / 2;
  const dx = size * Math.sqrt(3) / 100;
  const dy = size / 50;
  const p = (x: number, y: number): [number, number] => [o + x * dx, o + y * dy];
  ctx.beginPath();
  ctx.moveTo(...p(0, -20));
  ctx.lineTo(...p(20, -10));
  ctx.lineTo(...p(20, 10));
  ctx.lineTo(...p(4, 18));
  ctx.lineTo(...p(4, -2));
  ctx.lineTo(...p(18, -9));
  ctx.lineTo(...p(18, 9));
  ctx.lineTo(...p(-18, -9));
  ctx.lineTo(...p(0, -18));
  ctx.lineTo(...p(0, 20));
  ctx.lineTo(...p(-20, 10));
  ctx.lineTo(...p(-20, -10));
  ctx.closePath();
  ctx.fill("evenodd");
};

const input = document.createElement('input');
input.type = 'number';
input.value = '360';
input.min = '1';

const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d')!;
draw(ctx, 360);

input.addEventListener('change', () => draw(ctx, Number(input.value)));
document.body.append(input, document.createElement('br'), canvas);
