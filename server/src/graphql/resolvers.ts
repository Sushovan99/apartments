import { listings } from '../listings';

export const resolvers = {
  Query: {
    listings: () => listings,
  },

  Mutation: {
    deleteListing: (
      _parent: undefined,
      { id }: { id: string },
      _context: unknown
    ) => {
      const findIndex = listings.findIndex((el) => el.id === id);
      const [deletedListing] = listings.splice(findIndex, 1);
      return deletedListing;
    },
  },
};
