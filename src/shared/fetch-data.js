const cache = {};

const fetchEducation = (username) => {
  if (cache[username] && cache[username].education)
    return Promise.resolve(cache[username].education);
  return fetch(`https://api.codersrank.io/v2/users/${username}/education`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then((data) => {
      if (!cache[username]) cache[username] = {};
      cache[username].education = data.education;
      return data.education;
    })
    .catch((err) => {
      // eslint-disable-next-line
      console.error(err);
      return Promise.reject(err);
    });
};
const fetchCertificates = (username) => {
  if (cache[username] && cache[username].certificates)
    return Promise.resolve(cache[username].certificates);

  return fetch(`https://api.codersrank.io/v2/users/${username}/certificates`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then((data) => {
      if (!cache[username]) cache[username] = {};
      cache[username].certificates = data.certificates;
      return data.certificates;
    })
    .catch((err) => {
      // eslint-disable-next-line
      console.error(err);
      return Promise.reject(err);
    });
};

export const fetchData = (username) => {
  return Promise.all([fetchEducation(username), fetchCertificates(username)]).then(
    ([education, certificates]) => {
      return Promise.resolve({ education, certificates });
    },
  );
};
