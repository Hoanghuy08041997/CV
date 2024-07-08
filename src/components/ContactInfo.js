import React from 'react';

const ContactInfo = () => {
  return (
    <div className="my-4 container">
      <h3 className="title-in mb-4">Contact Info</h3>
      <ul className="list-group">
        <li className="list-group-item d-flex align-items-center">
          <img className="logo mr-3" src="https://i.pinimg.com/564x/ef/dd/14/efdd14aadcfd49b80c78522688ad371f.jpg" alt="Email Icon" />
          <a href="mailto:hoanghuy08041977@gmail.com">hoanghuy08041977@gmail.com</a>
        </li>
        <li className="list-group-item d-flex align-items-center">
          <img className="logo mr-3" src="https://static-00.iconduck.com/assets.00/phone-icon-1024x1024-bn4mirqi.png" alt="Phone Icon" />
          <a href="tel:+84373702796">+84373702796</a>
        </li>
        <li className="list-group-item d-flex align-items-center">
          <img className="logo mr-3" src="https://t4.ftcdn.net/jpg/06/04/68/99/360_F_604689984_50VpKqlFBCOvSC54HM8Z92uneHoIJ1F9.jpg" alt="LinkedIn Icon" />
          <a href="https://www.linkedin.com/in/huyaty2003/">https://www.linkedin.com/in/huyaty2003/</a>
        </li>
      </ul>
    </div>
  );
};

export default ContactInfo;
