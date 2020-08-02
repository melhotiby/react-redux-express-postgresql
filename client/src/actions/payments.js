export const HANDLE_STRIPE_TOKEN = 'HANDLE_STRIPE_TOKEN'

export const handleToken = token => {
  return {
    type: HANDLE_STRIPE_TOKEN,
    payload: { token }
  }
}
