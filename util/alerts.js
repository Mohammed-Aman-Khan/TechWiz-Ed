import toast from 'react-hot-toast'

export const showError = (msg = '') => toast.error(msg, { position: 'bottom-center' })

export const showSuccess = (msg = '') => toast.success(msg, { position: 'bottom-center' })