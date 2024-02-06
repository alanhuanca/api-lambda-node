const { v4 } = require("uuid");
const AWS = require("aws-sdk");

const addTask = async (event) => {
    const dynamodb = new AWS.DynamoDB.DocumentClient();

    const { title, description } = JSON.parse(event.body);
    const createdAt = new Date().toLocaleString();
    const id = v4();

    console.log("created id: ", id);

    const newTask = {
        id,
        title,
        description,
        createdAt,
        done: false,
    };

    try {
        await dynamodb
            .put({
                TableName: "TaskTable",
                Item: newTask,
            })
            .promise();
    } catch (error) {
        return {
            statusCode: 400,
            body: JSON.stringify(error),
        };
    }


    return {
        statusCode: 200,
        body: JSON.stringify(newTask),
    };
};

module.exports = {
    addTask,
};