function DessertsList(props) {
  let data = props.data.filter((item) => item.calories < 500);
  
  data.sort((a,b) => {
    const aCalory = a.calories;
    const bCalory = b.calories;
    return aCalory === bCalory ? 0 : aCalory > bCalory ? 1 : -1;
  });

  const desertList = data.map((item) => {
    return <li key={item.calories}>{item.name} {item.calories} cal.</li>
  });

  return (
    <div>
      <ul>
        {desertList}
      </ul>
    </div>
  )
}

export default DessertsList;
