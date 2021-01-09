const localUser = {
    firstName: '',
    lasName: '',
    email: '',
    avatarUrl: 'avatar-placeholder.png',
    password: '',
    phone: {
        home: '',
        cell: '',
    },
    isAdmin: false,
    team: '5fa2dd0998fe8fbfdf5eaac2',
    parentForm: {
        rider: {
            firstName: '',
            lastName: '',
            github: '',
            email: '',
            phone: {
                cell: '',
                home: '',
            },
        },
        parentOne: {
            phone: {
                home: '',
                cell: '',
            },
            firstName: '',
            lastName: '',
        },
        parentTwo: {
            phone: {
                home: '',
                cell: '',
            },
            firstName: '',
            lastName: '',
        },
        emergencyContactOne: {
            firstName: '',
            lastName: '',
            phone: {
                cell: '',
                home: '',
            },
        },
    },
    insurance: {
        provider: '',
        group: '',
        number: '',
    },
    emergencyFormDone: false,
    medicalConditions: false,
    asthma: false,
    medicationRequired: false,
    ibuprofenRelease: true,
    allergies: '',
    __v: 0,
};

export default localUser;
