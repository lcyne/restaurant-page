const contacts = {
  address: 'Restaurant address',
  phone: '+33 1 23 45 67 89',
  email: 'restaurant@email.address',
};

const _render = () => {
  const contactInfo = document.createElement('div');
  contactInfo.id = 'contact';
  contactInfo.classList.add('invisible', 'hidden');

  const contactInfoList = document.createElement('ul');
  for (let item in contacts) {
    contactInfoList.appendChild(_createContact(item));
  }
  contactInfo.appendChild(contactInfoList);

  contactInfo.style.textAlign = 'left';
  
  return contactInfo;
};

const _createContact = (item) => {
  const line = document.createElement('li');
  line.textContent = `${item}: ${contacts[item]}`;
  line.style.margin = '1em 0 1em 0';
  return line;
};

export default _render();