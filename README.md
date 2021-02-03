# Reproduction

1. Install deps via `yarn`
2. Launch the application in dev mode via `yarn dev`
3. Go to http://localhost:3000/async and http://localhost:3000/fetch in new tabs
4. See that the TTFB is roughly a magnitude different

To ensure it is not caused by underlying `fetch`:

1. Go to Go to http://localhost:3000/async-o and http://localhost:3000/fetch-o in new tabs. These are options-api "equivalents"
2. See that TTFB is roughly the same