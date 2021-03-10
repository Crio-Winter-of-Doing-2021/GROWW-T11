import axios from 'axios';

class ActionProvider {
    constructor(createChatBotMessage, setStateFunc, createClientMessage,state) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
      this.createClientMessage = createClientMessage;
      this.state=state;
    }
  
    greet() {
      const greetingMessage = this.createChatBotMessage("Hi, friend.")
      this.updateChatbotState(greetingMessage)
    }

    handleAccountList = (text) => {
      const clientMessage=this.createClientMessage(text)
      const message = this.createChatBotMessage(
        `Fantastic, I've got the following categories in ${text}:`,
        {
          widget: "javascriptLinks",
        }
      );
  
      this.updateChatbotState(message,clientMessage);
    };

    handleQuestionClick = (selectedQuestion) =>{
      const clientMessage=this.createClientMessage(selectedQuestion.questionText)
      axios.get(`http://localhost:8081/answer/${selectedQuestion._id}`)
      .then(res => {
        var ans = res.data.answer;
        var message = this.createChatBotMessage(ans)
        this.updateChatbotState(message,clientMessage);
      });
    
    }

    updateChatbotState(message,clientMessage="") { 
         this.setState(prevState => ({
            ...prevState, messages: [...prevState.messages,clientMessage,message]
          }))
        }
  }
  
  export default ActionProvider;