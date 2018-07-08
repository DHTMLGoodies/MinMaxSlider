
import '../scss/MinMaxSlider.scss';
import * as $ from "jquery";

export interface IMinMaxSliderValue {
    from: number;
    to: number;
}

export interface IMinMaxSliderParams {
    min: number;
    max: number;
    value?: IMinMaxSliderValue;
    orientation?: 'horizontal' | 'vertical';
}


export class MinMaxSlider {
    private params: IMinMaxSliderParams;
    private _value: IMinMaxSliderValue;

    private $: JQuery<HTMLElement>;

    constructor(params: IMinMaxSliderParams) {
        this.params = params;

        this._value = params.value || {
            from: params.min, to: params.max
        };

        this.$ = $('<div>');
    }

    get value(): IMinMaxSliderValue {
        return this._value;
    }
}