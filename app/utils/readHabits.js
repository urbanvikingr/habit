import dbUrl from '../constants/dbUrl'
import { readDoc } from '../utils/readDoc'

export const readHabits = () => {
  return readDoc(`${dbUrl}/habit`).then(res => res.json()).catch(err => err)
}
