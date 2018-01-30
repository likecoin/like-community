export const images = require.context('../assets/');

export const imgUrl = path => images(`./${path}`);
