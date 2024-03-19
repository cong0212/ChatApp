import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
    return (
        <div className="background">
            <PrettyChatWindow
                projectId='739c67d9-c40f-4fb0-931d-f57b78580567'
                username={props.user.username}
                secret={props.user.secret}
            />
        </div>
    );
};

export default ChatsPage;