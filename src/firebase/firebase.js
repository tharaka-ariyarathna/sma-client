import storage from './firebaseConfig' ;
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

export const uploadImage = async (image) => {
    const filename = Date.now() + image.name;
    const storageRef = ref(storage, `images/${filename}`);
    const uploadTask = uploadBytesResumable(storageRef, image);
    await uploadTask ;
    const url = await getDownloadURL(uploadTask.snapshot.ref) ;
    return url ;
  };
