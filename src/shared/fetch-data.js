const cache = {};

const fetchEducation = (username) => {
  if (cache[username] && cache[username].education)
    return Promise.resolve(cache[username].education);
  return fetch(
    `https://grpcgateway.codersrank.io/account/education?username=${username}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  )
    .then((res) => res.json())
    .then((data) => {
      if (!cache[username]) cache[username] = {};
      cache[username].education = data;
      return data;
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

  return fetch(
    `https://grpcgateway.codersrank.io/candidate/candidate/Certificate?username=${username}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  )
    .then((res) => res.json())
    .then((data) => {
      if (!cache[username]) cache[username] = {};
      cache[username].certificates = data;
      return data;
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
