# Thought Process

In this document describe how I tackle the problem step by step.

1. Configure Git locally and remotely
2. Check the API and how the data was send back to the client.
3. Create types that match the request.
4. Set a provider to get the random data and its utils.
5. Begun Building the layout. Here I notice it was better to have a "theme" to share different styles between components.
  - Decided to go with NextJs styles becuase was already built in and is extensible (almost as styled components)
6. Built the Recipe UI Card and Grid so can be display on mobile screens as well as larger ones.
7. On the **4 hour** mark I just finished a basic layout that renders the random recipes. Also, set NextJs Image to handle lazy loading on them.
8. Build the IconButon as well as Icons begin on Search implementation.
9. Create the search provider with getters and setters to get and set data from input.
  - After this, the UI was set in place to conect with the data.
10. Did a refactor on the NextJs-Image because it was share amoung components.
11. Set the enpoint to get data for the detail page.
12. Create the Detail Page UI and did a couple of refactors on the way.
13. For the Favorites create the provider
  - Then did the UI, and because I set it very similar to the Home page I just reused the components :)
14. Add End to End testing with cypress.

