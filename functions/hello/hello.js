// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
// handler function
const handler = async (event, context) => {
  try {
    // Get name prop
    const subject = event.queryStringParameters.name || "World";

    // Return object when called
    return {
      statusCode: 200, // Status Ok
      body: JSON.stringify({ message: `Hello ${subject}` }), // Send Body object
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    };
  } catch (error) {
    // If error show error
    return { statusCode: 500, body: error.toString() };
  }
};

module.exports = { handler }; // Export it
