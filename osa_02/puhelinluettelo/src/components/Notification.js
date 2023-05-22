const Notification = ({ notificationMsg, notificationType }) => {
  if (notificationMsg === null) {
    return null;
  }

  return <div className={notificationType}>{notificationMsg}</div>;
};

export default Notification;
