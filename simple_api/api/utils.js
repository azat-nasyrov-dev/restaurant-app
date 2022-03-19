const reply = (res, body, timeout = 2000, status = 200) =>
  setTimeout(() => {
    res.status(status).json(body);
  }, timeout);

const getById = entities => id => entities.find(entity => entity.id === id);

module.exports = { reply, getById };
