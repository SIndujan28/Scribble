import uuid from 'uuid';
import * as dynamoDbLib from './libs/dynomodb-lib';
import { success,failure } from './libs/response-lib';

export async function main(event, context, callback) {
    const data=JSON.parse(event.body);

    const params={
        TableName: process.env.tableName,
        Item: {
            userId: event.requestContext.identity.cognitoIdentityId,
            noteId:uuid.v1(),
            content: data.content,
            attachment: data.attachment,
            createdAt: Date.now()

        }
    };

    try {
        await dynamoDbLib.call("put", params);
        return success(params.Item);
    } catch(e) {
        return failure({status:false});
    }
}