const DayList = function () {
  let dayArr = [
    "Lunedi",
    "Martedi",
    "Mercoledi",
    "Giovedi",
    "Venerdi",
    "Sabato",
    "Domenica",
  ];
  return (
    <ul>
      {dayArr.map((day, index) => {
        return <li key={index}>{day}</li>;
      })}
    </ul>
  );
};

export default DayList;
