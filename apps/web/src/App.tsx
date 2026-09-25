import { useEffect, useState } from 'react';
import { PROJECT_NAME } from '@shift-management/shared';

import { getHealth } from './api/health';

type HealthState = 'checking' | 'available' | 'unavailable';

export function App() {
  const [healthState, setHealthState] = useState<HealthState>('checking');

  useEffect(() => {
    void getHealth()
      .then(() => setHealthState('available'))
      .catch(() => setHealthState('unavailable'));
  }, []);

  return (
    <main>
      <h1>{PROJECT_NAME}</h1>
      <p>项目基础骨架已启动。</p>
      <p aria-live="polite">
        API 健康检查：
        {healthState === 'checking' && '检查中'}
        {healthState === 'available' && '可用'}
        {healthState === 'unavailable' && '暂不可用，请启动 API 服务。'}
      </p>
    </main>
  );
}
