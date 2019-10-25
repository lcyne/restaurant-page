const contacts = {
  address: 'Restaurant address',
  phone: '+33 1 23 45 67 89',
  email: 'restaurant@email.address',
};

const render = () => {
  const contactInfo = document.createElement('div');
  contactInfo.id = 'contact-info';

  const contactInfoList = document.createElement('ul');
  for (let item in contacts) {
    contactInfoList.appendChild(_createContact(item));
  }
  contactInfo.appendChild(contactInfoList);

  return contactInfo;
};

const _createContact = (item) => {
  const line = document.createElement('li');
  line.textContent = `${item}: ${contacts[item]}`;
  return line;
};

export default render;