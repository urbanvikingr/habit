import dbUrl from '../constants/dbUrl'
import { updateDoc } from '../utils/updateDoc'

export const checkHabit = h => {
  const d = new Date()
  const data = {
    habits: {
      title: h.title,
      checked: d.toJSON()
    }
  }
  return updateDoc(`${dbUrl}/customer`, data).then(res => res.json()).then(doc => {
    return doc
  }).catch(err => err)
}