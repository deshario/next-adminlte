import { selector, selectorFamily } from 'recoil'
import { deviceState } from './atoms'

export const countState = selector({
  key: 'count',
  get: ({get}) => {
    const username = get(deviceState)
    return username.length
  }
})

export const usersQuery = selector({
    key: 'usersQuery',
    get: async () => {
      // const res = await fetch(`https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=KBQKHojVT4azUQKJLwT1099IJdQyXDfo`)
      const res = await fetch('https://jsonplaceholder.typicode.com/users/')
      return res.json();
    }
})

export const userByIdQuery = selectorFamily({
    key: 'userByIdQuery',
    get: (id) => async () => {
      const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      return res.json();
    }
})