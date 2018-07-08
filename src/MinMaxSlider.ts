
import '../scss/MinMaxSlider.scss';

export interface IMinMaxSliderParams {
    min: number;
    max: number;
    orientation: 'horizontal' | 'vertical';
}

export class MinMaxSlider {
    private params: IMinMaxSliderParams;
    constructor(params: IMinMaxSliderParams) {
        this.params = params;
    }
}