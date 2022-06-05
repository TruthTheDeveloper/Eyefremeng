import { ref, uploadBytes, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from '../firebase-config';


const fileStorage = storage



export const uploadAFile = async imageUri => {
  console.log(' ready to uploadi this =>', imageUri);
  const uploadUri = imageUri;

  try {

    const storageRef = ref(fileStorage, `media/${uploadUri}`);
    uploadBytes(storageRef, uploadUri).then((snapshot) => {
        console.log('Uploaded a raw string!');
      });

    const uploadTask = uploadBytesResumable(storageRef, uploadUri);
    

     uploadTask.on('state_changed', (snapshot) => {
      // Observe state change events such as progress, pause, and resume
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log('Upload is ' + progress + '% done');
      // eslint-disable-next-line default-case
      switch (snapshot.state) {
        case 'paused':
          console.log('Upload is paused');
          break;
        case 'running':
          console.log('Upload is running');
          break;
        }
      },
        (error) => {
          // Handle unsuccessful uploads
          console.log(error.code, 'upload unSucessful')
        }, 
        () => {

      //     getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      //     console.log('File available at', downloadURL);

      //     return downloadURL
      // });

          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          
      }
    )

    return  await getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      console.log('File available at', downloadURL);

      return downloadURL
    });
  } catch (err){
      console.log(err);
        return false;
  }
}


