import Faker from 'faker';

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const typeOptions = [
  { value: 'intro', label: 'intro' },
  { value: 'project inception', label: 'project inception' },
  { value: 'middle of project', label: 'middle of project' },
  { value: 'end of project', label: 'end of project'},
  { value: 'career advice', label: 'career advice'},
  { value: 'other', label: 'other'},
  { value: 'no show', label: 'no show'}
];

const progressOptions = [
  { value: "Excellent - It's going great.", label: "Excellent - It's going great." },
  { value: "Average - The student is moving at an acceptable pace.", label: "Average - The student is moving at an acceptable pace."},
  { value: "I'm worried about this student's progress.", label: "I'm worried about this student's progress."}
]

const emails = [...Array(12)].map((_, i) => {
  return Faker.internet.email().toLowerCase()
})

const fakeSessions = [...Array(20)].map((_, i) => {
  let date = Faker.date.past();

  return  {
    studentEmail: emails[getRandomInt(0, emails.length -1)],
    description: Faker.lorem.sentence(),
    note: Faker.lorem.paragraph(),
    createdAt: date.toString(),
    duration: {
      hours: getRandomInt(0,1).toString(),
      minutes: getRandomInt(20,60).toString(),
      seconds: getRandomInt(20,60).toString()
    },
    progress: progressOptions[getRandomInt(0,2)].value,
    type: typeOptions[getRandomInt(0,6)].value,
    date: date.toString()
  }
});

export default fakeSessions;
