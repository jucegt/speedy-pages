const dateiso = function (date) {
  if (!date) return null;

  const newDate = new Date(date);
  return newDate.toISOString();
};

module.exports = dateiso;
