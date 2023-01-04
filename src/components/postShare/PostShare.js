import React, { useState, useRef } from "react";
import ProfileImage from "../../img/profileImg.jpg";
import "./PostShare.css";
import {
  UilScenery,
  UilPlayCircle,
  UilLocationPoint,
  UilSchedule,
  UilTimes,
} from "@iconscout/react-unicons";
import { useDispatch, useSelector } from "react-redux";
import { uploadImage, uploadPost } from "../../actions/UploadActions";
import storage from "../../firebase/firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

const PostShare = () => {
  const [image, setImage] = useState(null);
  const imageRef = useRef();
  const description = useRef();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.Authreducer.authData.data);
  const uploading = useSelector((state) => state.postReducer.uploading);

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage(img);
    }
  };

  const reset = () => {
    setImage(null);
    description.current.value = "";
  };

  const handleImageSubmit = (e) => {
    const newPost = {
      userId: user._id,
      description: description.current.value,
    };

    if (image) {
      const data = new FormData();
      const filename = Date.now() + image.name;
      data.append("name", filename);
      data.append("file", image);
      newPost.image = filename;

      try {
        const storageRef = ref(storage, `images/${filename}`);
        const uploadTask = uploadBytesResumable(storageRef, image);

        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress = Math.round(
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
          },
          (error) => {
            alert(error);
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              console.log(downloadURL);
              newPost.image_url = downloadURL;
              console.log(newPost);
              dispatch(uploadPost(newPost));
            });
          }
        );
        //dispatch(uploadImage(data));
      } catch (error) {
        console.log(error);
      }

      reset();
    }
  };

  return (
    <div className="postShare">
      <img src={ProfileImage} alt="User" />
      <div>
        <input
          type="text"
          placeholder="What is on Your mind?"
          ref={description}
          required
        />
        <div className="postOption">
          <div
            className="option"
            style={{ color: "var(--photo)" }}
            onClick={() => imageRef.current.click()}
          >
            <UilScenery />
            Photo
          </div>
          <div className="option" style={{ color: "var(--video)" }}>
            <UilPlayCircle />
            Video
          </div>
          <div className="option" style={{ color: "var(--location)" }}>
            <UilLocationPoint />
            Location
          </div>
          <div className="option" style={{ color: "var(--schedule)" }}>
            <UilSchedule />
            Schedule
          </div>
          <button
            className="button ps-button"
            onClick={handleImageSubmit}
            disabled={uploading}
          >
            {uploading ? "Uploading" : "Share"}
          </button>
          <div style={{ display: "none" }}>
            <input
              type="file"
              name="myImage"
              ref={imageRef}
              onChange={onImageChange}
            />
          </div>
        </div>

        {image && (
          <div className="previewImage">
            <UilTimes onClick={() => setImage(null)} />
            <img src={URL.createObjectURL(image)} />
          </div>
        )}
      </div>
    </div>
  );
};

export default PostShare;
