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
export type UpdatePostMutationVariables = Types.Exact<{
  input?: Types.Maybe<Types.PostInput>;
}>;


export type UpdatePostMutation = { __typename?: 'Mutation', updatePost?: { __typename?: 'Message', confirmationMessage: string } | null | undefined };


export const UpdatePostDocument = `
    mutation UpdatePost($input: PostInput) {
  updatePost(input: $input) {
    confirmationMessage
  }
}
    `;

const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    UpdatePost: build.mutation<UpdatePostMutation, UpdatePostMutationVariables | void>({
      query: (variables) => ({ document: UpdatePostDocument, variables })
    }),
  }),
});

export { injectedRtkApi as api };
export const { useUpdatePostMutation } = injectedRtkApi;

