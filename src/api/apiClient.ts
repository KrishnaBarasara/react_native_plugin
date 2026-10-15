export const apiGet = async (url: string, params?: Record<string, any>) => {
  const query = params ? '?' + new URLSearchParams(params).toString() : '';
  const res = await fetch(url + query);
  return handleResponse(res);
};

export const apiPost = async (url: string, body?: any) => {
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  return handleResponse(res);
};

export const handleError = (error: any) => {
  console.error('API Error:', error);
  throw new Error(error.message || 'Network error');
};

const handleResponse = async (res: Response) => {
  if (!res.ok) throw new Error(`HTTP Error: ${res.status}`);
  return res.json();
};
