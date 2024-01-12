const person = {
  firstName: 'Matthew',
  lastName: 'Hu',
  hobby: 'Running',
  job: 'Barista',
  previousJob: 'Consultant',
};

console.log('person:', person);

const fullname = person.firstName + ' ' + person.lastName;
console.log("The person's name is:", fullname);

const job = person.job;
console.log("The person's current job is:", job);

const previousJob = person.previousJob;
console.log("The person's previous job is:", previousJob);

console.log('The complete person object:', person);
