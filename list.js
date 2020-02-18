import * as dynamoDbLib from './libs/dynomodb-lib';
import {success, failure} from './libs/response-lib';

export async function main(event,context) {
    const params={
        TableName:process.env.tableName,
        KeyConditionExpression: "userId = :userId",
        ExpressionAttributeValues: {
            ":userId": event.requestContext.identity.cognitoIdentityId
        }
    };

    try {
        const result=await dynamoDbLib.call("query",params);
        return success(result.Items);
    } catch(err) {
        return failure({status:false});
    }
}