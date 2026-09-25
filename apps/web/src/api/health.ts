import type { HealthResponse } from '@shift-management/shared';

const configuredBaseUrl = import.meta.env.VITE_API_BASE_URL?.replace(/\/$/, '') ?? '';

export async function getHealth(): Promise<HealthResponse> {
  const response = await fetch(`${configuredBaseUrl}/api/health`);

  if (!response.ok) {
    throw new Error(`Health check failed with HTTP ${response.status}`);
  }

  return (await response.json()) as HealthResponse;
}
