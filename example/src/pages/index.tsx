import React from "react"
import { GoogleLoginProvider } from "../../../src/index"

/*
const LoginButton = withGoogleLogin(({ googleLogin }) =>
  !googleLogin.isSignedIn ? (
    <button
      onClick={() => {
        googleLogin.auth && googleLogin.auth.signIn()
      }}
    >
      Login
    </button>
  ) : (
    <button
      onClick={() => {
        googleLogin.auth && googleLogin.auth.signOut()
      }}
    >
      Logout
    </button>
  )
)
*/

export default () => (
  <GoogleLoginProvider
    client_config={{
      client_id: "948918026196-dec5ajlum2261cat9ceqccj9aes3th2u.apps.googleusercontent.com",
    }}
  >
    <div>Test</div>
  </GoogleLoginProvider>
)
