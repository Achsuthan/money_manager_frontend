module.exports = {
  devServer: {
    disableHostCheck: true,
  },
  publicPath: process.env.NODE_ENV === 'production'
  ? '/money_manager_frontend/'
  : '/',
  transpileDependencies: ['vuetify'],
}
