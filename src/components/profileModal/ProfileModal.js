import { Modal, useMantineTheme } from "@mantine/core";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { uploadImage } from "../../firebase/firebase";
import { updateUser } from "../../actions/UserAction";
import "../../pages/auth/Auth.css";

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

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    let userData = formData;
    let coverImageUrl;
    let profileImageUrl;
    if (profileImage) {
      profileImageUrl = await uploadImage(profileImage);
      userData.profileImage = profileImageUrl;
    }
    if (coverImage) {
      coverImageUrl = await uploadImage(coverImage);
      userData.coverImage = coverImageUrl;
    }
    dispatch(updateUser(params.id, userData));
    setModalOpened((prev) => !prev);
  };

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
            name="firstname"
            onChange={handleInputChange}
            value={formData.firstname}
          />
          <input
            type="text"
            className="infoInput"
            placeholder="Last Name"
            name="lastname"
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

        <button className="button infoButton" onClick={handleFormSubmit}>
          Update
        </button>
      </form>
    </Modal>
  );
};

export default ProfileModal;
