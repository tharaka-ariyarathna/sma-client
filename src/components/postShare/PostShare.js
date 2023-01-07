import React, { useState, useRef } from "react";
import DefaultImage from "../../img/avatar1.png";
import "./PostShare.css";
import {
  UilScenery,
  UilPlayCircle,
  UilLocationPoint,
  UilSchedule,
  UilTimes,
} from "@iconscout/react-unicons";
import { useDispatch, useSelector } from "react-redux";
import { uploadPost } from "../../actions/UploadActions";
import { uploadImage } from "../../firebase/firebase";

const PostShare = () => {
  const [image, setImage] = useState(null);
  const imageRef = useRef();
  const description = useRef();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.Authreducer.authData.data);
  const uploading = useSelector((state) => state.PostReducer.uploading);

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

  const handleImageSubmit = async (e) => {
    const newPost = {
      userId: user._id,
      description: description.current.value,
      image: image.name,
    };
    if (image) {
      const imageUrl = await uploadImage(image);
      newPost.image_url = imageUrl;
    }
    dispatch(uploadPost(newPost));
    reset();
  };

  return (
    <div className="postShare">
      <img
        src={user.profileImage ? user.profileImage : DefaultImage}
        alt="User"
      />
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
