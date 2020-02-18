import AWS from 'aws-sdk';

export function call(action, params) {
    const dynomoDb = new AWS.DynamoDB.DocumentClient();

    return dynomoDb[action](params).promise()
}   