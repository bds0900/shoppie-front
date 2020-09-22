# Web Developer Intern Challenge - Winter 2021
Published at https://bds0900.github.io/shoppie-front/
## The Shoppies: Movie awards for entrepreneurs
Shopify has branched out into movie award shows and we need your help. Please build us an
app to help manage our movie nominations for the upcoming Shoppies.
## The Challenge

We need a webpage that can search [OMDB](https://www.omdbapi.com/) for movies, and allow the user to save their
favourite films they feel should be up for nomination. When they've selected 5 nominees they
should be notified they're finished.

We'd like a simple to use interface that makes it easy to:
- Search OMDB and display the results (movies only)
- Add a movie from the search results to our nomination list
- View the list of films already nominated
- Remove a nominee from the nomination list

## Technical requirements
1. Search results should come from OMDB's API (free API key:
http://www.omdbapi.com/apikey.aspx ).
2. Each search result should list at least its title, year of release and a button to nominate
that film.
3. Updates to the search terms should update the result list
4. Movies in search results can be added and removed from the nomination list.
5. If a search result has already been nominated, disable its nominate button.
6. Display a banner when the user has 5 nominations.

## Extras
There is a lot to be improved on here, you can polish the required features by crafting a nicer
design, or improve the app by adding new features! Choose something that you feel best
showcases your passion and skills.
If you need inspiration, here are examples of what you can work on. If you work on these ideas,
**we recommend choosing only one or two.** 
- Save nomination lists if the user leaves the page
- Animations for loading, adding/deleting movies, notifications
- Create shareable links

## Tech I used in challenge
- TypeScript
- React
- HTML
- CSS

## Extras
 * [x] Save nomination lists if the user leaves the page  
 * [ ] Animations for loading, adding/deleting movies, notifications
 * [x] Create shareable links


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
