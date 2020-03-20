module.exports = {
  chainWebpack: (config) => {
    config
      .plugin('html')
      .tap((args) => {
        // eslint-disable-next-line no-param-reassign
        args[0].title = 'SteamSpeak';
        return args;
      });
  },
  pwa: {
    name: 'SteamSpeak',
    themeColor: '#448aff',
    msTileColor: '#da532c',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    gcm_sender_id: '1021489007211',
    manifestOptions: {
      background_color: '#448aff',
    },
    // configure the workbox plugin
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: 'src/service-worker.js',
    },
  },
  integrity: true,
};
