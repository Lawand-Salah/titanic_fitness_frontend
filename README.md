# Titanic Fitness — Frontend

The React frontend for Titanic Fitness, a workout-tracking app. Pairs with the [Titanic Fitness Backend](../TITANIC_FITNESS-BACKEND) (FastAPI) — both need to be running for authentication and the exercise database to work.

## Features

- **Home** — hero banner, feature grid, and an articles section (currently placeholder content — see Known Limitations)
- **Auth** — toggleable login/register form, talking to the backend's `/auth/login` and `/auth/register` endpoints
- **Profile** (nested routing under `/profile/*`):
  - **Exercise Database** — browse exercises pulled live from the public [wger.de](https://wger.de/) fitness API, filterable by category
  - **New Workout** — not yet built (see Known Limitations)
  - **Past Workouts**, **Track Weight/Calories/Mood** — nav items exist but aren't wired up to pages yet
- User session persisted via React Context + `localStorage`, so a logged-in user stays logged in across page refreshes

## Tech stack

- [React 18](https://react.dev/) (Create React App)
- [React Router v6](https://reactrouter.com/)
- [Axios](https://axios-http.com/) for API calls
- React Context API for shared user/auth state

## Getting started

```bash
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser. For login, registration, and the exercise database to work, the [backend](../TITANIC_FITNESS-BACKEND) needs to be running at the same time — the API calls here are hardcoded to `http://localhost:8001`, matching the backend's CORS setup which allows `http://localhost:3001`. (Worth double-checking those ports actually match your own setup when running both side by side.)

## Known limitations

- **Passwords end up stored in the browser.** `AuthForm.js` and `RegisterForm.js` both call `login(response.data)` with the backend's raw response — and because the backend's `/auth/login` and `/auth/register` currently return the full stored user record (including the plaintext password, per the backend's own known limitation), `UserContext.js` ends up writing that password straight into `localStorage` via `JSON.stringify(userData)`. It sits there, readable in dev tools, until the user logs out. The real fix needs to happen on the backend side — only return non-sensitive fields (email, username) from `/auth/login` and `/auth/register` — since the frontend can only store whatever it's given.
- **A real bug in the Exercise Database's API call.** In `ExerciseDb.js`, the wger.de endpoint is written as `"https:wger.de/api/v2/..."` — missing the `//` after `https:`. This isn't just a style nitpick: without `//`, there's no valid host in the URL for the browser to connect to (`wger.de` ends up as part of the *path*, not the *host*), so the request can't reach the real API. The sibling component, `CategoryFilter.js`, has the correct form (`"https://wger.de/..."`) right next to it, which makes this an easy one-line fix. This likely explains the commented-out caching logic in the same file — looks like an earlier attempt to debug a related issue without finding the actual cause.
- **A navigation mismatch.** The "Past Workouts" nav link in `Profile.js` points to `past_workout` (singular), but the route registered in `Pages.js` is `past_workouts` (plural) — so clicking that link currently goes nowhere. Also worth noting: `past_workouts` is currently just a placeholder `<div>`, not a real page yet.
- **`AddWorkout.js` is a stub.** It currently renders literal placeholder text (`temp`, `dsadsa`) with no form fields or submit logic, even though the backend already has a working `/workouts/add_exercise` endpoint ready to receive one.
- **`Home.js`'s articles section is placeholder content** — six `test` divs with no real articles yet.
- **Backend URL is hardcoded** (`http://localhost:8001/...`) directly in `AuthForm.js` and `RegisterForm.js`. Fine for local development, but would need to move to an environment variable before any real deployment.

## Author

Lawand Salah
