const enhancer = require('./enhancer.js');
// test away!

describe('repair function', () => {
    it('repair works', () => {
        const newItem = {
            name: "Rivet Gun",
            durability: 1,
            enhancement: 15,
        };
        const expectedItem = {
            name: "Rivet Gun",
            durability: 100,
            enhancement: 15,
        };

        const item = enhancer.repair(newItem)
        expect(item.name).toBe(expectedItem.name);
        expect(item.durability).toBe(expectedItem.durability);
        expect(item.enhancement).toBe(expectedItem.enhancement);
    })
});

//success function

describe('success function', () => {
    it('success works', () => {
        const newItem = {
            name: "Rivet Gun",
            durability: 100,
            enhancement: 9,
        };
        const expectedItem = {
            name: "Rivet Gun",
            durability: 100,
            enhancement: 10,
        };

        const item = enhancer.success(newItem)

        expect(item.name).toBe(expectedItem.name);
        expect(item.durability).toBe(expectedItem.durability);
        expect(item.enhancement).toBe(expectedItem.enhancement);
    })
});

describe('success function', () => {
    it('enhancment does not change at 20', () => {
        const newItem = {
            name: "Rivet Gun",
            durability: 100,
            enhancement: 20,
        };
        const expectedItem = {
            name: "Rivet Gun",
            durability: 100,
            enhancement: 20,
        };

        const item = enhancer.success(newItem)

        expect(item.name).toBe(expectedItem.name);
        expect(item.durability).toBe(expectedItem.durability);
        expect(item.enhancement).toBe(expectedItem.enhancement);
    })
});


//fail test


describe('fail function', () => {
    it('fail works when decreasing the durability by 5', () => {
        const newItem = {
            name: "Rivet Gun",
            durability: 100,
            enhancement: 14,
        };
        const expectedItem = {
            name: "Rivet Gun",
            durability: 95,
            enhancement: 14,
        };

        const item = enhancer.fail(newItem)

        expect(item.name).toBe(expectedItem.name);
        expect(item.durability).toBe(expectedItem.durability);
        expect(item.enhancement).toBe(expectedItem.enhancement);
    })
});

describe('fail function', () => {
    it('fail works when decreasing durability by 10 and enhancment by 1', () => {
        const newItem = {
            name: "Rivet Gun",
            durability: 100,
            enhancement: 18,
        };
        const expectedItem = {
            name: "Rivet Gun",
            durability: 90,
            enhancement: 17,
        };

        const item = enhancer.fail(newItem)

        expect(item.name).toBe(expectedItem.name);
        expect(item.durability).toBe(expectedItem.durability);
        expect(item.enhancement).toBe(expectedItem.enhancement);
    })
});
