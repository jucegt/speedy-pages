const dateiso = function (date) {
  const newDate = new Date(date);

  return newDate.toISOString();
};

module.exports = dateiso;
