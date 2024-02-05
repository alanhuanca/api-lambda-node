module.exports.handler = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Api softek",
        input: null,
      },
      null,
      2
    ),
  };
};
