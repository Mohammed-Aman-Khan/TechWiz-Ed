import toast from 'react-hot-toast'

export const showError = (msg = '') => toast.error(msg, { position: 'bottom-center' })