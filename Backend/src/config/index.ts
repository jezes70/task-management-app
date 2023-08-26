import dotenv from "dotenv";

dotenv.config();

export const server = String(process.env.smtp_host);

export const port = Number(process.env.smtp_port);

export const user = String(process.env.sendinblue_user);

export const password = String(process.env.sendinblue_pass);

export const jwtsecret = String(process.env.JWT_SECRET);

export const APIKey = String(process.env.cloudinary_api_key);

export const APISecret = String(process.env.cloudinary_api_secret);

export const username = String(process.env.elasticmail_username);

// export const password = String(process.env.elasticmail_password);

// export const server = String(process.env.elasticmail_server);

// export const port = Number(process.env.elasticmail_port);

export const MONGODB_URI = String(process.env.MONGODB_URI);
