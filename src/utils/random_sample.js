const randomSample = async (array, size) => {
  const samples = [];
  for (let i = 0; i < size; i++) {
    let idx = Math.floor(Math.random() * array.length);
    samples.push(array[idx]);
  }

  return samples;
};

export default randomSample;
