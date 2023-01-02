import { Modal, useMantineTheme } from "@mantine/core";
import "../../pages/auth/Auth.css";

const ProfileModal = ({ modalOpened, setModalOpened }) => {
  const theme = useMantineTheme();

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
          />
          <input
            type="text"
            className="infoInput"
            placeholder="Last Name"
            name="lastName"
          />
        </div>

        <div>
          <input
            type="text"
            className="infoInput"
            placeholder="Relationship Status"
            name="relationshipStatus"
          />
        </div>

        <div>
          <input
            type="text"
            className="infoInput"
            placeholder="Lives In"
            name="livesIn"
          />
          <input
            type="text"
            className="infoInput"
            placeholder="Country"
            name="country"
          />
        </div>

        <div>
          <input
            type="text"
            className="infoInput"
            placeholder="Works At"
            name="worksAt"
          />
        </div>

        <div>
          Profile Image
          <input type="file" name="profileImage" />
          Cover Image
          <input type="file" name="coverImage" />
        </div>
      </form>
    </Modal>
  );
};

export default ProfileModal;
