
export const server = {
    host : '0.0.0.0',
    port : 8080
};

export const api = {
    email : 'shadowalkeur@outlook.com',
    scope : 'https://www.googleapis.com/auth/youtube',
    apiKey : 'AIzaSyBBd5xOryCuBOB2RtcwEepeLZdNQDaLT_k',
    clientID : "913221100787-sugugtr8e386o5lj16qn39odtltveluu.apps.googleusercontent.com",
    clientSecret : 'JbQiNKy4eNhja1d94SWPRFXR',
    projectID: "youtube-node-app",
	auth_uri:"https://accounts.google.com/o/oauth2/auth",
	tokenUri:"https://accounts.google.com/o/oauth2/token",
	authProvider_x509_cert_url:"https://www.googleapis.com/oauth2/v1/certs",
	clientSecret:"TyiVgQhkPSN-oyhBXQloAGyJ",
	redirectUris:["urn:ietf:wg:oauth:2.0:oob","http://localhost"]
};

export const routes = {
    user : {
        signIn : {
            google      : 'api/user/signin/google',
            googleAuth  : 'api/user/signin/google/auth',
            local       : 'api/user/signin/local',
            localAuth   : 'api/user/signin/local/auth'
        }
    }
};
    
