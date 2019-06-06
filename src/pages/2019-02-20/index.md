---
path: '/2019-02-20'
date: '2019-02-20'
title: 'Deploying a Static Website to AWS'
tags: ['deploying', 'static', 'aws']
categories: ['code']
excerpt: 'How to deploy a static website to AWS...'
---

1 - You need to have an AWS s3 Account

```
You will need you `Access key ID` & `Secret access key`
```

2 - Install the `AWS CLI` (https://docs.aws.amazon.com/cli/latest/userguide/cli-install-macos.html)

```bash{numberLines: true}
// 1. Download the AWS CLI Bundled Installer.
$ curl "https://s3.amazonaws.com/aws-cli/awscli-bundle.zip" -o "awscli-bundle.zip"

// 2. Unzip the package.
$ unzip awscli-bundle.zip

// 3. Run the install executable
$ sudo ./awscli-bundle/install -i /usr/local/aws -b /usr/local/bin/aws
```

3 - Configure you AWS Credentials

```bash{numberLines: true}
$ aws configure

// AWS Access Key ID: *****YOUR-KEY-ID*****
// AWS Secret Access Key: *****YOUR-SECRET-KEY*****
// Default region name [us-west-1]: us-west-1
// Default output format [dist/]: dist/
```
4 - Configure your package.json to make things easier

```js{numberLines: true}
  "scripts": {
    "build": "ember build",
    "aws": "aws s3 sync dist/ s3://[your-bucket]/",
    "deploy": "npm run build && npm run aws" //<---- (You want to make sure you build because this will update your dist/ folder and get pushed into your AWS bucket) (Also, && means that `npm run aws` will run AFTER `npm run build` completes)
  },
```
5 - Deploy

```bash{numberLines: true}
$ npm run deploy

// 'npm run deploy' will `ember build` and update the 'dist/' folder.
// After the 'dist/' has been updated, the contents will publish to `s3://[your-bucket]]/`.
```
