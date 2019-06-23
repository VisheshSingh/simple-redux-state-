const increment = num => {
  return {
    type: 'DECREMENT',
    payload: num
  };
};

export default increment;
