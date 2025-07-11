// Metodik_FE/src/api/api.ts
// This file contains API-related functions for fetching data from the backend.
import { API_BASE_URL } from "../config";

export async function fetchData(endpoint: string) {
  if (!endpoint.startsWith('/')) endpoint = '/' + endpoint;
  const response = await fetch(`${API_BASE_URL}${endpoint}`);
  if (!response.ok) {
    throw new Error('Error fetching data');
  }
  return await response.json();
}
