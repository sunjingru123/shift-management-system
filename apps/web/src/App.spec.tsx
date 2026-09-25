import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it } from 'vitest';

import { App } from './App';

describe('application shell', () => {
  it('renders the project name on the initial page', () => {
    const markup = renderToStaticMarkup(<App />);

    expect(markup).toContain('轮班管理系统');
    expect(markup).toContain('项目基础骨架已启动。');
  });
});
