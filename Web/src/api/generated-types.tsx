import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `DateTime` scalar represents an ISO-8601 compliant date time type. */
  DateTime: any;
  Uuid: any;
};

export enum ApplyPolicy {
  AfterResolver = 'AFTER_RESOLVER',
  BeforeResolver = 'BEFORE_RESOLVER'
}

export type Board = {
  __typename?: 'Board';
  id: Scalars['Uuid'];
  isDeleted: Scalars['Boolean'];
  isGeneral: Scalars['Boolean'];
  ownerId: Scalars['Uuid'];
  players: Maybe<Array<Maybe<Player>>>;
  title: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createUser: Maybe<User>;
};


export type MutationCreateUserArgs = {
  user: Maybe<UserCreateInput>;
};

export type Player = {
  __typename?: 'Player';
  board: Maybe<Board>;
  boardId: Scalars['Uuid'];
  id: Scalars['Uuid'];
  lastLog: Maybe<Scalars['DateTime']>;
  lastPost: Maybe<Scalars['DateTime']>;
  name: Maybe<Scalars['String']>;
  tag: Maybe<Scalars['String']>;
  user: Maybe<User>;
  userId: Scalars['Uuid'];
};

export type Query = {
  __typename?: 'Query';
  boards: Maybe<Array<Maybe<Board>>>;
  players: Maybe<Array<Maybe<Player>>>;
  users: Maybe<Array<Maybe<User>>>;
  validateUser: Maybe<User>;
};


export type QueryValidateUserArgs = {
  password: Maybe<Scalars['String']>;
  userName: Maybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  birthday: Scalars['DateTime'];
  email: Maybe<Scalars['String']>;
  id: Scalars['Uuid'];
  password: Maybe<Scalars['String']>;
  players: Maybe<Array<Maybe<Player>>>;
  userName: Maybe<Scalars['String']>;
  userType: Scalars['Int'];
};

export type UserCreateInput = {
  birthday: Scalars['DateTime'];
  email: Maybe<Scalars['String']>;
  password: Maybe<Scalars['String']>;
  userName: Maybe<Scalars['String']>;
  userType: Scalars['Int'];
};

export type CreateUserMutationVariables = Exact<{
  user: UserCreateInput;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser: Maybe<{ __typename?: 'User', id: any, userName: Maybe<string>, email: Maybe<string>, birthday: any, userType: number }> };

export type ValidateUserQueryVariables = Exact<{
  userName: Scalars['String'];
  password: Scalars['String'];
}>;


export type ValidateUserQuery = { __typename?: 'Query', validateUser: Maybe<{ __typename?: 'User', id: any, userName: Maybe<string>, userType: number, email: Maybe<string>, birthday: any }> };

export type GetUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersQuery = { __typename?: 'Query', users: Maybe<Array<Maybe<{ __typename?: 'User', userName: Maybe<string>, userType: number }>>> };


export const CreateUserDocument = gql`
    mutation CreateUser($user: UserCreateInput!) {
  createUser(user: $user) {
    id
    userName
    email
    birthday
    userType
  }
}
    `;
export type CreateUserMutationFn = Apollo.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      user: // value for 'user'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, options);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;
export const ValidateUserDocument = gql`
    query ValidateUser($userName: String!, $password: String!) {
  validateUser(userName: $userName, password: $password) {
    id
    userName
    userType
    email
    birthday
  }
}
    `;

/**
 * __useValidateUserQuery__
 *
 * To run a query within a React component, call `useValidateUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useValidateUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useValidateUserQuery({
 *   variables: {
 *      userName: // value for 'userName'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useValidateUserQuery(baseOptions: Apollo.QueryHookOptions<ValidateUserQuery, ValidateUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ValidateUserQuery, ValidateUserQueryVariables>(ValidateUserDocument, options);
      }
export function useValidateUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ValidateUserQuery, ValidateUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ValidateUserQuery, ValidateUserQueryVariables>(ValidateUserDocument, options);
        }
export type ValidateUserQueryHookResult = ReturnType<typeof useValidateUserQuery>;
export type ValidateUserLazyQueryHookResult = ReturnType<typeof useValidateUserLazyQuery>;
export type ValidateUserQueryResult = Apollo.QueryResult<ValidateUserQuery, ValidateUserQueryVariables>;
export const GetUsersDocument = gql`
    query GetUsers {
  users {
    userName
    userType
  }
}
    `;

/**
 * __useGetUsersQuery__
 *
 * To run a query within a React component, call `useGetUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUsersQuery(baseOptions?: Apollo.QueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
      }
export function useGetUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
        }
export type GetUsersQueryHookResult = ReturnType<typeof useGetUsersQuery>;
export type GetUsersLazyQueryHookResult = ReturnType<typeof useGetUsersLazyQuery>;
export type GetUsersQueryResult = Apollo.QueryResult<GetUsersQuery, GetUsersQueryVariables>;