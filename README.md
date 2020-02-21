# Scribble- A note-taking api using serverless

A Nodejs serverless API developed and deployed in aws lambda.The API has the functionality to create notes for authorized user.The contents are stored in DynamoDB  table and the attachments are stored in private S3 bucket for each user.It also has billing endpoint which facilitates user to pay for the notes using stripe payment gateway.

## Technologies used
1. AWS Lambda
2. AWS API Gateway
3. AWS S3
4. Stripe
5. Cognito

## Description

Users can signup and login using email and password.Cognito user pool handles user's authentication and send confirmation code to respective email address.Cognito identity pool authorizes user to access AWS resources such as AWS S3,AWS API gateway.From API gateway, individual lambda functions are invoked based on users interactivity.

### Requirements

- [Install the Serverless Framework](https://serverless.com/framework/docs/providers/aws/guide/installation/)
- [Configure your AWS CLI](https://serverless.com/framework/docs/providers/aws/guide/credentials/)

### Installation

To recreate the project,

``` bash
$ git clone git@github.com:SIndujan28/Scribble.git
```

Install the Node.js packages

``` bash
$ npm install
```

### Usage

To run a function on your local

``` bash
$ serverless invoke local --function myfunction
```

To simulate API Gateway locally using [serverless-offline](https://github.com/dherault/serverless-offline)

``` bash
$ serverless offline start
```

Deploy your project

``` bash
$ serverless deploy
```

Deploy a single function

``` bash
$ serverless deploy function --function hello
```

#### Running Tests

Run your tests using

``` bash
$ npm test
```

We use Jest to run our tests. You can read more about setting up your tests [here](https://facebook.github.io/jest/docs/en/getting-started.html#content).

#### Environment Variables

To add environment variables to your project

1. Rename `env.example` to `.env`.
2. Add environment variables for your local stage to `.env`.
3. Uncomment `environment:` block in the `serverless.yml` and reference the environment variable as `${env:MY_ENV_VAR}`. Where `MY_ENV_VAR` is added to your `.env` file.
4. Make sure to not commit your `.env`.


This repo is extension of [Serverless Node.js Starter](https://github.com/AnomalyInnovations/serverless-nodejs-starter) which is maintained by [Anomaly Innovations](https://anoma.ly); makers of [Seed](https://seed.run) and [Serverless Stack](https://serverless-stack.com).
