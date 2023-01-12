# World Cup Microapp ⚽ 🎉

A microapp for the 2022 World Cup in Qatar.
Shows live information about the Stadiums, Teams, Players, Matches and Groups.

## How It Works

- Group information is scrapped from different sources after each match using a Github Actions cron. Data is stored in Firebase and consumed from the app.

- Other information such as games statistics or live results are scrapped and shown on demand using Next API endpoints.

- Finall, static information (stadiums, teams, etc) is hardcoded and used without further manipulation.

## Tech Stack

- Next.js
- Tailwind
- Typescript
- Firebase
- Github Actions
- Vercel
- Plausible

## Getting Started

Run the development server:

```bash
npm run dev
```

## More Information

Most of the project was built in a few days, so there are some things that could be improved.

You won't need Firebase credentials, as the database has been completely removed. However, we have hardcoded the group stage information and made a few changes, so the project remains fully functional.

## Results

<img width="1101" alt="image" src="https://user-images.githubusercontent.com/37018474/212161030-c307048d-4f2b-402f-a7f9-e6dbaeb7b766.png">
