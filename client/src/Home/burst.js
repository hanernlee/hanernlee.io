import mojs from 'mo-js';

const DURATION = 500;

export const circle = new mojs.Shape({
  left: 0,
  top: 0,
  strokeWidth: 10,
  fill: 'none',
  radius: 50,
  scale: { 0 : 1 },
  opacity: { 1: 0 },
  shape: 'circle',
  stroke: 'white',
  strokeWidth: 5,
  fill: 'none',
  duration: 1.5*DURATION,
  isForce3d: true,
  isTimelineLess: true,
});

export const swirl = new mojs.ShapeSwirl({
  fill: 'cyan',
  top: '90%',
  left: '95%',
  y: { 0: -150 },
  radius: 8,
  swirlFrequency: 30,
  duration: 1000,
  repeat: 999
});

export const swirl1 = new mojs.ShapeSwirl({
  fill: '#ff69b4',
  top: '90%',
  left: '95%',
  y: { 0: -200 },
  radius: 8,
  swirlFrequency: 30,
  duration: 1500,
  repeat: 999
});

export const swirl3 = new mojs.ShapeSwirl({
  fill: 'white',
  top: '90%',
  left: '95%',
  y: { 0: -200 },
  radius: 8,
  swirlFrequency: 10,
  duration: 1000,
  repeat: 999
});

export const swirl4 = new mojs.ShapeSwirl({
  fill: '#24D8A6',
  top: '90%',
  left: '95%',
  y: { 0: -200 },
  radius: 10,
  swirlFrequency: 15,
  duration: 500,
  repeat: 999
});

export const bubbles = new mojs.Burst({
  left: 0,
  top: 0,
  radius: 28,
  count: 5,
  timeline: { delay: 100 },
  children: {
    // stroke: '#77D8DA',
    stroke: '#ff69b4',
    fill: 'none',
    scale: 1,
    strokeWidth: { 8: 0 },
    radius: { 0 : 'rand(6, 10)' },
    degreeShift: 'rand(-50, 50)',
    duration: 400,
    delay: 'rand(0, 250)',
  }
});

export const burst = new mojs.Burst({
  left: 0,
  top: 0,
  radius: { 0: 30 },
  opacity: { 1: 0 },
  angle: 45,
  count: 10,
  children: {
    shape: 'polygon',
    radius: 3,
    scale: 1,
    stroke: '#24D8A6',
    strokeDasharray: '100%',
    strokeDashoffset: { '-100%' : '100%' },
    duration: 700,
    easing: 'quad.out',
  }
});

export const timeline = new mojs.Timeline();