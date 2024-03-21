export function objectToQueryString(obj: Record<string, any>): string {
  const params = new URLSearchParams();

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      // Convert values to strings (or handle them based on your requirements)
      params.append(key, String(obj[key]));
    }
  }

  return params.toString();
}
