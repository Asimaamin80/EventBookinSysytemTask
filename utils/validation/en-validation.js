export const enValidation = {
  name: {
    presence: {
      message: '^Please enter your Name',
    },
  },
  sms: {
    presence: {
      message: '^Please enter your message',
    },
  },
  Fname: {
    presence: {
      message: '^Please enter an First Name',
    },
  },
  Lname: {
    presence: {
      message: '^Please enter an Last Name',
    },
  },
  email: {
    presence: {
      message: '^Please enter an email address',
    },
    email: {
      message: '^Please enter a valid email address',
    },
  },

  password: {
    presence: {
      message: '^Please enter a password',
    },
    length: {
      minimum: 6,
      message: '^Your password must be at least 6 characters',
    },
  },
  passwordN: {
    presence: {
      message: '^Please enter New Password',
    },
    length: {
      minimum: 6,
      message: '^Your New Password must be at least 6 characters',
    },
  },
  passwordC: {
    presence: {
      message: '^Please Re-enter New Password',
    },
    length: {
      minimum: 6,
      message: '^Your Password must be at least 6 characters',
    },
  },
  cPassword: {
    presence: {
      message: '^Please enter a confirm password',
    },
    length: {
      minimum: 6,
      message: '^Your password must be at least 6 characters',
    },
  },
  phone: {
    presence: {
      message: '^Please enter a phone number',
    },
    length: {
      minimum: 11,
      message: '^Your phone no must be at least 11 number',
    },
  },
  Cardnumber: {
    presence: {
      message: '^Please enter a Cardnumber',
    },
    length: {
      minimum: 11,
      message: '^Your phone no must be at least 13 number',
    },
  },
  Comments: {
    presence: {
      message: '^Please enter an Comments',
    },
  },
  Files: {
    presence: {
      message: '^Please Select Files',
    },
  },
  issue: {
    presence: {
      message: '^Please Select Orthopedic Issue',
    },
  },
  Nameoncard: {
    presence: {
      message: '^Please enter an Nameoncard',
    },
  },
  cpassword: {
    presence: {
      message: '^Please enter a confirm password',
    },
    length: {
      minimum: 6,
      message: '^Your password must be at least 6 characters',
    },
  },
  DateOfBirth: {
    presence: {
      message: '^Please enter your Date of Birth',
    },
  },
  Expirydate: {
    presence: {
      message: '^Please enter your Expiry date',
    },
  },
  CVV: {
    presence: {
      message: '^Please enter your CVV',
    },
  },
  npi: {
    presence: {
      message: '^Please enter your NPI Number',
    },
  },
  about: {
    presence: {
      message: '^Please enter about yourself',
    },
  },
  languages: {
    presence: {
      message: '^Please enter languages',
    },
  },
  specialty: {
    presence: {
      message: '^Please enter your specialty',
    },
  },
  specialtyExperience: {
    presence: {
      message: '^Please enter your experince',
    },
  },
  practiceNames: {
    presence: {
      message: '^Please tell about your practices',
    },
  },
  educationDetails: {
    presence: {
      message: '^Please enter your education',
    },
  },
  hospitalAffiliations: {
    presence: {
      message: '^Please enter your Hospital Affiliations',
    },
  },
};
