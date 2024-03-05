
process.env['GROQ_API_KEY'] = ' ';

const textToSend = {
    "messages": [
        {
            "role": "user",
            "content": "Who are the Anishinaabe?"
        }
    ],
    "model": "mixtral-8x7b-32768"
};

fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env['GROQ_API_KEY']}`
    },
    body: JSON.stringify(textToSend)
})
// doesnt break line with , or ; (continues)
.then(response => response.json())

// doesnt break line with , or ; (continues)
// sets data from response as variable
.then(data => {

    // full JSON response
    console.log("Full JSON Response: ", JSON.stringify(data, null, 2));
    
    // second tier within choices = message content
    const content = data.choices[0].message.content;
    
    console.log("\n ^ . ^".repeat(4))

    console.log("Parsed content: ", content);

})
.catch(error => console.error(error));