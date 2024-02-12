import "./List.css";

function List({ onActivities }) {
  return (
    <div>
      <ul>
        {onActivities.map((activity) => (
          <li key={activity.id}>{activity.inputs.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default List;
