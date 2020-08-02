const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

export default emails => {
  const invalidEmails = emails
    .split(',')
    .map(email => email.trim())
    .filter(email => EMAIL_REGEX.test(email) === false)

  if (invalidEmails.length) {
    return `These emails are invalid ${invalidEmails}`
  }

  return
}
