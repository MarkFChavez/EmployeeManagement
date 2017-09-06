import { EMAIL_CHANGED, PASSWORD_CHANGED } from './types';

const emailChange = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  }
}

const passwordChange = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  }
}

export { emailChange, passwordChange }
