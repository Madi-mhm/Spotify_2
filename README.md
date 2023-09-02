# Spotify API Project

This is a Next.js/React.js project that utilizes the Spotify API to create a music application. The application allows users to search for artists, view artist details and add/remove tracks from their favorites. Please note that the data is not persisted and will be cleared upon page reload.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

## Table of Contents
- [Spotify API](#spotify-api)
- [Functionalities](#functionalities)
- [Technical Specifications](#technical-specifications)

## Spotify API
🌐 Visit [https://developer.spotify.com/](https://developer.spotify.com/) to access the Spotify API.

To use the Spotify API, you need to create an account on the Spotify website (the streaming platform). You can use your existing account if you have one.

Navigate to the "documentation" section in the navigation bar and select "Web API".

All the necessary information for using the API can be found in the "Getting Started" section. Follow the steps provided. Additional resources are available on the internet, such as YouTube tutorials and articles.

Spotify API Documentation: 🌐 [https://developer.spotify.com/documentation/web-api](https://developer.spotify.com/documentation/web-api)

## Functionalities
- Navigation Bar: Allows users to search for artists. Upon submitting a search, users are redirected to the search page where the search results are displayed.
- Search Page: Displays the most relevant X items related to the search. Pagination is implemented if there are more than X items.
- Artist Details Page: Shows relevant data about the artist.
- Favorites System: Users can create playlists and add/remove tracks from their favorites. Note that this data is not persisted and will be cleared upon page reload.

Feel free to explore additional ideas, such as suggesting similar artists on the artist details page or allowing users to sort search results by categories.

Please note that the instructions are provided in English and should not be too lengthy.

