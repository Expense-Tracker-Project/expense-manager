export const checkEmail = (email) => String(email)
  .toLowerCase()
  .match(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  );

const invalidDomains = ['@eurokool.com'];

export const verifyFormDetails = (email) => !invalidDomains.filter((ele) => email.includes(ele)).length;


export const numbersOnly = (string) => {
    const pattern = /^[0-9]+$/;
    return pattern.test(string);
  }