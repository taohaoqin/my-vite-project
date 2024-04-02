
export function numberFormat (value) {
  if (value === undefined || value === null) {
    return '0'
  }
  const r = value.toString().replace(/\B(?=(\d{3})+$)/g, ',')
  return r
}