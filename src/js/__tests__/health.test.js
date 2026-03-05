import getHealthStatus from '../health.js';

describe(
  'getHealthStatus',
  () => {
    test(
      'should return "healthy" for health > 50',
      () => {
        expect(getHealthStatus({
          name: 'Маг', health: 90,
        })).toBe('healthy');
        expect(getHealthStatus({
          name: 'Воин', health: 51,
        })).toBe('healthy');
      },
    );

    test(
      'should return "wounded" for health between 15 and 50 inclusive',
      () => {
        expect(getHealthStatus({
          name: 'Лучник', health: 50,
        })).toBe('wounded');
        expect(getHealthStatus({
          name: 'Целитель', health: 30,
        })).toBe('wounded');
        expect(getHealthStatus({
          name: 'Разбойник', health: 15,
        })).toBe('wounded');
      },
    );

    test(
      'should return "critical" for health < 15',
      () => {
        expect(getHealthStatus({
          name: 'Паладин', health: 14,
        })).toBe('critical');
        expect(getHealthStatus({
          name: 'Чернокнижник', health: 0,
        })).toBe('critical');
        expect(getHealthStatus({
          name: 'Друид', health: -5,
        })).toBe('critical');
      },
    );
  },
);
