/**
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {initializeApp} from 'firebase/app'
import {getAuth, signInAnonymously} from 'firebase/auth'
import {getFunctions, httpsCallable} from 'firebase/functions'

// TODO: Replace the below with your app's Firebase project configuration.
// To view and copy the Firebase configuration object for your app, visit the
// “Project settings” page in the Firebase console and scroll down to the
// "Your apps" section.
const firebaseConfig = {
  apiKey: "AIzaSyAe2LzXFI7YsUA08UYgU1zBh3fj8acP1mA",
  authDomain: "testpalmapi-4ea35.firebaseapp.com",
  projectId: "testpalmapi-4ea35",
  storageBucket: "testpalmapi-4ea35.appspot.com",
  messagingSenderId: "613523604388",
  appId: "1:613523604388:web:6d195b71dfb957a9537731",
  measurementId: "G-DGYD0W3NY5"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

// Authenticate
signInAnonymously(auth).catch(error => {
  console.error("Error",error.message)
})

// TODO: Insert the Cloud Functions location for your PaLM Secure Backend extension.
const CLOUD_FUNCTIONS_LOCATION = 'australia-southeast1'

// TODO: Insert the instance ID for your Call PaLM API Securely extension.
// You can find the instance ID for your extension on the "Extensions" page
// in the Firebase console. Locate the extension's instance card, and the
// instance ID is the bottommost value.
const INSTANCE_ID = 'palm-secure-backend'

// Import Firebase functions
const functions = getFunctions(app, CLOUD_FUNCTIONS_LOCATION)
export const post = httpsCallable(functions, `ext-${INSTANCE_ID}-post`)
