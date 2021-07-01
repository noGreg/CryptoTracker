class Http {
  static instance = new Http();

  get = async url => {
    try {
      let req = await fetch(url);
      let json = await req.json();

      return json;
    } catch(err) {
      console.lg('HTTP GET ERROR: ', err);

      throw Error(err);
    }
  }

  post = async url => {
    try {
      let req = await fetch({
        url,
        method: 'post',
        body
      });

      let json = await req.json();

      return json;
    } catch(err) {
      console.log('HTTP POST ERROR: ', err);

      throw Error(err);
    }
  }
}

export default Http;