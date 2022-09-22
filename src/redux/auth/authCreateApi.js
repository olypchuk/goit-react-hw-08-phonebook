// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// const customQuery =fetchBaseQuery({
//   baseUrl: 'https://connections-api.herokuapp.com/users',
//   prepareHeaders: (headers, { getState }) => {
//     const mutations = getState().user.mutations
//     const reqId = Object.keys(mutations)
//     if (mutations[reqId]) {
     
//       if (mutations[reqId].data) {
        
//         const token = mutations[reqId].data.token;

//         headers.set('authorization', `Bearer ${token}`)
//         console.log('headers :>> ', headers);
//         return headers
//       }
     
//     }
 
//     return headers
//   },
// })

// export const userCreateApi = createApi({
//     reducerPath: 'user',

// baseQuery : customQuery,
//     tagTypes: ['user'],
//     endpoints: builder => ({
//         register: builder.mutation({
//             query: data => ({
//                 url: '/signup',
//                 method: 'POST',
//                 body: {
//                     name:data.name,
//                     email:data.email,
//                     password:data.password,
//                 }
//             }),
//             invalidatesTags:['user']
//         }),
//         login: builder.mutation({
//             query: data => ({
//                 url: '/login',
//                 method: 'POST',
//                 body:data,
//             }),
//               invalidatesTags:['user']
//         }),
//         logout: builder.mutation({
//             query: ()=> ({
//                 url: '/logout',
//                 method: 'POST',
//                 headers:{}
//               }),
//                 invalidatesTags:['user']
//           }),
//         current: builder.query({
//              query: () => '/current',
//                  providesTags:['user']
//          }) 
//     })
// })
// export const { useRegisterMutation, useLoginMutation, useLogoutMutation, useCurrentQuery } = userCreateApi



// const baseQuery = fetchBaseQuery({
//   baseUrl: 'https://connections-api.herokuapp.com/users',
//   prepareHeaders: (headers, { getState }) => {
//     const token = getState().auth.token

//     // If we have a token set in state, let's assume that we should be passing it.
//     if (token) {
//       headers.set('authorization', `Bearer ${token}`)
//     }

//     return headers
//   },
// })