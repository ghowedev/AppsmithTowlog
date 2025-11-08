export default {
  flattened() {
    const data = getMakes.data;
		return Array.isArray(data) ? data : Object.values(data || {}).flat();
  }
}