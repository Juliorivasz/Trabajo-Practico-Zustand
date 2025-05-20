export function generateUniqueId(): string {
  const timestamp = Date.now().toString(36); // Convert timestamp to base-36 for shorter string
  const randomNum = Math.random().toString(36).substring(2, 9); // Random part, adjust length as needed
  return `${timestamp}-${randomNum}`;
}
