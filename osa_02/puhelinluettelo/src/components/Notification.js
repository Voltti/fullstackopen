const Notification = ({ notificationMsg }) => {
  if (notificationMsg === null) {
    return null;
  }

  return <div className="notification">{notificationMsg}</div>;
};

export default Notification;
