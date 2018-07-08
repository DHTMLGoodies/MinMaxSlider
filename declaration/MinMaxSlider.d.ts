import '../scss/MinMaxSlider.scss';
export interface IMinMaxSliderParams {
    min: number;
    max: number;
    orientation: 'horizontal' | 'vertical';
}
export declare class MinMaxSlider {
    private params;
    constructor(params: IMinMaxSliderParams);
}
