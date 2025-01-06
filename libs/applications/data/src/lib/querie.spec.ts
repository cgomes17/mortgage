import { useApplications } from './queries';

describe('Queries', () => {
  describe('getApplications', () => {
    it('should be defined', () => {
      expect(useApplications).toBeDefined();
    });
  });
});
