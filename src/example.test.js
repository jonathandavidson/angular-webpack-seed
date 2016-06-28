import { world } from './example'; 

describe('test example', () => {
    it('runs tests', () => {
        expect(world).toEqual('world');
        expect(false).toBe(true);
    });
});
