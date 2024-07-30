/* NEED TO BE UPDATED */

import { S3Client } from "@aws-sdk/client-s3";

// database
export const DB_HOST_URL = "localhost";
export const DB_HOST_PORT = 5432;
export const DB_NAME = "kreddit";
export const DB_USER = "postgres";
export const DB_PASSWORD = "Pieis:314";

// token secrets
export const ACCESS_TOKEN_SECRET = "eb86f5b78a76ed904ec2cd19750633d81a1d03cc86b5e0f787301fcee3137bee00245776eb548bcfe61161ffadf918c2eaafc5665859dedc6663fd147629bbb6";
export const REFRESH_TOKEN_SECRET = "fe82cf45ee6566e80ab5102e4da9957b67f5a86a1d332d38f7af250b890b89f7cb78c8e046b1ee130629acbd11d11d9b0fa4bde7fe9acefda1deccad5c30570d";

export const ACCESS_TOKEN_EXPIRES_IN_DAYS = 14;

// credentials
// AWS S3 credentials
export const credentials = {
    aws: {
        region: "us-east-1",
        credentials: {
            accessKeyId: "AKIAZSOJSKCYPMC2UMU4",
            secretAccessKey: "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"
        }
    }
};
// AWS S3
export const s3Client = new S3Client(credentials.aws);
// AWS S3 bucket name
export const s3BucketName = {
    image: "kreddit-images",
    avatar: "kreddit-avatars"
};
