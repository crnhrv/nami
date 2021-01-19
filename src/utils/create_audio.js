export const createAudio = (obj) => {
  const audio = new Audio(obj.url);
  return {
    ...obj,
    audio,
  };
};
