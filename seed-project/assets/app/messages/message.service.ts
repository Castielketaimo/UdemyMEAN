import { Message } from "_debugger";

export class MessageService {
    private messages: Message[] = [];

    addMessage(message: Message) {
        this.messages.push(message);
    }

    getMessage() {
        return this.messages;
    }

    deleteMessage(message: Message) {
        this.messages.slice(this.messages.indexOf(message), 1);
    }
}