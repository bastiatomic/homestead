export const KEYMAP: {
    [key: string]: {
      indexIncrement: { x: number; y: number };
      pixelIncrementX: number;
      pixelIncrementY: number;
    };
  } = {
    w: {
      indexIncrement: { x: 0, y: -1 },
      pixelIncrementX: 0,
      pixelIncrementY: -50,
    },
    d: {
      indexIncrement: { x: +1, y: 0 },
      pixelIncrementX: +50,
      pixelIncrementY: 0,
    },
    s: {
      indexIncrement: { x: 0, y: +1 },
      pixelIncrementX: 0,
      pixelIncrementY: +50,
    },
    a: {
      indexIncrement: { x: -1, y: 0 },
      pixelIncrementX: -50,
      pixelIncrementY: 0,
    },
  };