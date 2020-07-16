class EasyHTTP {
  //Make GET req
  async get(url) {
    const res = await fetch(url);
    const resData = await res.json();
    return resData;
  }

  //Make POST req
  async post(url, data) {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(data),
    });

    const resData = await res.json();
    return resData;
  }

  //Make PUT req
  async put(url, data) {
    const res = await fetch(url, {
      method: 'PUT',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(data),
    });

    const resData = await res.json();
    return resData;
  }

  //Make DELETE req
  async delete(url, data) {
    const res = await fetch(url, {
      method: 'DELETE',
    });

    const resData = await 'Resource Deleted!';
    return resData;
  }
}
