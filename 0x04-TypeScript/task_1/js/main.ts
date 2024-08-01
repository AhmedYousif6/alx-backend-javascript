interface Teacher {
  firstName: string,
  readonly fullTimeEmployee: boolean,
  lastName: string,
  yearsOfExperience?: number,
  readonly location: string,
  [key: string]: any
};
