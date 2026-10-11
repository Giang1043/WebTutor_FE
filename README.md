# WebTutor_FE

Frontend foundation for the rebuild project. The current milestone contains
only the registration and email OTP screens.

## Included scope

- React and Vite application foundation.
- React Router route shell.
- Redux Toolkit store for register/OTP request state.
- Axios API client.
- Register form with client-side validation.
- OTP verification and resend screens.

Login, profile, tutor, class, chat, payment and admin screens will be added in
later rebuild milestones.

## Local setup

```powershell
npm install
Copy-Item .env.example .env
npm run dev
```

Set `VITE_API_BASE_URL` to the backend API, for example
`http://localhost:5002/api`.

## Validation

```powershell
npm run lint
npm run build
```
