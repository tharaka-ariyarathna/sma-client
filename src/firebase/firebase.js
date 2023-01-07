import storage from './firebaseConfig' ;
import { getDownloadURL, ref, uploadBytesResumable, deleteObject } from "firebase/storage";

export const uploadImage = async (image) => {
    const filename = Date.now() + image.name;
    const storageRef = ref(storage, `images/${filename}`);
    const uploadTask = uploadBytesResumable(storageRef, image);
    await uploadTask ;
    const url = await getDownloadURL(uploadTask.snapshot.ref) ;
    return url ;
  };

export const deleteImage = (imageUrl) => {
    const desertRef = ref(storage, imageUrl);
    deleteObject(desertRef)
}
