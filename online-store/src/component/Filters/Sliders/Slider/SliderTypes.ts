import { ChooseActionType } from '../SlidersTypes';
import { NamesStateRangeType } from '../SlidersTypes';

export type SliderProps = {
  range: {
    min: number;
    max: number;
  };
  step: number;
  categorySlider: string;
  headerName: string;
  action: ChooseActionType;
  nameState: NamesStateRangeType;
};
