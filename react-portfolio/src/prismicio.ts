import { createClient as baseCreateClient, ClientConfig, Route } from "@prismicio/client";

/**
 * The project's Prismic repository name.
 */
export const repositoryName = "kmfoysal06";

/**
 * The project's Prismic route resolvers. This list determines a Prismic document's URL.
 */
const routes: Route[] = [
  { type: "page", uid: "home", path: "/" },
  { type: "page", path: "/:uid" },
];

/**
 * Creates a Prismic client for the project's repository. The client is used to
 * query content from the Prismic API.
 *
 * @param config - Configuration for the Prismic client.
 */
export function createClient(config: ClientConfig = {}) {
  const client = baseCreateClient(repositoryName, {
    routes,
    ...config,
  });

  return client;
}