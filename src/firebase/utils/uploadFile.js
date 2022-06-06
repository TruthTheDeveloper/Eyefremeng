import { ref, uploadBytes, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from '../firebase-config';


const fileStorage = storage



export const uploadAFile = async imageUri => {
  console.log(' ready to uploadi this =>', imageUri);
  const uploadUri = imageUri;

  try {

    const storageRef = ref(fileStorage, `media/${uploadUri.name + }`);
    uploadBytes(storageRef, uploadUri).then((snapshot) => {
        console.log('Uploaded a raw string!');
      });

     const result =  getDownloadURL(storageRef)
      .then((url) => {
        return url
        // Insert url into an <img> tag to "download"
      })
      .catch((error) => {
        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        switch (error.code) {
          case 'storage/object-not-found':
            // File doesn't exist
            break;
          case 'storage/unauthorized':
            // User doesn't have permission to access the object
            break;
          case 'storage/canceled':
            // User canceled the upload
            break;
    
          // ...
    
          case 'storage/unknown':
            // Unknown error occurred, inspect the server response
            break;
        }
      });

      return result

    // const uploadTask = uploadBytesResumable(storageRef, uploadUri);
    

    //  uploadTask.on('state_changed', (snapshot) => {
    //   // Observe state change events such as progress, pause, and resume
    //   // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    //   const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    //   console.log('Upload is ' + progress + '% done');
    //   // eslint-disable-next-line default-case
    //   switch (snapshot.state) {
    //     case 'paused':
    //       console.log('Upload is paused');
    //       break;
    //     case 'running':
    //       console.log('Upload is running');
    //       break;
    //     }
    //   },
    //     (error) => {
    //       // Handle unsuccessful uploads
    //       console.log(error.code, 'upload unSucessful')
    //     }, 
    //     () => {

    //   //     getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
    //   //     console.log('File available at', downloadURL);

    //   //     return downloadURL
    //   // });

    //       // Handle successful uploads on complete
    //       // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          
    //   }
    // )

    // return  await getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
    //   console.log('File available at', downloadURL);

    //   return downloadURL
    // });
  } catch (err){
      console.log(err);
        return false;
  }
}


