import React, { useState, useRef, useEffect } from 'react';

const ChatBotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm your Growth Assistant. How can I help you today?",
      sender: 'bot',
      timestamp: new Date(),
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom when new messages are added
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Handle sending messages
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      text: inputMessage,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate bot typing delay
    setTimeout(() => {
      handleBotResponse(inputMessage.toLowerCase());
      setIsTyping(false);
    }, 1000);
  };

  // Handle bot responses
  const handleBotResponse = (userMessage) => {
  let botResponse = '';
  const msg = userMessage.toLowerCase();

  // Greetings
  if (msg.includes('hello') || msg.includes('hi') || msg.includes('hey') || msg.includes('greetings')) {
    botResponse = "Hello! 👋 How are you today?";
  } 
  else if (msg.includes('good morning')) {
    botResponse = "Good morning! ☀️ Hope you have an amazing day!";
  } 
  else if (msg.includes('good afternoon')) {
    botResponse = "Good afternoon! 🌤️ How can I help you today?";
  } 
  else if (msg.includes('good evening')) {
    botResponse = "Good evening! 🌙 Did you have a productive day?";
  } 

  // Asking about services
  else if (msg.includes('service') || msg.includes('what do you do') || msg.includes('offer')) {
    botResponse = "We provide Web Development, App Development, UI/UX Design, IT Support, SEO, Digital Marketing, Cloud Solutions, and Cybersecurity services.";
  } 
  else if (msg.includes('web development')) {
    botResponse = "Our Web Development services include responsive websites, e-commerce platforms, and web apps using React, Node.js, and more.";
  } 
  else if (msg.includes('app development')) {
    botResponse = "We build mobile apps for both Android and iOS using Flutter, React Native, and native technologies.";
  } 
  else if (msg.includes('ui/ux') || msg.includes('design')) {
    botResponse = "Our UI/UX Design team creates intuitive and beautiful interfaces for web and mobile apps.";
  } 
  else if (msg.includes('seo')) {
    botResponse = "We provide SEO services to improve your website's visibility on Google and drive more traffic.";
  } 
  else if (msg.includes('digital marketing')) {
    botResponse = "Our Digital Marketing services include social media management, PPC campaigns, and content marketing.";
  } 
  else if (msg.includes('it support') || msg.includes('support')) {
    botResponse = "We provide IT Support including troubleshooting, network setup, and maintenance for businesses.";
  } 

  // Contact info
  else if (msg.includes('contact') || msg.includes('reach') || msg.includes('email') || msg.includes('phone')) {
    botResponse = "You can reach us via email at support@metrosolver.com, WhatsApp at +1 (555) 123-4567, or call us directly at +1 (555) 987-6543.";
  } 

  // Pricing / quotes
  else if (msg.includes('price') || msg.includes('cost') || msg.includes('charge') || msg.includes('quote')) {
    botResponse = "Our pricing depends on the project scope. For a detailed quote, I can connect you with our sales team. Would you like me to do that?";
  } 

  // Portfolio / projects
  else if (msg.includes('project') || msg.includes('portfolio') || msg.includes('work')) {
    botResponse = "Check out our latest projects at https://metro-solver-ten.vercel.app/ - we showcase web, mobile, and UI/UX work there.";
  } 

  // Team / company info
  else if (msg.includes('team') || msg.includes('who are you') || msg.includes('about')) {
    botResponse = "We are a team of developers, designers, and digital strategists dedicated to delivering top-notch IT solutions.";
  } 

  // Location
  else if (msg.includes('location') || msg.includes('where')) {
    botResponse = "Our headquarters are in the USA 🇺🇸, but we work with clients globally 🌎.";
  } 

  // Small talk
  else if (msg.includes('how are you') || msg.includes('how is it going')) {
    botResponse = "I'm just a bot, but I'm running at full speed! 😎 How about you?";
  } 
  else if (msg.includes('thank') || msg.includes('thanks')) {
    botResponse = "You're welcome! 😊 Happy to help.";
  } 
  else if (msg.includes('joke') || msg.includes('funny')) {
    botResponse = "Why do programmers prefer dark mode? Because light attracts bugs! 😆";
  } 
  else if (msg.includes('weather')) {
    botResponse = "I don't have live weather updates yet, but you can check your local forecast online! 🌤️";
  } 
  else if (msg.includes('music')) {
    botResponse = "I love digital beats! 🎵 Do you want me to suggest some relaxing programming music?";
  } 
  else if (msg.includes('motivate') || msg.includes('motivation')) {
    botResponse = "Keep pushing forward! 🚀 Every challenge is an opportunity to grow.";
  } 
  else if (msg.includes('food') || msg.includes('eat')) {
    botResponse = "I don’t eat, but I love serving information! 😄 What's your favorite food?";
  } 
  else if (msg.includes('movie') || msg.includes('film')) {
    botResponse = "I enjoy cinema in theory! 🍿 Do you want movie suggestions?";
  } 

  // Goodbye
  else if (msg.includes('bye') || msg.includes('goodbye') || msg.includes('see you')) {
    botResponse = "Goodbye! Have an amazing day 🚀";
  } 

  // Help
  else if (msg.includes('help') || msg.includes('assist') || msg.includes('support')) {
    botResponse = "Sure! I can provide information about our services, pricing, portfolio, or contact details. What would you like to know?";
  } 

  // Fallback for unknown queries
  else {
    botResponse = "Hmm, I'm not sure about that 🤔. Let me connect you with a human agent who can assist you further.";
  }

  const botMessage = {
    id: messages.length + 2,
    text: botResponse,
    sender: 'bot',
    timestamp: new Date(),
  };

  setMessages(prev => [...prev, botMessage]);
};

  // Format timestamp
  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="fixed bottom-15 right-16 z-50">
      
      {/* Floating Chat Icon */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="relative w-22 h-22 bg-gradient-to-r rounded-full shadow-2xl hover:shadow-purple-500/50 transform hover:scale-110 transition-all duration-300 flex items-center justify-center group"
        >
          {/* Animated chat icon */}
          <div className="text-white text-2xl"><img src="frame_3.gif" alt="" /></div>
          
          {/* Online indicator dot */}
          
          
          {/* Hover tooltip */}
          <div className="absolute bottom-full mb-2 hidden group-hover:block bg-gray-900 text-white text-xs py-1 px-2 rounded whitespace-nowrap">
            Chat with us
          </div>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="w-80 sm:w-96 h-96 bg-gray-900 rounded-2xl shadow-2xl border border-purple-500/30 flex flex-col overflow-hidden">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 to-violet-600 px-4 py-3 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              {/* Bot Avatar */}
              <div className="relative">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  G
                </div>
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-purple-600"></div>
              </div>
              
              {/* Title and Subtitle */}
              <div>
                <h3 className="text-white font-semibold text-sm">Growth Assistant</h3>
                <p className="text-white/80 text-xs">Typically replies instantly</p>
              </div>
            </div>
            
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white transition-colors duration-200 text-lg font-bold w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10"
            >
              ×
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-900">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className="flex items-end space-x-2 max-w-[80%]">
                  {/* Bot Avatar for bot messages */}
                  {message.sender === 'bot' && (
                    <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                      G
                    </div>
                  )}
                  
                  {/* Message Bubble */}
                  <div
                    className={`rounded-2xl px-4 py-2 ${
                      message.sender === 'user'
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-br-none'
                        : 'bg-gray-800 text-gray-100 rounded-bl-none'
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                    <p className="text-xs opacity-70 mt-1">
                      {formatTime(message.timestamp)}
                    </p>
                  </div>
                  
                  {/* User Avatar for user messages */}
                  {message.sender === 'user' && (
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                      U
                    </div>
                  )}
                </div>
              </div>
            ))}
            
            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex items-end space-x-2">
                  <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    G
                  </div>
                  <div className="bg-gray-800 text-gray-100 rounded-2xl rounded-bl-none px-4 py-3">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-gray-700 bg-gray-900">
            <form onSubmit={handleSendMessage} className="flex space-x-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 bg-gray-800 text-white placeholder-gray-400 rounded-full px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
              />
              <button
                type="submit"
                disabled={!inputMessage.trim()}
                className="bg-gradient-to-r from-purple-600 to-violet-600 text-white rounded-full w-12 h-12 flex items-center justify-center hover:from-purple-700 hover:to-violet-700 transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                <svg
                  className="w-5 h-5 transform rotate-45"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBotWidget;