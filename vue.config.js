module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? '/220516rwdvue/' 
      : '/'
  }


/*
// 上傳到 apache時 npm run build 要用這段更改路徑


module.exports = {
    publicPath: ''
  }


*/