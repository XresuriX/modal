import useModal from "use-modal-element";
import HomePageContent from "./HomePageContent";
import "./styles.css";

const App = (props) => {
  //or just useModal();
  const [Modal, toggleModal] = useModal({
    //can be [bool / Object]
    withBackground: {
      closable: true,
      scrollable: false,
      customClassName: ""
    },
    //can be [bool / Object]
    withCloseButton: {
      type: "default", // 'default', 'rounded', 'text'
      text: "",
      customClassName: ""
    },
    //can be [bool / Object]
    withControlButton: {
      type: "default", // 'default', 'outlined', 'text'
      text: "button",
      customClassName: "",
      action: () => {
        console.log("empty");
      }
    },
    additional: {
      customWrapperClassName: "",
      fullyShieldedMobile: true
    }
  });
  //all these settings are set by default
  //same as just [ useModal(); ]

  return (
    <div className="home-page">
      <h2>Home page</h2>
      <p>subtitle</p>
      <button onClick={toggleModal}>open modal</button>
      <HomePageContent />

      <Modal>
        <div>my content</div>
      </Modal>
    </div>
  );
};

export default App;
