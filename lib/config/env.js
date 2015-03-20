/**
 * Module dependencies.
 */

var env = process.env;

/**
 * Expose heroku helper
 */

module.exports = {
  protocol: env.PROTOCOL,
  host: env.HOST,
  publicPort: env.PUBLIC_PORT,
  privatePort: env.PORT,
  mongoUrl: env.MONGO_URL,
  client: env.CLIENT_CONF ? env.CLIENT_CONF.split(',') : [ "organization name", "locale", "protocol", "host", "logo", "logo mobile", "redirectUrl", "deploymentDomain", "maintenance" ],
  logo: env.LOGO,
  "logo mobile": env.LOGO_MOBILE,
  locale: env.LOCALE,
  auth: {
    facebook: {
      clientID: env.FB_CLIENT_ID,
      clientSecret: env.FB_CLIENT_SECRET,
      callback: env.FB_CALLBACK
    },
    twitter: {
      consumerKey: env.TW_CONSUMER_KEY,
      consumerSecret: env.TW_CONSUMER_SECRET,
      callback: env.TW_CALLBACK
    }
  },
  "organization name": env.ORGANIZATION_NAME,
  "organization url": env.ORGANIZATION_URL,
  notifications: {
    url: env.NOTIFICATIONS_URL,
    token: env.NOTIFICATIONS_TOKEN
  },
  manager: {
    url: env.MANAGER_URL,
    token: env.MANAGER_TOKEN
  },
  secret: env.HUB_SECRET,
  redirectUrl: env.REDIRECT_URL,
  deploymentDomain: env.DEPLOYMENT_DOMAIN,
  maintenance: env.MAINTENANCE
}
