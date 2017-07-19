export default (min = 1, max = 50) =>
  Math.floor(Math.random() * (1 + (Math.ceil(max) - Math.ceil(min)))) + Math.ceil(min);
