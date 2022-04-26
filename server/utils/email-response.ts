export default ({
  quiz_title: title,
  teacher_name: teacher,
  teacher_bio: bio,
  quiz_description: about,
  quiz_mark: mark,
  quiz_duration: duration,
  student_name: student,
  student_score: score,
}) => `
  <div>
    <h1 style="text-align: center; color: #F9AA33;">${title} Test</h1>
    <p>Hi ${student}</p>
    <p style="font-weight: 300; color: #555; font-size: 0.9rem;">This test was created by <span style="color: #526dbe; font-weight: bold;">${teacher}</span>, <q>${bio}</q></p>
    <h2>About the test</h2>
    <ul>
      ${about && `<li>Test Description: ${about}</li>`}
      <li>Test Mark: ${mark} points</li>
      <li>Test Duration: ${duration} minutes</li>
    </ul>
    <h2 style="text-align: center">Your Result Is <span style="${`color: ${score >= mark / 2 ? 'green' : 'red'}`}">${score}/${mark}</span></h2>
  </div>
`;
