import { ChatEngine } from "react-chat-engine";
import "./App.css";
import ChatFeed from "./components/ChatFeed.jsx";
import LoginForm from "./components/LoginForm.jsx";
const App = () => {
  if (!localStorage.getItem("username")) {
    return <LoginForm />;
  }
  return (
    //todo: save the variables in the .env
    <ChatEngine
      height="100vh"
      projectID="06b3e3a5-3d7c-4ea1-90a0-811f37bd200b"
      userName={localStorage.getItem("username")}
      userSecret={localStorage.getItem("password")}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
};

export default App;
