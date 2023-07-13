
module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "strapi-provider-upload-ftp-v2",
      providerOptions: {
        host: env("FTP_HOST"),
        port: env("FTP_PORT"),
        user: env("FTP_USER"),
        password: env("FTP_PASSWORD"),
        basePath: env("FTP_BASEPATH"),
        baseUrl: env("FTP_BASEURL"),
      },
      breakpoints: {
              xlarge: 1920,
              large: 1000,
              medium: 750,
              small: 500,
              xsmall: 64
            },
    },
  },
});

