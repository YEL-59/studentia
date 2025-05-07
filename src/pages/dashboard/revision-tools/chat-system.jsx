import chatIcon from '@/assets/icons/chat-icon.svg';
import chatWithAi from '@/assets/icons/chat-with-ai.svg';
import chatgptIcon from '@/assets/icons/chatgpt-icon.svg';
import microPhoneIcon from '@/assets/icons/microphone-icon.svg';
import promptLibrary from '@/assets/icons/prompt-library.svg';
import refreshIcon from '@/assets/icons/refresh-icon.svg';
import sendIcon from '@/assets/icons/send.svg';
import uploadIcon from '@/assets/icons/upload-icon.svg';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useEffect, useRef, useState } from 'react';
import aiChatIcon from '@/assets/icons/chat-message-icon.svg';

function ChatSystem() {
  const [messages, setMessages] = useState([
    {
      role: 'bot',
      content: 'Hello! How can I assist you today?',
      heading: 'AI Assistant',
      para: 'Hello! How can I assist you today?',
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // Function to scroll to bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Scroll to bottom whenever messages change
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage = {
      role: 'user',
      content: inputValue,
      heading: 'You',
      para: inputValue,
    };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      // Simulate API call (replace with actual API call)
      const botResponse = await simulateAIResponse(inputValue);

      // Add bot response
      setMessages((prev) => [
        ...prev,
        {
          role: 'bot',
          content: botResponse,
          heading: 'AI Assistant',
          para: botResponse,
        },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: 'bot',
          content: 'Sorry, something went wrong. Please try again.',
          heading: 'AI Assistant',
          para: 'Sorry, something went wrong. Please try again.',
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  // Mock AI response function (replace with real API call)
  const simulateAIResponse = async (question) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          `I received your question: "${question}". This is a simulated response. In a real implementation, you would connect to an AI service API.`
        );
      }, 1500);
    });
  };

  const handleRefresh = () => {
    setMessages([
      {
        role: 'bot',
        content: 'Hello! How can I assist you today?',
        heading: 'AI Assistant',
        para: 'Hello! How can I assist you today?',
      },
    ]);
  };

  return (
    <div className="w-full relative flex flex-col min-h-[60vh] justify-between">
      {/* Watermark */}
      <div className="rounded-[16px] border border-[#D24AC966] p-5 w-max mx-auto absolute top-[20%] left-1/2 transform -translate-x-1/2 mt-4 z-0 opacity-50">
        <img src={chatWithAi} alt="icon" className="w-20 h-20" />
      </div>

      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={chatIcon} alt="icon" />
          <p className="text-lg font-medium leading-[164%] capitalize">
            Chat With AI
          </p>
        </div>
        <button onClick={handleRefresh}>
          <img src={refreshIcon} alt="Refresh chat" />
        </button>
      </div>

      {/* Chat messages */}
      <div className="flex flex-col gap-5 flex-grow overflow-y-auto gradient-scrollbar mb-4 h-[400px]">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex gap-3 py-6 px-4 rounded-[16px] w-full ${
              message.role === 'bot'
                ? 'rounded-[29px_24px_24px_26px] bg-[rgba(210,74,201,0.20)]'
                : 'bg-[#7A43A44D] flex-row-reverse'
            }`}
          >
            <img src={aiChatIcon} alt="" className="flex-shrink-0" />
            <div className="flex flex-col gap-2 w-full">
              <h1
                className={`text-xl font-medium leading-[132%] tracking-[-0.4px] ${
                  message.role === 'user' && 'text-right'
                }`}
              >
                {message.heading}
              </h1>
              <p className="text-sm leading-[164%] whitespace-pre-wrap break-all break-words w-full overflow-x-visible">
                {message.content}
              </p>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex flex-col gap-2 py-[32px] px-[22px] rounded-[16px] bg-[linear-gradient(180deg,rgba(122,67,164,0.3)_0%,rgba(96,73,188,0.17)_100%)]">
            <h1 className="text-xl font-medium leading-[132%] tracking-[-0.4px]">
              AI Assistant
            </h1>
            <p className="text-sm leading-[164%]">Thinking...</p>
          </div>
        )}
        {/* Empty div to act as scroll anchor */}
        <div ref={messagesEndRef} />
      </div>

      {/* Input form */}
      <form
        onSubmit={handleSubmit}
        className="rounded-[16px] border border-[#7A43A44D] p-3 flex flex-col gap-6"
      >
        <textarea
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="What do you want to ask?"
          className="w-full text-lg leading-[164%] text-[#BCBCBC] border-none outline-none focus-visible:ring-0 resize-none min-h-[40px] max-h-[120px] overflow-y-auto"
          disabled={isLoading}
          rows={1}
        />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-full border border-[#7A43A4]">
              <img src={uploadIcon} alt="Upload" />
            </div>
            <div className="p-3 rounded-full border border-[#7A43A4]">
              <img src={microPhoneIcon} alt="Microphone" />
            </div>
            <div className="flex items-center gap-2 cursor-pointer p-3 rounded-[46px] border border-[#7A43A4]">
              <img src={chatgptIcon} alt="GPT" />
              <p className="text-xs leading-[164%]">GPT 4</p>
            </div>
            <div className="flex items-center gap-2 cursor-pointer p-3 rounded-[46px] border border-[#7A43A4]">
              <img src={promptLibrary} alt="Prompt Library" />
              <p className="text-xs leading-[164%]">Prompt Library</p>
            </div>
          </div>
          <Button
            type="submit"
            disabled={isLoading || !inputValue.trim()}
            className="flex items-center gap-1 cursor-pointer"
          >
            <p>Send</p>
            <img src={sendIcon} alt="Send" />
          </Button>
        </div>
      </form>
    </div>
  );
}

export default ChatSystem;
