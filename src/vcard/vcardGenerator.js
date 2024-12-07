import vCardsJS from 'vcards-js';

export function vcardGenerator({
  firstName,
  lastName,
  email,
  mobilePhone,
  landlinePhone,
  company,
  jobTitle,
  street,
  city,
  zipCode,
  state,
  country,
  website,
}) {
  const vcard = new vCardsJS();

  vcard.firstName = firstName;
  vcard.lastName = lastName;
  vcard.email = email;
  vcard.cellPhone = mobilePhone;
  vcard.homePhone = landlinePhone;
  vcard.organization = company;
  vcard.title = jobTitle;
  vcard.workAddress = {
    street: street,
    city: city,
    stateProvince: state,
    postalCode: zipCode,
    countryRegion: country,
  };
  vcard.url = website;

  return vcard.getFormattedString();
}