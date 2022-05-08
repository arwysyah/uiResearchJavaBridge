import {SCREEN_WIDTH, WINDOW_WIDTH} from '../helpers/dimensions';

export function responsiveScreen(size: number) {
  const MAX_SCALE_FACTOR = 1.5;
  const BASE_SCREEN_SIZE = 360;
  const scaleFactor = WINDOW_WIDTH / BASE_SCREEN_SIZE;
  return Math.min(scaleFactor, MAX_SCALE_FACTOR) * size;
}
