import * as fs from 'fs';
import { doIt } from '../magic';

jest.mock('fs', () => ({
    readdirSync: jest.fn().mockReturnValue('ok')
}));

describe('testin', () => {
    describe('doIt', () => {
        it('should work', () => {
            const output = doIt('in');

            expect(output).toBe('ok');
            expect(fs.readdirSync).toHaveBeenCalledWith('in');
        });
    });
});
