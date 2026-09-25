import { describe, expect, it } from 'vitest';

import { PROJECT_NAME } from './index.js';

describe('shared constants', () => {
  it('exports the application display name', () => {
    expect(PROJECT_NAME).toBe('轮班管理系统');
  });
});
