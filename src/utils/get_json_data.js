export const getJSONData = async (file) => {
  const response = await fetch(file, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });
  const data = await response.json();
  return data;
};
