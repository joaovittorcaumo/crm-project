import React from 'react';
// import { useMutation } from "react-query";
// import { httpClient } from "../http-client";

// interface UserLoginDto {
//   email: string;
//   password: string;
// }

// interface UserProfile {
//   cpf?: string;
//   professionId?: number;
//   universityId?: number;
//   course?: string;
//   schooling?: number;
//   dedicationTime?: number;
// }

// export interface CreateUser {
//     name: string;
//     email: string;
//     role: string;
//     password: string;
//     sector: string;
// }

// export const useCreateUserMutation = (
//   onError?: (error: Error) => void
// ) =>
//   useMutation({
//     mutationFn: (userData: CreateUser) =>
//       httpClient
//         .post("/register", userData)
//         .then((res) => res.data),
//     onError,
//   });

// export const useLoginMutation = (
//   userDto: UserLoginDto,
//   onError?: (error: Error) => void
// ) =>
//   useMutation({
//     mutationFn: () =>
//       httpClient.post("/login", userDto).then((res) => res.data),
//     onError,
//   });