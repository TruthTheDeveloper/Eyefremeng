/* eslint-disable default-case */
import {
  ref,
  uploadBytes,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { storage } from "../firebase-config";
import { v4 } from "uuid";

const fileStorage = storage;

export const uploadAFile = async (imageUri) => {
  const uploadUri = imageUri;

  try {
    const storageRef = ref(fileStorage, `media/${uploadUri.name + v4()}`);
    const result = uploadBytes(storageRef, uploadUri).then((snapshot) => {
      return storageRef;
    });

    return getDownloadURL(await result)
      .then((url) => {
        return url;
        // Insert url into an <img> tag to "download"
      })
      .catch((error) => {
        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        switch (error.code) {
          case "storage/object-not-found":
            // File doesn't exist
            break;
          case "storage/unauthorized":
            // User doesn't have permission to access the object
            break;
          case "storage/canceled":
            // User canceled the upload
            break;

          // ...

          case "storage/unknown":
            // Unknown error occurred, inspect the server response
            break;
        }
      });
  } catch (err) {
    console.log(err);
    return false;
  }
};
