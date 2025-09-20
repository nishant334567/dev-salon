"use client";

import {useState} from "react";

export default function ChatBot() {
    const [input,setInput] = useState("");
    const [reply,setReply] = useState("");
    const [loading,setLoading] = useState(false);
    

  const sendMessage = async ()=>{
    if(!input.trim()) return;
    setLoading(true);
    try{
    const res = await fetch("api/chat",{
      method:"POST",
      body:JSON.stringify({message:input}),
   })
      const data =  await res.json();
      setReply(data.reply);
    }catch(error){
      console.error("chat error:",error)
      setReply("something went wrong")
    }finally{
      setInput("")
      setLoading(false);
    }
  };
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", maxWidth: "400px" }}>
      <h3>💻 Dev Salon AI Assistant</h3>

      {/* Only last reply shown */}
      {reply && (
        <p>
          <b>Assistant:</b> {reply}
        </p>
      )}

      {/* Input box */}
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ask me anything..."
        style={{ width: "70%", marginRight: "5px" }}
      />
      <button onClick={sendMessage} disabled={loading}>
        {loading ? "Thinking..." : "Send"}
      </button>
    </div>
  );
}