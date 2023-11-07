// api.js
import { post } from '../firebase.config';

export async function postToPalm(data) {
  try {
    // Use the post function from firebase.config.js to make the POST request
    const response = await post(data);
    return response.data;
  } catch (error) {
    throw error;
  }
}
