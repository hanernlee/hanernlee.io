import mojs from 'mo-js';
import { Color } from '../color.js';

export const swirl = new mojs.ShapeSwirl({
  fill: Color.green,
  y: { 0: 100 },
  x: { 0: -500 },
  radius: 8,
  swirlFrequency: 15,
  duration: 2000,
  repeat: 999
});

export const swirl1 = new mojs.ShapeSwirl({
  fill: Color.pink,
  y: { 0: -300 },
  x: { 0: -200 },
  radius: 8,
  swirlFrequency: 20,
  duration: 2500,
  repeat: 999
});

export const swirl3 = new mojs.ShapeSwirl({
  fill: Color.white,
  y: { 0: 150 },
  x: { 0: 250 },
  radius: 8,
  swirlFrequency: 10,
  duration: 1000,
  repeat: 999
});

export const swirl4 = new mojs.ShapeSwirl({
  fill: Color.purple,
  y: { 0: -250 },
  x: { 0: 350 },
  radius: 5,
  swirlFrequency: 10,
  duration: 2000,
  repeat: 999
});

export const swirl5 = new mojs.ShapeSwirl({
  fill: Color.lightBlue,
  y: { 0: -300 },
  x: { 0: -500 },
  radius: 5,
  swirlFrequency: 5,
  duration: 2500,
  repeat: 999
});

export const swirl6 = new mojs.ShapeSwirl({
  fill: Color.pink,
  y: { 0: 350 },
  x: { 0: 450 },
  radius: 8,
  swirlFrequency: 10,
  duration: 1000,
  repeat: 999
});
