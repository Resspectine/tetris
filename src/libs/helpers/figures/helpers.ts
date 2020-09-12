import { Square } from './Square';
import { I } from './I';
import { L } from './L';
import { T } from './T';
import { Z } from './Z';

const figures = [I, L, T, Z, Square];

export const getRandomFigures = () => figures[Math.floor(Math.random() * 5)];
