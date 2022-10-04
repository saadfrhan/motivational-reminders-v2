/* eslint-disable */ /**
 *
 * THIS FILE IS AUTOGENERATED, DO NOT EDIT IT!
 *
 * instead, edit one of the `.graphql` files in this project and run
 *
 * npm run graphql-codegen
 *
 * for this file to be re-created
 */

import * as Types from '../../app/services/types.generated';

import { api } from '../../app/services/baseApi';
export type TotalNumberOfPostsOfEachCategoryQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type TotalNumberOfPostsOfEachCategoryQuery = { __typename?: 'Query', getTotalNumberOfPosts: Array<{ __typename?: 'Category', totalPosts: number, name: string } | null | undefined> };


export const TotalNumberOfPostsOfEachCategoryDocument = `
    query TotalNumberOfPostsOfEachCategory {
  getTotalNumberOfPosts {
    totalPosts
    name
  }
}
    `;

const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    TotalNumberOfPostsOfEachCategory: build.query<TotalNumberOfPostsOfEachCategoryQuery, TotalNumberOfPostsOfEachCategoryQueryVariables | void>({
      query: (variables) => ({ document: TotalNumberOfPostsOfEachCategoryDocument, variables })
    }),
  }),
});

export { injectedRtkApi as api };
export const { useTotalNumberOfPostsOfEachCategoryQuery, useLazyTotalNumberOfPostsOfEachCategoryQuery } = injectedRtkApi;

