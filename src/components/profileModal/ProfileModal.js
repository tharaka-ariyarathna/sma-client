import { Modal, useMantineTheme } from "@mantine/core";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import storage from "../../firebase/firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import "../../pages/auth/Auth.css";
import avatar from "../../img/boats_paris.jpg";
import { async } from "@firebase/util";

const ProfileModal = ({ modalOpened, setModalOpened, data }) => {
  const theme = useMantineTheme();

  const { password, ...other } = data;
  const [formData, setFormData] = useState(other);
  const [profileImage, setProfileImage] = useState(null);
  const [coverImage, setCoverImage] = useState(null);
  const dispatch = useDispatch();
  const params = useParams();
  const { user } = useSelector((state) => state.Authreducer.authData.data);

  const handleInputChange = (e) => {
    const fieldName = e.target.name;
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    if (e.target.files) {
      let img = e.target.files[0];
      e.target.name === "profileImage"
        ? setProfileImage(img)
        : setCoverImage(img);
    }
  };

  const uploadImage = async (image, target) => {
    console.log(profileImage) ;
    if (profileImage) {
      //const image = profileImage ;
      try {
        const filename = Date.now() + image.name;
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
          async () => {
            await getDownloadURL(uploadTask.snapshot.ref).then(
              (downloadURL) => {
                target === "profileImage"
                ? setFormData({ ...formData, ["profileImage"]: downloadURL })
                : setFormData({ ...formData, ["coverImage"]: downloadURL });
              }
            );
          }
        );
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    uploadImage(profileImage, "profileImage") ;
    console.log(formData)
  },[profileImage])

  return (
    <Modal
      overlayColor={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.55}
      size="55%"
      overlayBlur={3}
      opened={modalOpened}
      onClose={() => setModalOpened(false)}
    >
      <form className="infoForm">
        <h3>Edit your info</h3>

        <div>
          <input
            type="text"
            className="infoInput"
            placeholder="First Name"
            name="firstName"
            onChange={handleInputChange}
            value={formData.firstname}
          />
          <input
            type="text"
            className="infoInput"
            placeholder="Last Name"
            name="lastName"
            onChange={handleInputChange}
            value={formData.lastname}
          />
        </div>

        <div>
          <input
            type="text"
            className="infoInput"
            placeholder="Relationship Status"
            name="relationship"
            onChange={handleInputChange}
            value={formData.relationship}
          />
        </div>

        <div>
          <input
            type="text"
            className="infoInput"
            placeholder="Lives In"
            name="livesIn"
            onChange={handleInputChange}
            value={formData.livesIn}
          />
          <input
            type="text"
            className="infoInput"
            placeholder="Country"
            name="country"
            onChange={handleInputChange}
            value={formData.country}
          />
        </div>

        <div>
          <input
            type="text"
            className="infoInput"
            placeholder="Works At"
            name="worksAt"
            onChange={handleInputChange}
            value={formData.worksAt}
          />
        </div>

        <div>
          Profile Image
          <input type="file" name="profileImage" onChange={handleImageChange} />
          Cover Image
          <input type="file" name="coverImage" onChange={handleImageChange} />
        </div>
      </form>
    </Modal>
  );
};

export default ProfileModal;
