# BugSnap · Verified Product Facts

> Verified: 2026-11-17
>
> Sources: first-party BugSnap README, product document, technical guide, App Store Connect, Apple's public lookup API, and current iOS screenshots

## Structured facts used by the website

1. BugSnap turns screenshots, photos, recordings, files, clipboard media, and iOS Share Sheet imports into structured GitHub Issues.
2. Reports can contain up to 20 media attachments.
3. Users can annotate images, add reproduction context, select GitHub metadata, and review the final Issue before creation.
4. BugSnap does not need repository source-code access for its core reporting flow.
5. GitHub authorization is limited to repositories selected when installing the BugSnap GitHub App.
6. Long-term GitHub App credentials and object-storage credentials remain on the server, not in the mobile client.
7. Temporary media that is not attached to a successfully created Issue is retained for 30 days by default.
8. Local drafts and retryable submissions support recovery across interruptions and weak networks.
9. BugSnap is available on the App Store for iPhone and iPad. Apple's public lookup API confirmed version 0.1.0 on 2026-11-17; Android is being migrated toward feature parity.
10. The App Store download destination is `https://apps.apple.com/app/id6804155816` (BugSnap: GitHub Issues).

## Copy implications

- Use “available on the App Store” and link to the verified app ID.
- Only promote features included in the public App Store version. Pending updates, including Duo adaptation while 0.2.0 awaits review, must not be described as already available.
- Describe Android as being brought to parity, not as a released product.
- Do not invent testimonials, customer counts, time-saved statistics, or availability dates.
- Prefer concrete workflow and privacy facts over broad productivity claims.
