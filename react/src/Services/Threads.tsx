import api from 'Services';
import { CreateThreadDto, ThreadDto } from 'Types/Thread';

export const threadsApi = api.injectEndpoints({
  endpoints: (build) => ({
    getByBoardId: build.query<Array<ThreadDto>, string | undefined>({
      query: (boardId) => `threads?boardId=${boardId}`,
      providesTags: ['threads']
    }),

    // Mutations
    createThread: build.mutation<ThreadDto, CreateThreadDto>({
      query: (payload) => ({
        url: 'threads',
        method: 'POST',
        body: payload
      }),
      invalidatesTags: ['threads']
    })
  })

  
})

export const { 
  useGetByBoardIdQuery,
  useCreateThreadMutation 
} = threadsApi