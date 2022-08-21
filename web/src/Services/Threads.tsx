import api from 'Services';
import { CreateThreadDto, ThreadDto } from 'Types/Thread';

export const threadsApi = api.injectEndpoints({
  endpoints: (build) => ({
    getByBoardId: build.query<Array<ThreadDto>, string | undefined>({
      query: (boardId) => `threads?boardId=${boardId}`
    }),

    // Mutations
    createThread: build.mutation<ThreadDto, CreateThreadDto>({
      query: (payload) => ({
        url: 'threads',
        method: 'POST',
        body: payload
      })
    })
  })

  
})

export const { 
  useGetByBoardIdQuery,
  useCreateThreadMutation 
} = threadsApi