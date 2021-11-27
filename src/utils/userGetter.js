export const getSingleUser = (id, userList) => {
  if (userList.length) {
    return userList.find((user) => {
      return user.id === id;
    });
  }
};
