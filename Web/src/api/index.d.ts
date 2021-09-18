import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { gql } from '@apollo/client';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
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
  players?: Maybe<Array<Maybe<Player>>>;
  title?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createUser?: Maybe<User>;
};


export type MutationCreateUserArgs = {
  user?: Maybe<UserCreateInput>;
};

export type Player = {
  __typename?: 'Player';
  board?: Maybe<Board>;
  boardId: Scalars['Uuid'];
  id: Scalars['Uuid'];
  lastLog?: Maybe<Scalars['DateTime']>;
  lastPost?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  tag?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
  userId: Scalars['Uuid'];
};

export type Query = {
  __typename?: 'Query';
  boards?: Maybe<Array<Maybe<Board>>>;
  players?: Maybe<Array<Maybe<Player>>>;
  users?: Maybe<Array<Maybe<User>>>;
};

export type User = {
  __typename?: 'User';
  birthday: Scalars['DateTime'];
  email?: Maybe<Scalars['String']>;
  id: Scalars['Uuid'];
  password?: Maybe<Scalars['String']>;
  players?: Maybe<Array<Maybe<Player>>>;
  userName?: Maybe<Scalars['String']>;
  userType: Scalars['Int'];
};

export type UserCreateInput = {
  birthday: Scalars['DateTime'];
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  userName?: Maybe<Scalars['String']>;
  userType: Scalars['Int'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  ApplyPolicy: ApplyPolicy;
  Board: ResolverTypeWrapper<Board>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Mutation: ResolverTypeWrapper<{}>;
  Player: ResolverTypeWrapper<Player>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']>;
  User: ResolverTypeWrapper<User>;
  UserCreateInput: UserCreateInput;
  Uuid: ResolverTypeWrapper<Scalars['Uuid']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Board: Board;
  Boolean: Scalars['Boolean'];
  DateTime: Scalars['DateTime'];
  Int: Scalars['Int'];
  Mutation: {};
  Player: Player;
  Query: {};
  String: Scalars['String'];
  User: User;
  UserCreateInput: UserCreateInput;
  Uuid: Scalars['Uuid'];
};

export type AuthorizeDirectiveArgs = {
  apply?: ApplyPolicy;
  policy?: Maybe<Scalars['String']>;
  roles?: Maybe<Array<Scalars['String']>>;
};

export type AuthorizeDirectiveResolver<Result, Parent, ContextType = any, Args = AuthorizeDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type DeferDirectiveArgs = {
  if?: Maybe<Scalars['Boolean']>;
  label?: Maybe<Scalars['String']>;
};

export type DeferDirectiveResolver<Result, Parent, ContextType = any, Args = DeferDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type StreamDirectiveArgs = {
  if: Scalars['Boolean'];
  initialCount: Scalars['Int'];
  label?: Maybe<Scalars['String']>;
};

export type StreamDirectiveResolver<Result, Parent, ContextType = any, Args = StreamDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type BoardResolvers<ContextType = any, ParentType extends ResolversParentTypes['Board'] = ResolversParentTypes['Board']> = {
  id?: Resolver<ResolversTypes['Uuid'], ParentType, ContextType>;
  isDeleted?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isGeneral?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  ownerId?: Resolver<ResolversTypes['Uuid'], ParentType, ContextType>;
  players?: Resolver<Maybe<Array<Maybe<ResolversTypes['Player']>>>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationCreateUserArgs, never>>;
};

export type PlayerResolvers<ContextType = any, ParentType extends ResolversParentTypes['Player'] = ResolversParentTypes['Player']> = {
  board?: Resolver<Maybe<ResolversTypes['Board']>, ParentType, ContextType>;
  boardId?: Resolver<ResolversTypes['Uuid'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Uuid'], ParentType, ContextType>;
  lastLog?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  lastPost?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tag?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['Uuid'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  boards?: Resolver<Maybe<Array<Maybe<ResolversTypes['Board']>>>, ParentType, ContextType>;
  players?: Resolver<Maybe<Array<Maybe<ResolversTypes['Player']>>>, ParentType, ContextType>;
  users?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  birthday?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Uuid'], ParentType, ContextType>;
  password?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  players?: Resolver<Maybe<Array<Maybe<ResolversTypes['Player']>>>, ParentType, ContextType>;
  userName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  userType?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface UuidScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Uuid'], any> {
  name: 'Uuid';
}

export type Resolvers<ContextType = any> = {
  Board?: BoardResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  Mutation?: MutationResolvers<ContextType>;
  Player?: PlayerResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  Uuid?: GraphQLScalarType;
};

export type DirectiveResolvers<ContextType = any> = {
  authorize?: AuthorizeDirectiveResolver<any, any, ContextType>;
  defer?: DeferDirectiveResolver<any, any, ContextType>;
  stream?: StreamDirectiveResolver<any, any, ContextType>;
};


      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {}
};
      export default result;
    