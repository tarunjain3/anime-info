const today = new Date();

const options = { weekday: 'long', day: 'numeric', month: 'long' };
export const formattedDate = new Intl.DateTimeFormat('en-US', options).format(today);

console.log(formattedDate); 