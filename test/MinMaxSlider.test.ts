import { MinMaxSlider } from "../src/MinMaxSlider";


describe("MinMaxSlider", () => {

    beforeEach(() => {

    });

    it("Should set default value", () => {

        let slider = new MinMaxSlider({
            min: 0, max: 200, orientation: 'horizontal'
        });

        chai.assert.exists(slider.value);

        chai.assert.equal(slider.value.from, 0);
        chai.assert.equal(slider.value.to, 200);
    });

    it("Should use value passed to constructor", () => {
        let slider = new MinMaxSlider({
            min: 0, max: 200, orientation: 'horizontal',
            value: {
                from: 10, to: 190
            }
        });

        chai.assert.equal(slider.value.from, 10);
        chai.assert.equal(slider.value.to, 190);

    });
});